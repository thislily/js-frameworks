import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function CartIcon() {
  return (
    <div>

      {/* Cart icon from fa react */}
      <FontAwesomeIcon icon={faShoppingCart} />

    </div>
  )
}

export default CartIcon
