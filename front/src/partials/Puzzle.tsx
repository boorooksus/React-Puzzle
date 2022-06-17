import { useReducer, Reducer, useEffect, useState } from 'react';
import reducer from '../utils/reducer';
import { ReducerState, ReducerActions, SHUFFLE } from '../typings/types';
import loadable from '@loadable/component';
import eagle from '../assets/images/eagle.jpeg';
import flower from '../assets/images/flower.png';
import wolf from '../assets/images/wolf.jpeg';
import sheep from '../assets/images/sheep.jpeg';

const Confetti = loadable(() => import('./Confetti'));

const initialState: ReducerState = {
  items: ['1', '2', '3', '4', '5', '6', '7', '8', null],
  complete: false,
  imageIdx: 0,
};

const Puzzle = () => {
  const [state, dispatch] = useReducer<Reducer<ReducerState, ReducerActions>>(
    reducer,
    initialState,
  );
  const [images, setImages] = useState([eagle, flower, wolf, sheep]);
  const [imageIdx, setImageIdx] = useState(0);

  useEffect(() => {
    dispatch({ type: SHUFFLE, payload: images.length });
  }, []);

  return (
    <div className="Puzzle">
      <div className="Puzzle-squares">
        {state.items.map((s: string | null, i: number) => (
          <div
            className={` ${s ? `Puzzle-square-${s}` : 'Puzzle-square-empty'}`}
            key={`square-${i}`}
            onClick={() => dispatch({ type: 'move', payload: i })}
            style={{
              backgroundImage: `${s ? `url(${images[state.imageIdx]})` : ''}`,
            }}
          ></div>
        ))}
      </div>
      {/* <div className="Puzzle-controls"> */}
      <div
        className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center mt-4"
        data-aos="zoom-y-out"
        data-aos-delay="300"
      >
        <button
          className="Puzzle-shuffle"
          onClick={() => dispatch({ type: SHUFFLE, payload: images.length })}
        >
          Shuffle
        </button>
        <button
          className="Puzzle-reset"
          onClick={() => dispatch({ type: 'reset' })}
        >
          Reset
        </button>
      </div>
      {state.complete && (
        <div>
          <Confetti />
          <div className="Puzzle-complete">Complete!</div>
        </div>
      )}
    </div>
  );
};

export default Puzzle;
