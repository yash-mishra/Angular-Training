import { HeroComponent } from './hero/hero.component';
import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '', redirectTo: 'test', pathMatch: 'full'
}, {
  path: 'test', component: TestComponent
}, {
  path: 'hero', component: HeroComponent
}, {
  path: '**', component: HeroComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
