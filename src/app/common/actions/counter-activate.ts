import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class CounterActivateActions {

  public static ACTIVATE: string = 'ACTIVATE';
  public activate(): Action {
    return {
      type: CounterActivateActions.ACTIVATE
    };
  }

  // tslint:disable-next-line
  public static DEACTIVATE: string = 'DEACTIVATE';
  public get diactivate(): Action {
    return {
      type: CounterActivateActions.DEACTIVATE
    };
  }
}
