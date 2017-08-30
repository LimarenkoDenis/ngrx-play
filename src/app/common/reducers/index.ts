import { ActionReducerMap } from '@ngrx/store';

import { counterReducer } from './counter';
import { counterActiveReducer } from './counter-activate';

// tslint:disable-next-line
export const reducers: ActionReducerMap<any> = {
  counter: counterReducer,
  counterActive: counterActiveReducer
};
