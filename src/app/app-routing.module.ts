import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {LoginComponent} from './users/login/login.component'
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'

const routes: Routes = [
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
