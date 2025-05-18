import { CreateOrderArgProps, OrderArgProps, ProductDataProps, RestaurantProps } from "../../api-query-objects/types";
import { createContext, useContext, ReactNode, useEffect, useState } from "react";
import { privateClient, publicClient } from "../../api-query-objects/factory";
import { get, set } from "idb-keyval";

interface ApiContextType {
  order: OrderArgProps | undefined,
  restaurant: RestaurantProps | undefined,
  products: ProductDataProps[] | undefined,
  handleSendOrder: (args: CreateOrderArgProps) => void,
  handleSelectProduct: (args: OrderArgProps) => void,
  handleChangeOrderAmount: (amount: number) => void,
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const ApiProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<ProductDataProps[]>();
  const [restaurant, setRestaurant] = useState<RestaurantProps>();
  const [order, setOrder] = useState<OrderArgProps>();
  
  const { makeRequest: fetchProducts } = privateClient.getProducts();
  const { makeRequest: fetchOrder } = privateClient.createOrder();
  const { makeRequest: fetchLogin } = publicClient.login();

  const handleSendOrder = (args: CreateOrderArgProps) => fetchOrder(args);

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