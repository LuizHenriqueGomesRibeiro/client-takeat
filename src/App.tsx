import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { OrderPage, ProductsPage, UserPage } from './pages';
import { server } from './core/api-query-objects/factory';

import pagination from './core/pagination';
import './App.css';

function App() {
  const args = {
    email: import.meta.env.VITE_EMAIL,
    password: import.meta.env.VITE_PASSWORD
  };
  const data = server.login(args);

  console.log(data);

  return <BrowserRouter>
    <Routes>
      <Route path={pagination.products} element={<ProductsPage/>} />
      <Route path={pagination.profile} element={<UserPage/>} />
      <Route path={pagination.order} element={<OrderPage/>} />
      <Route path="*" element={<>Não encontrado</>} />
    </Routes>
  </BrowserRouter>
}

export default App;