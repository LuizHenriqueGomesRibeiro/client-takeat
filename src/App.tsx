import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { OrderPage, ProductsPage, SuccessPage, UserPage } from './pages';
import { ApiProvider } from './core/contexts/api';

import pagination from './core/pagination';
import './App.css';

function App() {
  return <ApiProvider>
    <BrowserRouter>
      <Routes>
        <Route path={pagination.products} element={<ProductsPage/>} />
        <Route path={pagination.success} element={<SuccessPage/>} />
        <Route path={pagination.profile} element={<UserPage/>} />
        <Route path={pagination.order} element={<OrderPage/>} />
        <Route path="*" element={<>Não encontrado</>} />
      </Routes>
    </BrowserRouter>
  </ApiProvider>
}

export default App;