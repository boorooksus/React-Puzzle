export interface ReducerState {
  items: (string | null)[];
  complete: boolean;
  imageIdx: number;
}

export const MOVE = 'move';
export const SHUFFLE = 'shuffle';
export const RESET = 'reset';

export interface MoveAction {
  type: typeof MOVE;
  payload: number;
}

export interface ShuffleAction {
  type: typeof SHUFFLE;
  payload: number;
}

export interface ResetAction {
  type: typeof RESET;
}

export type ReducerActions = MoveAction | ShuffleAction | ResetAction;
