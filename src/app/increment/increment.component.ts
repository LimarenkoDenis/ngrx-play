import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { CounterActions } from './../common/actions/counter';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent implements OnInit {

  public isActive$: Observable<boolean>;

  public constructor(
    private _store: Store<AppState>,
    private _counterActions: CounterActions
    ) {
  }

  public ngOnInit(): void {
    this.isActive$ = this._store.select('counterActive');
  }

  public increase(): void {
    this._store.dispatch(this._counterActions.increase_async);
  }
}
