import React, { useState } from 'react';
import pattern from '../assets/images/patternpad.svg';

function HeroHome() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 ">
          {/* Section header */}
          <div className="text-center pb-4">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Enjoy the sliding{' '}
              <span className="bg-white">
                <span className="highlight-text px-3">Puzzle</span>
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-4"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Place the blocks in order by making sliding moves that use the
                empty space!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
