import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AdminHomeComponent } from './components2/admin-home/admin-home.component';
import { AdminLayoutComponent } from './components2/admin-layout/admin-layout.component';
import { AuthGuard } from './components2/auth.guard';
import { LoginComponent } from './components2/login/login.component';
import { SignupComponent } from './components2/signup/signup.component';


const routes: Routes = [
  {path: "", component: LayoutComponent, children: [
    {path: '', component: HomeComponent},
  ]
  },

  
  {path:"login", component:LoginComponent}, 
  {path:"signup", component:SignupComponent},


  {path: 'admin', component: AdminLayoutComponent, canActivateChild: [AuthGuard], children: [
    {path: '', component: AdminHomeComponent}
  ]}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
