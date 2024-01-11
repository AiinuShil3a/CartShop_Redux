/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../component/cartItem";
import Bill from "../component/bill";

const MyCart = () => {
  const carts = useSelector((state) => state.carts);
  console.log(carts);
  return (
    <main className="py-12 max-w-7xl container mx-auto px-4">
      <div className="container mx-auto">
        {" "}
        {/* แก้ className ที่มี syntax error */}
        <h2 className="mb-5 text-xl font-bold">Shopping Cart</h2>
        <div className="flex flex-col md:flex-row justify-between md:gap-8 gap-4">
          <div className="space-y-6 md:w-2/3">
            {carts.length ? (
              carts.map((product) => (
                <CartItem key={product.id} product={product} />
              ))
            ) : (
              <div>No product in your cart</div>
            )}
          </div>
          <div className="space-y-6 md:w-1/3">
            <Bill />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyCart;
