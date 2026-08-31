# Create my own custom hooks !

Custom hooks are essentially encapsulations of States and Effects and
their setter functions.

To create a custom hook that reload the same image every time, I can
decouple those States and Effects from the Image component and create a
**FACTORY FUNCTION**.

```jsx
import { useState, useEffect } from 'react';

// here's the custom hook as a factory function
const useImageUrl = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list', {
      // custom id headers here
    })
      .then((response) => {
        if (response.status <= 400) {
          throw new Error('server error');
        }
        return response.json();
      })
      .then((response) => setImageUrl(response[0].download_url))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(true));
  }, []);

  return { imageUrl, error, isLoading };
};

// Now we can call this custom hook in our components
const Image = () => {
  const { imageUrl, error, isLoading } = useImageUrl();

  if (isLoading) return <p>...Loading...</p>;
  if (error) return <p>...Network error...</p>;

  return <img src={imageUrl} alt="some text" />;
};
```

Now whenever we want to use that custom hook for any other components,
we can! :D
