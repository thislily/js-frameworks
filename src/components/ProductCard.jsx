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
      {/* Add an overlay to the image that says "Sale" in a red circle if the discounted price is less than the regular price */}
      <div className="relative">
        <img
          className="object-cover aspect-square"
          src={product.image.url}
          alt={product.title}
        />
        {product.discountedPrice < product.price && (
          <div className="absolute top-2 right-2 bg-orange-600 text-white rounded-xl p-2">
            Sale
          </div>
        )}
      </div>
      <p>{product.description}</p>

      <p>
        {product.price > product.discountedPrice ? (
          <>
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

      <StarRating rating={product.rating} />
      <p>
        Tags:{" "}
        {product.tags && product.tags.length > 0 ? (
          product.tags.map((tag, index) => (
            <span key={index} className="italic font-bold">
              {tag}{index < product.tags.length - 1 ? ", " : ""}
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
