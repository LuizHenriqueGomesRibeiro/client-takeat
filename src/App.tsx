import { ErrorPage, OrderPage, ProductsPage, SuccessPage } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApiProvider } from './core/contexts/api';
import { parseCookies } from 'nookies';

import pagination from './core/pagination';
import './App.css';

const Renderer = ({ Component }: { Component: React.ComponentType }) => {
  const { token } = parseCookies();

  if (token) {
    return <Component/>
  }

  return <ErrorPage/>
}

function App() {
  return <ApiProvider>
    <BrowserRouter>
      <Routes>
        <Route 
          path={pagination.products} 
          element={<Renderer Component={ProductsPage}/>} 
        />
        <Route 
          path={pagination.success} 
          element={<Renderer Component={SuccessPage}/>} 
        />
        <Route 
          path={pagination.order} 
          element={<Renderer Component={OrderPage}/>} 
        />
        <Route 
          path="*" 
          element={<Renderer Component={ProductsPage}/>} 
        />
      </Routes>
    </BrowserRouter>
  </ApiProvider>
}

export default App;