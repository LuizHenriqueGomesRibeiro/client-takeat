import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductsPage } from './pages';

import styled from 'styled-components';
import './App.css';

const Poppins = styled.span`
  font-family: 'poppins';
`

const Roboto = styled.span`
  font-family: 'roboto';
`

const Inter = styled.span`
  font-family: 'Inter';
`

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