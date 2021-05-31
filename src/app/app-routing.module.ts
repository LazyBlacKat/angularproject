import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AsdGuard} from "./asd.guard";
import {ListComponent} from "./list/list.component";
import {LoginComponent} from "./login/login.component";
import {FormComponent} from "./form/form.component";
import {UpdateformComponent} from "./updateform/updateform.component";


const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
    canActivate: [AsdGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'form',
    component: FormComponent,
    canActivate: [AsdGuard]
  },
  {
    path: 'update',
    component: UpdateformComponent,
    canActivate: [AsdGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
