'use client';

import { useState } from 'react';

export default function Home() {
  const [apiResponse, setApiResponse] = useState('');

  const makeApiCall = async () => {
    try {
      const response = await fetch('/api/sample', {
        method: 'POST',
        body: JSON.stringify({ hello: 'world' }),
      });
      const data = await response.json();
      setApiResponse(data.message);
    } catch (error) {
      console.error('Error making API call:', error);
      setApiResponse('Failed to fetch data');
    }
  };

  return (
    <>
      <button onClick={makeApiCall}>Press to Make API Call</button>
      <div>{apiResponse}</div>
    </>
  );
}

