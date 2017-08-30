import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { DecrementComponent } from './decrement/decrement.component';
import { IncrementComponent } from './increment/increment.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './common/reducers';
import { CounterEffects } from './common/effects/counter';
import { CounterActions } from './common/actions/counter';
import { CounterActivateActions } from './common/actions/counter-activate';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    DecrementComponent,
    IncrementComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {
      initialState: {
        auth: {
          loggedIn: true
        }
      }
    }),
    EffectsModule.forRoot([CounterEffects])
  ],
  providers: [CounterActions, CounterActivateActions],
  bootstrap: [AppComponent]
})
export class AppModule { }
