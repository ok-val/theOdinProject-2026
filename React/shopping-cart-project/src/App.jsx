import { useState } from 'react';
import { Link, Outlet } from 'react-router';
import NavBar from './components/navbar';
import './App.css';

function App() {
  // App:
  // NavBar

  // Nested routes + Outlet:
  // + Home page
  // --- Shop now button
  // --- Manages cart state thru context
  // + Shop page
  // --- Product cards
  // + Cart page
  // --- Cart

  const [cart, setCart] = useState(new Map());

  const addToCart = (itemId) => {
    setCart((prevCart) => {
      // BUG: Use an updater function here to:
      // Create a shallow copy here since .set() mutates the original
      const newCart = new Map(prevCart);
      // BUG: turn get value to Number
      newCart.set(itemId, (newCart.get(itemId) || 0) + 1);
      return newCart;
    });
  };

  const adjustCart = (itemId, itemCount) => {
    setCart((prevCart) => {
      const newCart = new Map(prevCart);
      newCart.set(itemId, itemCount);
      return newCart;
    });
  };

  return (
    <>
      <h1>Welcome!</h1>
      <NavBar />
      <Outlet context={[cart, addToCart, adjustCart]} />
    </>
  );
}

export default App;
