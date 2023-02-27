import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeScreenComponent } from './core/welcome-screen/welcome-screen.component';
import { SignupComponent } from './core/sign-up/signup/signup.component';
import { ForgotPasswordComponent } from './core/forgot-password/forgot-password/forgot-password.component';
import { SideNavBarComponent } from './features/side-nav-bar/side-nav-bar/side-nav-bar.component';
import { ProfileComponent } from './features/profile/profile.component';

const routes: Routes = [
  {
    path:'',
    component:WelcomeScreenComponent
  },
  {
    path:'sign-up',
    component: SignupComponent
  },
  {
    path:'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path:'side-nav',
    component: SideNavBarComponent
  },
  {
    path:'explore',
    component: SideNavBarComponent
  },
  {
    path:'reels',
    component: SideNavBarComponent
  },
  {
    path:'messages',
    component: SideNavBarComponent
  },
  {
    path:'profile',
    component: SideNavBarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
