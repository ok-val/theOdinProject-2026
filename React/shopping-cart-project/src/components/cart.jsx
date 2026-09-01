import { useState } from 'react';
import { useOutletContext } from 'react-router';
import Card from './product-cards';
import sortCountArr from './sortCount';

const Cart = () => {
  const [cart, addToCart, adjustCart] = useOutletContext();
  // const sortedCart = sortCountArr(cart);
  const cartDisplay = Array.from(cart.keys(), (item, _) => (
    <Card
      key={item}
      itemIndex={item}
      isShopping={false}
      inCartQty={cart.get(item)}
      adjustCart={adjustCart}
    />
  ));
  return (
    <>
      <div>Cart page</div>
      {cartDisplay}
    </>
  );
};

export default Cart;
