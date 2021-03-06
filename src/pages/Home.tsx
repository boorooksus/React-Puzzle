import React from "react";
import Puzzle from "../partials/Puzzle";
import HeroHome from "../partials/HeroHome";
import pattern from "../assets/images/patternpad3.svg";

const Home = () => {
  return (
    <main className="flex-grow gb-fixed ">
      <img
        className="fixed top-0 rotate-180 opacity-60 transition duration-300 ease-in-out"
        src={pattern}
        alt="backgorund image"
        aria-hidden="true"
      />

      <div className="relative ">
        <HeroHome />
        <div className="md:pt-12 pb-12 flex justify-center ">
          <Puzzle />
        </div>
      </div>
    </main>
  );
};

export default Home;
