import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../service/api";
import { useCart } from "../context/CartContext";
import Button from "../components/Button.jsx";
import MessageBox from "../components/MessageBox.jsx";
import LoadingBar from "../components/LoadingBar.jsx";
import StarRating from "../components/StarRating.jsx";
import ReviewCard from "../components/ReviewCard.jsx";

function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isAdding, setIsAdding] = useState(false); // Prevent multiple adds
  const [buttonText, setButtonText] = useState("Add to Cart"); // Button text state

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
      setButtonText("Item added!"); // Change button text
      setTimeout(() => setButtonText("Add to Cart"), 2000); // Reset after 2 seconds
    } finally {
      setIsAdding(false); // Reset adding flag
    }
  };

  if (loading) {
    return <LoadingBar />;
  }

  if (error) {
    return <MessageBox border="red 4px solid" message="Something went wrong" />;
  }

  if (!product) {
    return <MessageBox border="red 4px solid" message="Product not found" />;
  }

  return (
    <div className="flex flex-col items-center pb-16 mx-0 px-0 mt-4">
      <div className="flex flex-col sm:flex-row gap-2 md:gap-8">
        <div className="relative pt-4">
          <img
            className="object-cover aspect-square min-h-80 border-2 border-gray-200 rounded-lg"
            src={product.image.url}
            alt={product.title}
          />
          {product.discountedPrice < product.price && (
            <div className="absolute top-8 left-4 bg-orange-600 text-white rounded-xl p-4 text-lg">
              {Math.round(
                ((product.price - product.discountedPrice) / product.price) *
                  100
              )}
              % Off!
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4 items-start p-2 lg:p-8">
          <h1 className="font-heading text-4xl text-center sm:text-left">
            {product.title}
          </h1>
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

          <StarRating rating={product.rating} />

          <p>
            Tags:{" "}
            {product.tags && product.tags.length > 0 ? (
              product.tags.map((tag, index) => (
                <span key={index} className="italic font-bold">
                  {tag}
                  {index < product.tags.length - 1 ? ", " : ""}
                </span>
              ))
            ) : (
              <span className="">none</span>
            )}
          </p>

          <Button
            text={buttonText} // Use the dynamic button text
            onClick={() => handleAddToCart(product)}
            disabled={isAdding} // Disable button during the operation
          />
        </div>
      </div>

      <span className="w-full h-1 bg-gray-400 rounded-full mt-6"></span>

      <div className="flex flex-col items-center w-full gap-6">
        <h2 className="font-heading text-2xl text-center mt-8">Reviews</h2>
        <div className="w-full max-w-2xl flex flex-col gap-4 p-4">
          {product.reviews && product.reviews.length > 0 ? (
            product.reviews.map((review, index) => (
              <ReviewCard
                key={index}
                username={review.username}
                description={review.description}
                rating={review.rating}
              />
            ))
          ) : (
            <MessageBox
              border="4px solid darkorange"
              message="No reviews yet"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
