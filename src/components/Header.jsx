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

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 mt-4 max-w-md"
      />

      {/* Navigation */}
      <nav className="flex justify-between">
        <div className="space-x-6">
          {/* Links for other pages */}
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <Link to="/cart" className="hover:underline">
            Cart

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
