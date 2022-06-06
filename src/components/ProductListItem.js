import React from "react";
import { Link } from "react-router-dom";
import { Rate } from "antd";
import "../styles/product_list_item.scss";

const ProductListItem = ({ product }) => {
  return (
    <div className="product-list-item">
      <div className="header">
        <Link to="/">
          <img className="image" src={product.image} alt={product.title} />
        </Link>
      </div>
      <div className="body">
        <Link to="/">
          <h2 className="title">{product.title}</h2>
        </Link>
        <div className="rating-bar">
          <Rate disabled defaultValue={2} />
          <div className="rating-count">110</div>
        </div>
        <Link to="/">
          <p className="price">{product.price} AED</p>
        </Link>
      </div>
    </div>
  );
};

export default ProductListItem;
