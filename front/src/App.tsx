import React, { useEffect } from 'react';
import './css/style.scss';
import Puzzle from './partials/Puzzle';

function App() {
  return (
    <div className="flex justify-center">
      <h1 className="font-bold text-2xl text-blue-900">
        React and Tailwind with Vitejs!
      </h1>

      <Puzzle />
    </div>
  );
}

export default App;
