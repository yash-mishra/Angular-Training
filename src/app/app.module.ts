import { HeroComponent } from './hero/hero.component';
import { TestComponent } from './test/test.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestChildComponent } from './test/test-child/test-child.component';
import { TextComponent } from './text/text.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlueComponent } from './blue/blue.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeroComponent,
    TestChildComponent,
    NotFoundComponent,
    TextComponent,
    BlueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
