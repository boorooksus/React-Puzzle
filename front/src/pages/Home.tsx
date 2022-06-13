import React from 'react';
import Puzzle from '../partials/Puzzle';
import HeroHome from '../partials/HeroHome';
import pattern from '../assets/images/patternpad.svg';

const Home = () => {
  return (
    <main className="flex-grow gb-fixed ">
      <img className="absolute top-0 rotate-180" src={pattern} />
      <div className="relative ">
        <HeroHome />
        <div className="pt-12 pb-12 flex justify-center bg-patternpad bg-cover">
          <Puzzle />
        </div>
      </div>
    </main>
  );
};

export default Home;
