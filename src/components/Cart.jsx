import React from 'react';
import { useCart } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleMinus, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import MessageBox from './MessageBox';


function Cart() {
  const { cart, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  return (
    <div className='max-w-2xl border-black border-solid border-2 rounded-lg flex flex-col items-right p-4 justify-center mx-auto min-h-96'>
      <h2 className='text-xl font-extrabold text-center'>Shopping Cart</h2>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div  key={index}>
            <h3>{item.title}</h3>
            <p>
              Quantity:
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                <FontAwesomeIcon icon={faCircleMinus} />
              </button>
              {item.quantity}
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                <FontAwesomeIcon icon={faCirclePlus} />
              </button>
            </p>
            <p>
              {item.price && item.discountedPrice && item.price > item.discountedPrice ? (
                <>
                  <span
                    style={{
                      textDecoration: 'line-through',
                      color: 'red',
                      marginRight: '8px',
                    }}
                  >
                    ${item.price ? item.price.toFixed(2) : 'N/A'}
                  </span>
                  <span>${item.discountedPrice ? item.discountedPrice.toFixed(2) : 'N/A'}</span>
                </>
              ) : (
                <span>${item.price ? item.price.toFixed(2) : 'N/A'}</span>
              )}
            </p>
            <button onClick={() => removeFromCart(item.id)}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          </div>
        ))
      ) : (
        <MessageBox border="darkorange 8px solid" message={"Your cart is empty, time to shop!"} />
      )}
      <p>
        {totalItems > 0 ? (
          <>
            {totalItems} item{totalItems > 1 ? 's' : ''} in cart
            <br />
            Total Price: ${totalPrice.toFixed(2)}
          </>
        ) : (
          ''
        )}
      </p>
    </div>
  );
}

export default Cart;
