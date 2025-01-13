/**
 * @fileoverview App component - The main component of the application
 * @name App
 * @Uses CartProvider to provide the cart state to all components
 * @Uses Router to manage the routes of the application
 * @returns JSX.Element
 *
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import HomePage from './pages/HomePage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import CartPage from './pages/CartPage.jsx';
import CheckoutSuccessPage from './pages/CheckoutSuccessPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import Layout from './components/Layout.jsx';
import { CartProvider } from './context/CartContext.jsx';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="products/:id" element={<ProductPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout-success" element={<CheckoutSuccessPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
