import React, { createContext, useContext, useState, useEffect, useRef } from "react";

// Create a context
const CartContext = createContext();

// Custom hook for accessing the cart context
export const useCart = () => useContext(CartContext);

// Helper function to retrieve the cart from local storage
const getCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
};

// Provider component to wrap the app
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getCartFromLocalStorage);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  // Update local storage when cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Update total items and total price when cart changes
  useEffect(() => {
    const items = cart.reduce((total, item) => total + item.quantity, 0);
    const price = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalItems(items);
    setTotalPrice(price);
  }, [cart]);

  // Add item to cart
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  //Update quantity of item in cart, and remove if quantity is 0
  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: quantity } : item
        )
      );
    }
  }

  //Clear Cart
  const clearCart = () => {
    setCart([]);
  }



  return (
    <CartContext.Provider
      value={{
        cart,
        totalItems,
        totalPrice,
        isCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartRef,
      }}
    >
      {children}
    </CartContext.Provider>
  );

}