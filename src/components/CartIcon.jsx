import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartIcon({ itemCount }) {
  return (
    <div className="relative inline-block">
      {/* Cart icon */}
      <FontAwesomeIcon icon={faShoppingCart} size="2x" />

      {/* Overlay */}
      {itemCount > 0 && (
        <span className="absolute top-0 right-0 bg-orange-600 text-white text-xs font-bold rounded-lg w-6 h-6 flex items-center justify-center transform translate-x-2 -translate-y-2">
          {itemCount}
        </span>
      )}
    </div>
  );
}

export default CartIcon;
