import { HeroComponent } from './hero/hero.component';
import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextComponent } from './text/text.component';
import { BlueComponent } from './blue/blue.component';
import { TestChildComponent } from './test/test-child/test-child.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [{
  path: '', redirectTo: '', pathMatch: 'full'
}, {
  path: 'test', component: TestComponent
}, {
 
  path: 'hero', component: HeroComponent , children: [
    {
      path: '', redirectTo: 'text', pathMatch: 'full' },
    {
    path: 'text', component: TextComponent
  }]
},
{
  path: 'text', component: TextComponent
},
{
  path: 'blue', component: BlueComponent
},
{
  path: '**', component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
