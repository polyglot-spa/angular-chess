import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularChessHeaderComponent } from './components/angular-chess-header/angular-chess-header.component';
import { ChessboardWrapperComponent } from './components/chessboard-wrapper/chessboard-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularChessHeaderComponent,
    ChessboardWrapperComponent,
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
