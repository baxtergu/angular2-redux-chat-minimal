import { Component } from '@angular/core';
import {
  createStore,
  Store,
  StoreEnhancer
} from 'redux';

import { counterReducer } from './counter/counter.reducer';
import { AppState } from './app.state';
import { AppStore } from './app.store';
import { CounterComponent } from './counter/counter.component';

let devtools: StoreEnhancer<AppState> =
  window['devToolsExtension'] ?
    window['devToolsExtension']() : f => f;

export let store: Store<AppState> = createStore<AppState>(
  counterReducer,
  devtools
);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}

