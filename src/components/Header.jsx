import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

function Header() {
  return (
    <div className="bg-blue-500 text-white w-full">
    <header className="bg-blue-500 text-white p-4 max-w-7xl flex justify-between mx-auto">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold">
        My Store
      </Link>


      {/* Navigation */}
      <nav className="flex flex-row justify-between">
        <div className="space-x-4 flex items-center">
          {/* Links for other pages */}
          <Link to="/" className="hover:underline">
            View Products
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact Us
          </Link>

          <Link to="/cart" className="hover:underline">
          {/* Cart icon */}
          <CartIcon />
          </Link>

        </div>
      </nav>
    </header>
    </div>
  );
}

export default Header;
