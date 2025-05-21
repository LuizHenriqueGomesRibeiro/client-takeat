import { OrderArgProps, ProductDataProps, RestaurantProps } from "../../api-query-objects/types";
import { createContext, useContext, ReactNode, useEffect, useState } from "react";
import { privateClient, publicClient } from "../../api-query-objects/factory";
import { get, set } from "idb-keyval";

export type fetchOrderStatusProps = 'success' | 'error' | 'idle' | 'loading' | 'loaded';

interface ApiContextType {
  handleSelectProduct: (args: OrderArgProps) => void,
  handleChangeOrderAmount: (amount: number) => void,
  handleSendOrder: (args: OrderArgProps) => void,
  fetchOrderStatus: fetchOrderStatusProps,
  products: ProductDataProps[] | undefined,
  restaurant: RestaurantProps | undefined,
  order: OrderArgProps | undefined,
  fetchOrderError: string,
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const ApiProvider = ({ children }: { children: ReactNode }) => {
  const [restaurant, setRestaurant] = useState<RestaurantProps>();
  const [products, setProducts] = useState<ProductDataProps[]>();
  const [order, setOrder] = useState<OrderArgProps>();
  
  const { makeRequest: fetchOrder, error, status: fetchOrderStatus } = privateClient.createOrder();
  const { makeRequest: fetchProducts } = privateClient.getProducts();
  const { makeRequest: fetchLogin } = publicClient.login();

  //@ts-ignore
  const fetchOrderError = error && error.response.data.error;

  const handleSendOrder = (args: OrderArgProps) => fetchOrder(args);

  const handleSelectProduct = (args: OrderArgProps) => setOrder(() => {
    set('order', args);
    return args;
  });

  const handleChangeOrderAmount = (amount: number) => setOrder(prev => {
    const args = {
      ...prev!,
      amount
    };

    set('order', args);
    return args;
  });

  useEffect(() => {
    const fetch = async () => {
      const idbOrder = await get('order');

      if (idbOrder) {
        setOrder(idbOrder);
      }
    }

    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const idbRestaurant = await get('restaurant');
      const idbProducts = await get('products');
      const token = await get('token');
      const id = await get('id');

      if (!token && !id) {
        fetchLogin({
          email: import.meta.env.VITE_EMAIL,
          password: import.meta.env.VITE_PASSWORD
        });
      }

      if (idbRestaurant) {
        setRestaurant(idbRestaurant);
      }

      if (!idbProducts) {
        fetchProducts();
      } else {
        setProducts(idbProducts);
      }
    }

    fetch();
  }, []);

  return <ApiContext.Provider value={{
    order, 
    products,
    restaurant,
    fetchOrderError,
    fetchOrderStatus,
    handleSendOrder,
    handleSelectProduct,
    handleChangeOrderAmount
  }}>
    {children}
  </ApiContext.Provider>
};

export const useApi = () => {
  const context = useContext(ApiContext);

  if (!context) {
    throw new Error("useOrders must be used within an OrdersProvider");
  }

  return context;
};