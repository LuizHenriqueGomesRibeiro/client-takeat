import { createContext, useContext, ReactNode, useEffect, useState } from "react";
import { OrderArgProps, ProductDataProps } from "../../api-query-objects/types";
import { privateClient, publicClient } from "../../api-query-objects/factory";
import { get } from "idb-keyval";

interface ApiContextType {
  products: ProductDataProps[] | undefined,
  handleCreateOrder: (args: OrderArgProps) => void,
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const ApiProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<ProductDataProps[]>();
  
  const { makeRequest: fetchProducts } = privateClient.getProducts();
  const { makeRequest: fetchMakeOrder } = privateClient.createOrder();
  const { makeRequest: fetchLogin } = publicClient.login();

  const handleCreateOrder = (args: OrderArgProps) => {
    fetchMakeOrder(args);
  }

  useEffect(() => {
    const fetch = async () => {
      const idbProducts = await get('products');
      const token = await get('token');
      const id = await get('id');

      if (!token && !id) {
        fetchLogin({
          email: import.meta.env.VITE_EMAIL,
          password: import.meta.env.VITE_PASSWORD
        });
      }

      if (!idbProducts) {
        fetchProducts();
      } else {
        setProducts(idbProducts);
      }
    }

    fetch();
  }, []);

  return <ApiContext.Provider value={{ products, handleCreateOrder }}>
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