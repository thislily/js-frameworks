import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context
const CartContext = createContext();

// Custom hook for accessing the cart context
export const useCart = () => useContext(CartContext);

// Helper function to retrieve the cart from local storage
const getCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
};

// Provider component to wrap the app
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getCartFromLocalStorage);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existingProductIndex !== -1) {
        // If the product already exists, increment the quantity
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      }
      // If the product is new, add it with a quantity of 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const subtractOneFromCart = (productId) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0); // Remove items with quantity 0
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, subtractOneFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
