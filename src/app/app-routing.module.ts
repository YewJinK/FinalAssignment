import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { IsAdminGuard } from './_guards/is-admin.guard';
import { IsUserGuard } from './_guards/is-user.guard';


const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'home', component: HomeComponent
  },
  {
    path:'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [IsAdminGuard]
  },
  {
    path:'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule), canActivate: [IsUserGuard]
  },
  {
    path:'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
