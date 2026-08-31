Here's how a loading state can be implemented:

```jsx
import { useEffect } from 'react';

const Image = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list', {
      headers: {
        'User-Agent': 'orio'
      }
    })
    .then(response => {
      if (response.status >= 400) {
        throw new Error('server error');
      }
      response.json();
    });
    .then(response => setImageUrl(response[0].download_url))
    .catch(err => setError(err))
    .finally(() => setIsLoading(false));

    // finally remember to only fetch on component mount
  }, []);

  if (isLoading) return <p>...Loading...</p>
  if (error) return <p>...A network error occurred</p>

  return (
    <>
      <img src={imageUrl} alt="image"/>
    </>
  )
};
```
