import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductsPage } from './pages';

import './App.css';

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path="/products" element={<ProductsPage/>} />
      <Route path="/orders" element={<>sobre</>} />
      <Route path="/login" element={<>contato</>} />
      <Route path="*" element={<>Não encontrado</>} />
    </Routes>
  </BrowserRouter>
}

export default App;