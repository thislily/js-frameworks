import React from "react";
import { useCart } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faCircleMinus,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import MessageBox from "./MessageBox";

function Cart() {
  const { cart, updateQuantity, removeFromCart, totalPrice, totalItems } =
    useCart();

  return (
    <div className="max-w-2xl border-black border-solid border-2 rounded-lg flex flex-col items-right p-4 justify-center mx-auto min-h-96">
      <h2 className="text-xl font-extrabold text-center">Shopping Cart</h2>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div
            className="bg-white my-2 p-2 flex flex-row gap-2 rounded-md"
            key={index}
          >
            <img
              src={item.image.url}
              alt={item.title}
              className="w-32 h-32 object-cover aspect-square rounded-md"
            />
            <div className="flex flex-col justify-between w-full ml-2 ">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <div className="flex flex-row gap-1">
                Quantity:
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  <FontAwesomeIcon icon={faCircleMinus} />
                </button>
                {item.quantity}
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <FontAwesomeIcon icon={faCirclePlus} />
                </button>
              </div>
              <p>
                {item.price &&
                item.discountedPrice &&
                item.price > item.discountedPrice ? (
                  <>
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "red",
                        marginRight: "8px",
                      }}
                    >
                      ${item.price ? item.price.toFixed(2) : "N/A"}
                    </span>
                    <span>
                      $
                      {item.discountedPrice
                        ? item.discountedPrice.toFixed(2)
                        : "N/A"}
                    </span>
                  </>
                ) : (
                  <span>${item.price ? item.price.toFixed(2) : "N/A"}</span>
                )}
              </p>
              <div className="flex items-end justify-end">
                <button
                  className="text-right w-28 border-2 border-gray-200 rounded-md p-1 px-2 mt-2"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                  <FontAwesomeIcon className="px-1" icon={faCircleXmark} />
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <MessageBox
          border="darkorange 8px solid"
          message={"Your cart is empty, time to shop!"}
        />
      )}
      <p className="text-center text-lg font-semibold">
        {totalItems > 0 ? (
          <>
            {totalItems} item{totalItems > 1 ? "s" : ""} in cart
            <br />
            <span className="text-red-500">
              You Saved: $
              {cart
                .reduce((acc, item) => {
                  return (
                    acc + (item.price - item.discountedPrice) * item.quantity
                  );
                }, 0)
                .toFixed(2)}
            </span>
            <br />
            <span className="text-xl font-bold">
              Total Price: ${totalPrice.toFixed(2)}
            </span>
          </>
        ) : (
          ""
        )}
      </p>
    </div>
  );
}

export default Cart;
