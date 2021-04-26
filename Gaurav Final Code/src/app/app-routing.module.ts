import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InputComponent} from './input/input.component'
import {ChildComponent} from './input/child/child.component'
import {DisplayComponent} from './display/display.component'
import {ColorComponent} from './display/color/color.component'
import {ErrorComponent} from './error/error.component'

const routes: Routes = [
  {path:' ', redirectTo:' ', pathMatch:'full'},
  {path: 'input', component: InputComponent, children: [{
    path: 'child', component: ChildComponent
  }] 
  },
  {path: 'display', component: DisplayComponent, children: [{
    path: 'color', component: ColorComponent
  }] 
  },
  {path: 'error', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
