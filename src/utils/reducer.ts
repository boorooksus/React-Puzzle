import { ReducerState, ReducerActions } from '../typings/types';

function trySwap(newItems: (string | null)[], position: number, t: number) {
  if (newItems[t] === null) {
    const temp = newItems[position];
    newItems[position] = newItems[t];
    newItems[t] = temp;
  }
}

function arraysEqual(a: (string | null)[], b: (string | null)[]) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

const CORRECT = ['1', '2', '3', '4', '5', '6', '7', '8', null];

const reducer = (state: ReducerState, action: ReducerActions): ReducerState => {
  switch (action.type) {
    case 'move': {
      const position = action.payload;
      const newItems = [...state.items];
      const col = position % 3;

      if (position < 6) {
        trySwap(newItems, position, position + 3);
      }
      if (position > 2) {
        trySwap(newItems, position, position - 3);
      }
      if (col < 2) {
        trySwap(newItems, position, position + 1);
      }
      if (col > 0) {
        trySwap(newItems, position, position - 1);
      }

      return {
        ...state,
        items: newItems,
        complete: arraysEqual(newItems, CORRECT),
      };
    }
    case 'shuffle': {
      // let newIdx = Math.floor(Math.random() * action.payload);
      let newState = { ...state };
      do {
        for (let i = 0; i < 300; i++) {
          newState = reducer(
            { ...newState },
            {
              type: 'move',
              payload: Math.floor(Math.random() * 9),
            },
          );
        }
      } while (newState.complete);
      return { ...newState, complete: false };
    }
    case 'change': {
      let newIdx = Math.floor(Math.random() * action.payload);
      while (newIdx === state.imageIdx) {
        newIdx = Math.floor(Math.random() * action.payload);
      }
      let newState = { ...state };
      return {
        ...newState,
        imageIdx: newIdx,
        complete: false,
        items: [...CORRECT],
      };
    }
    case 'reset': {
      return {
        ...state,
        items: [...CORRECT],
        complete: false,
      };
    }
    default: {
      throw new Error('Unknown action');
    }
  }
};

export default reducer;
