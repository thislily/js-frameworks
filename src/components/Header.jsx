import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import { useCart } from "../context/CartContext";

//carticon uses itemCount as a prop, so we need to pass it a value. whch is from the cart page
function Header() {
  const { totalItems } = useCart();

  return (
    <div className="bg-blue-900 text-white w-full fixed top-0 z-10 ">
      <header className="bg-blue-900 text-white p-4 max-w-7xl flex justify-between mx-auto">
        {/* Logo */}
        <Link to="/" className="text-4xl text-md-xl font-bold font-heading">
          Storesville
          <img src="../../public/Shop.png" alt="" />
        </Link>

        {/* Navigation */}
        <nav className="flex flex-row justify-between">
          <div className="space-x-4 flex items-center font-medium text-lg">
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
