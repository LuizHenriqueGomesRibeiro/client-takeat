import { RestaurantsPage, OrderPage, ProductsPage, UserPage } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import pagination from './core/pagination';
import './App.css';

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path={pagination.products} element={<ProductsPage/>} />
      <Route path={pagination.profile} element={<UserPage/>} />
      <Route path={pagination.order} element={<OrderPage/>} />
      <Route path={pagination.restaurants} element={<RestaurantsPage/>} />
      <Route path="*" element={<>Não encontrado</>} />
    </Routes>
  </BrowserRouter>
}

export default App;