import { CounterActivateActions } from './../actions/counter-activate';
import { Action, ActionReducer } from '@ngrx/store';

export function counterActiveReducer(state: boolean = true, action: Action): boolean {
  switch (action.type) {
    case CounterActivateActions.ACTIVATE:
      return false;

    case CounterActivateActions.DEACTIVATE:
      return true;

    default:
      return state;
  }
}
