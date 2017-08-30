import { CounterActions } from './../actions/counter';
import { Action, ActionReducer } from '@ngrx/store';

export function counterReducer(state: number = 0, action: Action): number {
  switch (action.type) {
    case CounterActions.INCREMENT:
      return state + 1;

    case CounterActions.DECREMENT:
      return state - 1;

    default:
      return state;
  }
}
