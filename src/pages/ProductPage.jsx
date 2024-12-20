import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../service/api';
import { useCart } from '../context/CartContext';
import Button from '../components/Button.jsx';
import MessageBox from '../components/MessageBox.jsx';
import LoadingBar from '../components/LoadingBar.jsx';

function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isAdding, setIsAdding] = useState(false); // Prevent multiple adds
  const [buttonText, setButtonText] = useState('Add to Cart'); // Button text state

  useEffect(() => {
    const fetchApi = async () => {
      if (product) return; // If product is already set, don't fetch again.
      try {
        setLoading(true);
        const response = await fetchProductById(id);
        setProduct(response.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchApi();
  }, [id, product]); // Add 'product' to avoid fetching again if it's already set

  const handleAddToCart = async (product) => {
    if (isAdding) return; // Prevent adding if already adding
    setIsAdding(true); // Set adding flag to true

    try {
      await addToCart(product); // Add product to cart
      setButtonText('Item added!'); // Change button text
      setTimeout(() => setButtonText('Add to Cart'), 2000); // Reset after 2 seconds
    } finally {
      setIsAdding(false); // Reset adding flag
    }
  };

  if (loading) {
    return <LoadingBar />;
  }

  if (error) {
    return <MessageBox border="border-red-600" message="Something went wrong" />;
  }

  if (!product) {
    return <MessageBox border="border-red-600" message="Product not found" />;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image.url} alt={product.title} />
      <p>{product.description}</p>
      <p>
        {product.price > product.discountedPrice ? (
          <>
            <span
              style={{
                textDecoration: 'line-through',
                color: 'red',
                marginRight: '8px',
              }}
            >
              ${product.price.toFixed(2)}
            </span>
            <span>${product.discountedPrice.toFixed(2)}</span>
          </>
        ) : (
          <span>${product.price.toFixed(2)}</span>
        )}
      </p>
      <Button
        text={buttonText} // Use the dynamic button text
        onClick={() => handleAddToCart(product)}
        disabled={isAdding} // Disable button during the operation
      />
    </div>
  );
}

export default ProductPage;
