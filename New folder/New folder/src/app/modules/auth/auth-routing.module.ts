import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

// const routes: Routes = [
//   { 
//     path: '', 
//     component: AuthComponent
//   },
//   { 
//     path: 'login',
//     component:LoginComponent
//   },
//   { 
//     path: "**", 
//     redirectTo: "login" 
//   }
// ];

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AuthRoutingModule { }
