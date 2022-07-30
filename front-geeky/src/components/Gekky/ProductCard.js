import React from "react";
import { Link } from "react-router-dom";
import "./SCSS/product.scss";

export const ProductCard = ({ product }) => {
  const { uid, nombre, precio, img } = product;

  return (
    <div className="card-componet">
      <Link className="card mx-2 my-4" to={`/product/${uid}`} style={{ textDecoration: 'none' }}>
        <img src={img[0]} width="200" height="200" />
        <div className="d-flex flex-column product-card-detail mt-2">
          <span><strong>{nombre}</strong></span>
          <p>${precio}</p>
        </div>
      </Link>
    </div>
  );
};
