# Multiple fetch and the Request Waterfall issue

A real-world app is going to make more than one request per page. A
well-documented issue is the _waterfall of requests_ issue that devs
usually encounter.

(Note that the use of setTimeout() here is for demonstration.)

Here's one way of managing multiple fetches:

```jsx
import { useEffect, useState } from 'react';
// component Bio also performs a fetch
import Bio from './Bio';

const Profile = ({ delay }) => {
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/photos', {
        mode: 'cors'
      })
        .then((response) => response.json())
        .then((response) => setImageURL(response[0].url))
        .catch((error) => console.error(error));
    }, delay);
  }, [delay]);

  return (
    (imageURL && (
      <div>
        <h3>Username</h3>
        <img src={imageURL} alt={'profile'} />
        {/* NOW component Bio can start its fetch */}
        <Bio delay={1000} />
      </div>
    )) || <h1>Loading...</h1>
  );
};
```

Apparently, the Bio component is dependent on the return of the Profile
component's fetch, delaying each fetch as the previous one returns. This
is the waterfall of request, where fetches are called in a chain.

> To alleviate performance here, parallelize those fetches
> synchronously.

```jsx
const Profile = ({ delay }) => {
  const [imageURL, setImageURL] = useState(null);
  const [bioText, setBioText] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/photos', {
        mode: 'cors'
      })
        .then((response) => response.json())
        .then((response) => setImageURL(response[0].url))
        .catch((error) => console.error(error));
    }, delay);

    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/photos', {
        mode: 'cors'
      })
        .then((response) => response.json())
        .then((response) =>
          setBioText('I like long walks on the beach and JavaScript')
        )
        .catch((error) => console.error(error));
    }, delay + 2000); // here we add an extra 2 seconds of delay
  }, [delay]);

  return (
    (imageURL && (
      <div>
        <h3>Username</h3>
        <img src={imageURL} alt={'profile'} />
        <Bio bioText={bioText} />
      </div>
    )) || <h1>Loading...</h1>
  );
};
```
