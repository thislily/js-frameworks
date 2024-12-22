/**
 * @file ProductCard component
 * @name ProductCard
 * @param {object} product - The product object to display
 * @returns {JSX.Element} Product card component for displaying product details
 */

import React from "react";
import Button from "./Button";
import StarRating from "./StarRating";

function ProductCard({ product }) {
  return (
    <a
      href={`/products/${product.id}`}
      className="border-2 rounded-md border-gray-2 bg-white p-4 max-w-sm mx-auto h-px-120 flex flex-col justify-between gap-2"
    >
      <h2 className="text-lg font-bold text-center">{product.title}</h2>
      <div className="relative">
        <img
          className="object-cover aspect-square"
          src={product.image.url}
          alt={product.title}
        />
        {/* Display the discount percentage if the product is on sale */}
        {product.discountedPrice < product.price && (
          <div className="absolute top-2 right-2 bg-orange-600 text-white rounded-xl p-2">
            {Math.round(
              ((product.price - product.discountedPrice) / product.price) * 100
            )}
            % Off!
          </div>
        )}
      </div>
      <p>{product.description}</p>

      <p>
        {product.price > product.discountedPrice ? (
          <>
            {/* Display the original price with a strikethrough and the discounted price */}
            <span
              style={{
                textDecoration: "line-through",
                color: "tomato",
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

      {/* Display the product rating */}
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

      <Button text={"See Details"} />
    </a>
  );
}

export default ProductCard;
