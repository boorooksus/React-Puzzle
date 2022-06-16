import { useReducer, Reducer, useEffect } from 'react';
import reducer from '../utils/reducer';
import { ReducerState, ReducerActions, SHUFFLE } from '../typings/types';
import eagle from '../assets/images/eagle.jpeg';

const initialState: ReducerState = {
  items: ['1', '2', '3', '4', '5', '6', '7', '8', null],
  complete: false,
};

const Puzzle = () => {
  const [state, dispatch] = useReducer<Reducer<ReducerState, ReducerActions>>(
    reducer,
    initialState,
  );

  useEffect(() => {
    dispatch({ type: SHUFFLE });
  }, []);

  return (
    <div className="Puzzle">
      <div className="Puzzle-squares">
        {state.items.map((s: string | null, i: number) => (
          <div
            className={` ${s ? `Puzzle-square-${s}` : 'Puzzle-square-empty'}`}
            key={`square-${i}`}
            onClick={() => dispatch({ type: 'move', payload: i })}
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
          onClick={() => dispatch({ type: SHUFFLE })}
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
      {state.complete && <div className="Puzzle-complete">Complete!</div>}
    </div>
  );
};

export default Puzzle;
