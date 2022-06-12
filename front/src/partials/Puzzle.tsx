import { useReducer, Reducer } from 'react';
import reducer from '../utils/reducer';
import { ReducerState, ReducerActions, SHUFFLE } from '../typings/types';

import '../css/Puzzle.css';

const initialState: ReducerState = {
  items: ['4', '1', '2', '7', '6', '3', null, '5', '8'],
  complete: false,
};

const Puzzle = () => {
  const [state, dispatch] = useReducer<Reducer<ReducerState, ReducerActions>>(
    reducer,
    initialState,
  );

  return (
    <div className="Puzzle">
      <div className="Puzzle-squares">
        {state.items.map((s: string | null, i: number) => (
          <div
            className={`Puzzle-square ${s ? '' : 'Puzzle-square-empty'}`}
            key={`square-${i}`}
            onClick={() => dispatch({ type: 'move', payload: i })}
          >
            {s}
          </div>
        ))}
      </div>
      <div className="Puzzle-controls">
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
