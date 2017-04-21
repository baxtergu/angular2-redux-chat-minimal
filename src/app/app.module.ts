import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent, store } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { AppStore } from './app.store';
import { Store } from 'redux';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: AppStore, useValue: store }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
