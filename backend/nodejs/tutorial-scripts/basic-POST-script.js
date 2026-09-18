// Simulating data sent to the server

const body = {
  title: 'foo',
  body: 'bar',
  userId: 1
};

async function postStuff() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
    /**
     * the 2nd param to fetch takes a RequestInit object containing any
     * custom settings for the request. This is where the structure of
     * the request applies.
     */
    {
      method: 'POST',
      headers: {
        'User-Agent': 'undici-stream-example',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  );
  const data = await response.json();
  console.log(data);
}

postStuff().catch(console.error);
