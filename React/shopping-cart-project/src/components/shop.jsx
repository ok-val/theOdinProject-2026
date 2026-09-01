import { useState } from 'react';
import Card from './product-cards';
import { useOutletContext } from 'react-router';

const Shop = () => {
  const cardsPerPage = 3;

  const [cart, addToCart] = useOutletContext();

  return (
    <>
      <div>Shop page</div>
      {/* {[...Array(cardsPerPage)].map((_, index) => (
        <Card key={index} item={index + 1} />
      ))} */}
      {Array.from(Array(cardsPerPage), (_, index) => (
        <Card key={index} itemIndex={index + 1} addToCart={addToCart} />
      ))}
    </>
  );
};

export default Shop;
