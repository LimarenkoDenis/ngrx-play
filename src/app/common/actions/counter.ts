import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class CounterActions {
  public static INCREMENT: string = 'INCREMENT';
  public increase(): Action {
    return {
      type: CounterActions.INCREMENT
    };
  }

  // tslint:disable-next-line
  public static INCREMENT_ASYNC: string = 'INCREMENT_ASYNC';
  public get increase_async(): Action {
    return {
      type: CounterActions.INCREMENT_ASYNC
    };
  }

  // tslint:disable-next-line
  public static DECREMENT: string = 'DECREMENT';
  public decrease(): Action {
    return {
      type: CounterActions.DECREMENT
    };
  }

  // tslint:disable-next-line
  public static DECREMENT_ASYNC: string = 'DECREMENT_ASYNC';
  public get decrease_async(): Action {
    return {
      type: CounterActions.DECREMENT_ASYNC
    };
  }

}
