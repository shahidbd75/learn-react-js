import React from "react";
import { Link } from "react-router";

const Product = ({ product }) => {
  const { title, price, description, category, image, isNew, brand, _id } = product;
  return (
    <Link to={`/product-details/${_id}`}>
      <div className="card bg-base-100 w-96 shadow-sm p-6">
        <figure className="p-3">
          <img src={image} alt="Shoes" className="h-[200px]"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            {isNew && <div className="badge badge-secondary">NEW</div>}
          </h2>
          <p>{description}</p>
          <p className="text-xl text-orange-800 font-bold card-actions justify-start">${price}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">{brand}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
