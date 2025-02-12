import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        {/* Các route khác */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;