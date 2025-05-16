import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { OrderPage, ProductsPage, UserPage } from './pages';
import pagination from './core/pagination';
import './App.css';

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path={pagination.products} element={<ProductsPage/>} />
      <Route path={pagination.order} element={<OrderPage/>} />
      <Route path={pagination.profile} element={<UserPage/>} />
      <Route path={pagination.login} element={<UserPage/>} />
      <Route path="*" element={<>Não encontrado</>} />
    </Routes>
  </BrowserRouter>
}

export default App;