# Basic fetch

> [!important] Fetch template
>
> Each request should have at least two States to achieve optimal user
> experience: data and error. The component should be able to handle
> loading via another State or conditional rendering.

In addition, consider optimizations for caching, dedup, and race.

To review, here's how a normal fetch is normally found:

```js
const image = document.querySelector('img');
fetch.('https://picsum.photos/v2/list')
  .then(response) => response.json()
  .then((response) => {
    image.src = response[0].download_url;
  })
  .catch(err => console.error(err));
```

> [!note] Custom identifier header
>
> Some APIs require clients to id their traffic. Include a custom
> identifier (e.g., User-Agent) or the ones specified by the API owner:

```js
const image = document.querySelector('img');
fetch('https://picsum.photos/v2/list', {
  headers: {
    'User-Agent': 'the-odin-project'
  }
})
  .then((response) => response.json())
  .then((response) => {
    image.src = response[0].download_url;
  })
  .catch((error) => console.error(error));
```

## Using fetch in React

`fetch()` can be incorporated into a JSX component like this:

```jsx
import { useEffect, useState } from 'react';

const Image = () => {
  const [imageURL, setImageURL] = useState(null);

  // Since a component cannot use async, all fetches must be called via Effect
  useEffect(() => {
    fetch('https://picsum.photos/v2/list', {
      headers: {
        'User-Agent': 'the-odin-project'
      }
    })
      .then((response) => response.json())
      .then((response) => setImageURL(response[0].download_url))
      .catch((error) => console.error(error));
  }, []);

  return (
    imageURL && (
      <>
        <h1>An image</h1>
        <img src={imageURL} alt={'placeholder text'} />
      </>
    )
  );
};

export default Image;
```

## Handling errors

Handling errors is always a must in real-world application because
multiple things can cause a network error.

Our component must be able to return something meaningful for the user
in such cases and these error cases should also be tested.

Because the fetch might succeed, however, with a bad response status,
handle these bad success responses as well.

```jsx
const [error, setError] = useState(null);

//...

useEffect(() => {
  fetch('https://picsum.photos/v2/list', {
    headers: {
      'User-Agent': 'the-odin-project'
    }
  })
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('server error');
      }
      return response.json();
    })
    .then((response) => setImageURL(response[0].download_url))
    .catch((error) => setError(error));
}, []);

//...

if (error) return <p>A network error was encountered</p>;

return (
  imageURL && (
    <>
      <h1>An image</h1>
      <img src={imageURL} alt={'placeholder text'} />
    </>
  )
);
```
