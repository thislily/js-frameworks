/**
 * @file CartPage.jsx is the page where the user can see the items in their cart and place an order.
 * @name CartPage
 * @returns {JSX.Element} CartPage component 
 */

import React from "react";
import Cart from "../components/Cart.jsx";
import Button from "../components/Button.jsx";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartPage() {
 const { cart, clearCart } = useCart();

  return (
    <div>
      <h1 className="font-heading text-4xl text-center my-6">Checkout</h1>
      <Cart />
      <div className="flex justify-center my-6">
        {cart.length > 0 && ( 
          <Link to="/checkout-success">
            <Button onClick={clearCart} text="Place Your Order"/>
          </Link>
        )}
      </div>
    </div>
  );
}

export default CartPage;