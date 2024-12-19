import React from "react";
import { useCart } from "../context/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faCircleMinus, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

function Cart() {
  const { cart, subtractOneFromCart, addToCart, removeFromCart } = useCart(); // Include necessary functions

  return (
    <div>
      <h2>Cart</h2>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div key={index}>
            {" "}
            {/* Place key here */}
            <h3>{item.title}</h3>
            <p>
              Quantity:
              <button onClick={() => subtractOneFromCart(item.id)}>
                <FontAwesomeIcon icon={faCircleMinus} />
              </button>
              {item.quantity}
              <button onClick={() => addToCart(item)}>
                <FontAwesomeIcon icon={faCirclePlus} />
              </button>
            </p>
            <p>
              {item.price > item.discountedPrice ? (
                <>
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "red",
                      marginRight: "8px",
                    }}
                  >
                    ${item.price.toFixed(2)}
                  </span>
                  <span>${item.discountedPrice.toFixed(2)}</span>
                </>
              ) : (
                <span>${item.price.toFixed(2)}</span>
              )}
            </p>

            <button onClick={() => removeFromCart(item.id)}>
                <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
