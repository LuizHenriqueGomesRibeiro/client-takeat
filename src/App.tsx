import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { OrderPage, ProductsPage, UserPage } from './pages';
import { ApiProvider, useApi } from './core/contexts/order';

import pagination from './core/pagination';
import './App.css';

function App() {
  return <ApiProvider>
    <BrowserRouter>
      <Routes>
        <Route path={pagination.products} element={<ProductsPage/>} />
        <Route path={pagination.profile} element={<UserPage/>} />
        <Route path={pagination.order} element={<OrderPage/>} />
        <Route path="*" element={<>Não encontrado</>} />
      </Routes>
    </BrowserRouter>
  </ApiProvider>
}

export default App;