import { CounterActions } from './../actions/counter';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class CounterEffects {
  public timeout: number = 1000;

  @Effect()
  public increment$ = this.actions$
    .ofType(CounterActions.INCREMENT_ASYNC)
    .delay(this.timeout)
    .switchMap(() => Observable.of(this._counterActions.increase()));

  @Effect()
  public decrement$ = this.actions$
    .ofType(CounterActions.DECREMENT_ASYNC)
    .delay(this.timeout)
    .switchMap(() => Observable.of(this._counterActions.decrease()));

  public constructor(
    private actions$: Actions,
    private _counterActions: CounterActions
  ) {}
}

