/**
 * @fileoverview Header component
 * @name Header
 * @returns {JSX.Element} Header component
 * 
*/

import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import { useCart } from "../context/CartContext";

function Header() {
  const { totalItems } = useCart();

  return (
    <div className="bg-blue-900 text-white w-full fixed top-0 z-10 ">
      <header className="bg-blue-900 text-white p-4 max-w-7xl flex justify-between mx-auto">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl md:text-4xl font-bold font-heading flex items-center "
        >
          Storesville
          <img className="h-8 md:h-12" src="/Shop.png" alt="Storesville Logo" />
        </Link>

        {/* Navigation */}
        <nav className="flex flex-row justify-between">
          <div className="space-x-4 flex items-center font-medium text-base md:text-lg">
            {/* Links for other pages */}
            <div div className="flex space-x-4 flex-wrap justify-end">
              <Link to="/" className="hover:underline">
                View Products
              </Link>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </div>

            <Link to="/cart" className="hover:underline">
              {/* Cart icon */}
              <CartIcon itemCount={totalItems} />
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;