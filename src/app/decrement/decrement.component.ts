import { CounterActions } from './../common/actions/counter';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-decrement',
  templateUrl: './decrement.component.html',
  styleUrls: ['./decrement.component.css']
})
export class DecrementComponent implements OnInit {

  public isActive$: Observable<boolean>;

  public constructor(
    private _store: Store<AppState>,
    private _counterActions: CounterActions
  ) {
  }

  public ngOnInit(): void {
    this.isActive$ = this._store.select('counterActive');
  }

  public decrease(): void {
    this._store.dispatch(this._counterActions.decrease_async);
  }

}
