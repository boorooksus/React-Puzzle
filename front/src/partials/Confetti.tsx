import React, { useState } from 'react';

export const Confetti = () => {
  // const [randomRotation, setRandomRotation] = useState(
  //   Math.floor(Math.random() * 360),
  // );
  // const [randomScale, setRandomScale] = useState(Math.random() * 1);
  // const [randomWidth, setRandomWidth] = useState(
  //   Math.floor(
  //     Math.random() *
  //       Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
  //   ),
  // );
  // const [randomHeight, setRandomHeight] = useState(
  //   Math.floor(
  //     Math.random() *
  //       Math.max(
  //         document.documentElement.clientHeight,
  //         window.innerHeight || 500,
  //       ),
  //   ),
  // );
  // const [randomAnimationDelay, setRandomAnimationDelay] = useState(
  //   Math.floor(Math.random() * 15),
  // );
  // const [colors, setColors] = useState([
  //   ['#0CD977', '#FF1C1C', '#FF93DE', '#5767ED', '#FFC61C', '#8497B0'],
  // ]);

  const arr = Array.from({ length: 2000 }, (v, i) => i);

  const rendering = () => {
    const res = [];
    for (let i = 0; i < 200; i++) {
      // Random rotation
      var randomRotation = Math.floor(Math.random() * 360);
      // Random Scale
      var randomScale = Math.random() + 0.5;
      // Random width & height between 0 and viewport
      var randomWidth = Math.floor(
        Math.random() *
          Math.max(
            document.documentElement.clientWidth,
            window.innerWidth || 0,
          ),
      );
      var randomHeight = Math.floor(
        Math.random() *
          Math.max(
            document.documentElement.clientHeight,
            window.innerHeight || 500,
          ),
      );

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
            top: randomHeight,
            right: randomWidth,
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
