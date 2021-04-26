import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { DisplayComponent } from './display/display.component';
import { ErrorComponent } from './error/error.component';
import { ChildComponent } from './input/child/child.component';
import { ColorComponent } from './display/color/color.component';
import {PassDataService} from './passdata.service'

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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PassDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
