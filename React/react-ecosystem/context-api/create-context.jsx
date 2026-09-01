import { createContext } from 'react';

/**
 * When creating a new context using `createContext`, provide an initial
 * value to be the default value of the context.
 *
 * The initial value will become the default value is a static value.
 * Thus, it shall not change.
 */

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {}
});

// const ShopContext = createContext(null);

/**
 * Provided is a DEFAULT VALUE as an object with three properties. This
 * is the preferred practice because it provides a context fallback.
 *
 * Context fallback is helpful in cases when components consume (which
 * they can ) context outside of a Provider, they fall back to the
 * default value instead the null alternative.
 *
 * The second reason why this is preferred is that, with a default
 * value, components can be tested in isloation without having to wrap
 * them in a Provider to supply context values because the components
 * themselves have a fallback to specified default value.
 *
 * The third advantage is it enables IDE auto-completion.
 */

// Next, here's how to use this context

export default function App() {
  const [cartItems, setCartItems] = useState([
    // /* List of Items in Cart */
  ]);
  const products = [];
  // /* some custom hook that fetches products and returns the fetched products */

  const addToCart = (product) => {
    // add to cart logic (this adds to cartItems)
  };

  return (
    /* We are going to pass the things that we want to inject to these components using the value prop */
    /* This value prop will OVERWRITE the default value nominally */
    <ShopContext value={{ cartItems, products, addToCart }}>
      <Header />
      <ProductDetail />
    </ShopContext>
  );
}
