import React, { useState } from 'react';

export const Confetti = () => {
  const rendering = () => {
    const res = [];
    for (let i = 0; i < 300; i++) {
      // Random rotation
      var randomRotation = Math.floor(Math.random() * 360);
      // Random Scale
      var randomScale = Math.random() + 0.5;
      // Random width & height between 0 and viewport
      var randomWidth = Math.floor(Math.random() * 100);
      var randomHeight = Math.floor(Math.random() * 100);

      // Random animation-delay
      var randomAnimationDelay = Math.floor(Math.random() * 15);
      console.log(randomAnimationDelay);

      // Random colors
      var colors = [
        '#0CD977',
        '#FF1C1C',
        '#FF93DE',
        '#5767ED',
        '#FFC61C',
        '#8497B0',
      ];
      var randomColor = colors[Math.floor(Math.random() * colors.length)];

      res.push(
        <div
          className="confetti"
          style={{
            top: `${randomHeight}%`,
            right: `${randomWidth}%`,
            backgroundColor: randomColor,
            transform: `skew(15deg) rotate(${randomRotation}deg) scale(${randomScale})`,
            animationDelay: `${randomAnimationDelay}s`,
          }}
        ></div>,
      );
    }
    return res;
  };

  return <div className="confetti-wrapper">{rendering()}</div>;
};

export default Confetti;
