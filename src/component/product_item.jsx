import React from "react";
import { useDispatch } from "react-redux";
import { createCart } from "../redux/carts/actions";
import { removeQuantity } from "../redux/products/actions";

const productItem = ({ product,productQuantity }) => {
  const dispatch = useDispatch();
  const { id, image, name, category, price, quantity } = product;
  const handleCreateCart = () => {
    dispatch(createCart(product));
    dispatch(removeQuantity(id));
  };
  return (
    <div className="card md:w-96 bg-base-100 shadow-x1">
      <figure className="relative">
        <img src={`${image}`} alt={`${name}`} className="h-80 w-full" />
        <div className="badge badge-secondary absolute top-3 right-3">
          {category}
        </div>
      </figure>
      <div className="card-body shadow-lg">
        <h2 className="card-title">{name}</h2>
        <p>Some thing Message...</p>
        <div className="flex justify-between">
          <p className="w-full">Available {quantity} ชิ้น</p>
          <p className="text-left">{price}$</p>
        </div>
        <div className="card-action mt-2">
          <button
            className="btn btn-sm btn-primary"
            disabled={quantity === 0}
            onClick={handleCreateCart}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default productItem;
