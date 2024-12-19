import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../service/api';
import { useCart } from '../context/CartContext';
import Button from '../components/Button.jsx';

function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setLoading(true);
        const response = await fetchProductById(id);
        setProduct(response.data);
        console.log(response.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchApi();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  if (!product) {
    return (
      <p>No product data available.</p>
    );
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
                textDecoration: "line-through",
                color: "red",
                marginRight: "8px",
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
      <Button text="Add to Cart" onClick={() =>addToCart(product)} />
    </div>
  );
}

export default ProductPage;
