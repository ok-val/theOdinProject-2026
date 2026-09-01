import { useState, useEffect } from 'react';

const useApiStore = (itemIndex) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/' + itemIndex)
      .then((res) => {
        if (res.status >= 400) {
          throw new Error('400 server error');
        }
        return res.json();
      })
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
    /**
     * BUG: immediately flip setIsLoading synchronously before data
     * returns when useEffect fires
     */
    // .finally(setIsLoading(false));
  }, []);

  return [data, error, isLoading];
};

export default useApiStore;
