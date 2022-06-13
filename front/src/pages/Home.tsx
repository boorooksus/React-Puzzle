import React from 'react';
import Puzzle from '../partials/Puzzle';
import HeroHome from '../partials/HeroHome';

const Home = () => {
  return (
    <main className="flex-grow">
      <div className="relative">
        <HeroHome />
        <div className="pt-32 pb-12 md:pt-40 md:pb-20  flex justify-center">
          <Puzzle />
        </div>
      </div>
    </main>
  );
};

export default Home;
