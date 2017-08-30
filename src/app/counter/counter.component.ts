import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public counter: Observable<number>;

  public constructor(private _store: Store<any>) { }

  public ngOnInit(): void {
    this.counter = this._store.select('counter');
  }

}



// import { Component } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { Store } from '@ngrx/store';

// import { AppState } from '../../state/interfaces/state';

// @Component({
//   selector: 'counter',
//   templateUrl: './counter.component.html'
// })
// export class CounterComponent {
//   public counter: Observable<number>;

//   constructor(private store: Store<AppState>) {
//     this.counter = store.select('counter');
//   }
// }
