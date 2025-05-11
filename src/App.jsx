import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryPage from './components/CategoryPage';
import ProductPage from './components/ProductPage';
import LoginPage from './components/LoginPage';
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/products/:categoryId" element={<ProductPage />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;
