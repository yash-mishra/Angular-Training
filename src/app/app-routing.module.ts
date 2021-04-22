import { HeroComponent } from './hero/hero.component';
import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestChildComponent } from './test/test-child/test-child.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [{
  path: '', redirectTo: '', pathMatch: 'full'
}, {
  path: 'test', component: TestComponent, children: [{
    path: 'child', component: TestChildComponent
  }]
}, {
  path: 'hero', component: HeroComponent
}, {
  path: '**', component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
