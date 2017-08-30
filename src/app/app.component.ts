import { CounterActivateActions } from './common/actions/counter-activate';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public interval: number = 2000;
  public timeout: number;

  public constructor(
    private _store: Store<AppState>,
    private _counterActivateActions: CounterActivateActions
  ) {}

  public ngOnInit(): void {
    this.timeout = window.setTimeout(() => {
      this._store.dispatch(this._counterActivateActions.activate());
    }, this.interval);
  }

  public ngOnDestroy(): void {
    window.clearTimeout(this.timeout);
  }
}
