import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { ApiService } from './api.service';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
