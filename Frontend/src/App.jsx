
import React, { useState } from 'react';
import { X } from 'lucide-react';

const App = () => {
  const [count, setCount] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-6">
      {/* Header */}
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <h1 className="font-bold text-4xl">My First React App</h1>
      </div>

      {/* Button */}
      <button
        onClick={() => setCount(true)}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all"
      >
        Click Me
      </button>

      {/* Modal */}
      {count && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative text-center">
            {/* Close Button */}
            <X
              onClick={() => setCount(false)}
              className="absolute top-4 right-4 cursor-pointer "
              size={24}
            />
            <h1 className="text-xl font-bold">Hello Abhishek</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
