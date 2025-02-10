import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

function App() {
  return (
    // basename help correctly locate resources and routes when deploying applications to environments
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* other routes */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
