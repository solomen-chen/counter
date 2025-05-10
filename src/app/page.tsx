'use client';

import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">{count}</h1>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setCount(count + 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300  "
          >
            +
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}