import React from 'react';
import Home from './home';
import ProductItem from '../component/product_item';
import { useSelector } from 'react-redux';
import MyCart from './myCart';

const Page = () => {
  const page = useSelector((state) => state.pages);

  return (
    <div>
      {page.home ? <Home /> : <MyCart />}
    </div>
  );
};

export default Page;
