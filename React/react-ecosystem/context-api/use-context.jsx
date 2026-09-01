import { useContext } from 'react';

function Links() {
  // destructure the context used by ShopContext
  const { cartItems } = useContext(ShopContext);
  // We must pass the ShopContext object itself as an argument
  // With useContext, context will just pop wherever

  return (
    <ul>
      {/* Other links */}
      <li>
        <Link to="Link to the cart">
          <span>Cart</span>
          <div className="cart-icon">{cartItems.length}</div>
        </Link>
      </li>
    </ul>
  );
}

export default function Header() {
  return (
    <header>
      {/* Other header elements */}
      <nav>
        <Links />
      </nav>
    </header>
  );
}
