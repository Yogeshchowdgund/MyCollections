import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './root/home/home.component';
import { LoginComponent } from './root/login/login.component';
import { AuthGuardGuard } from './service/auth-guard.guard';

const routes: Routes = [
  {path:"",redirectTo:'/login',pathMatch: 'full'},
  {path:"login", component:LoginComponent},
  {path:"home", component:HomeComponent, canActivate:[AuthGuardGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
