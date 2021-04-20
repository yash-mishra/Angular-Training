import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { DisplayComponent } from './display/display.component';
import { ErrorComponent } from './error/error.component';
import { ChildComponent } from './input/child/child.component';
import { ColorComponent } from './display/color/color.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    DisplayComponent,
    ErrorComponent,
    ChildComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
