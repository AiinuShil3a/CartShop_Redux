import React from 'react'
import { useSelector } from 'react-redux'

const Bill = () => {
    const carts = useSelector((state) => state.carts);
  return (

    <div className="mt-6 rounded-lg border bg-white p-6 shadow-md md:mt-0">
        <div className="mb-2 flex justify-between">
            <p className="text-gray-400">Subtotal</p>
            <p className="text-gray-400">xxx</p>
        </div>
        <div className="mb-2 flex justify-between">
            <p className="text-gray-400">Shipping</p>
            <p className="text-gray-400">xxx</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
        <div>
        <p className="mb-1 text-lg font-bold">xx</p>
        <p className=" text-sm text-gray-400">including VAT</p>
        </div>
        </div>
        <button className="mt-6 w-full rounded-md bg-blue-600 py-1 font-medium text-blue-50 hover:bg-blue-700">check out</button> 
    </div>
  )
};

export default Bill;