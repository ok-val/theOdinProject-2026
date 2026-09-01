import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router';
import styled from 'styled-components';
import useApiStore from './useApiStore';

/**
 * styled-components use Hooks so I cannot create a styled component
 * inside a React component. They must be separated.
 *
 * https://react.dev/warnings/invalid-hook-call-warning
 */

const StyledImage = styled.img`
  width: 200px;
`;

const Card = ({
  itemIndex,
  addToCart = null,
  adjustCart = null,
  isShopping = true,
  inCartQty = 0
}) => {
  const [data, error, isLoading] = useApiStore(itemIndex);

  if (isLoading) return <p>Loading</p>;
  if (error) return <p>Error loading card</p>;

  return (
    <article>
      <h3>{data.title}</h3>
      <div>
        <StyledImage src={data.image} />
      </div>
      <div>{data.description}</div>
      <div>${data.price}</div>
      <div>
        {data.rating.rate}/5 ({data.rating.count} votes)
      </div>
      {isShopping ? (
        <button onClick={() => addToCart(data.id)}>Add to Cart</button>
      ) : (
        <form action="">
          <label>
            <input
              type="number"
              value={inCartQty}
              onChange={(e) => adjustCart(itemIndex, e.target.value)}
            />{' '}
            pieces
          </label>
        </form>
      )}
    </article>
  );
};

export default Card;
