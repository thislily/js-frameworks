import React from "react";
import Button from "./Button";

function ProductCard({ product }) {
  return (
    <a href={`/products/${product.id}`} className="product-card">
      <h2>{product.title}</h2>
      <img src={product.image.url} alt={product.title} />{" "}
      {/* Access 'url' from image object */}
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
      <Button text={"See Details"} />
    </a>
  );
}

export default ProductCard;
