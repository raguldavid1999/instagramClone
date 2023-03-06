import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './core/sign-up/signup/signup.component';
import { ForgotPasswordComponent } from './core/forgot-password/forgot-password/forgot-password.component';
import { WelcomeScreenComponent } from './core/welcome-screen/welcome-screen.component';
import { HomeComponent } from './features/home/home/home.component';
import { SideNavBarComponent } from './features/home/home/side-nav-bar/side-nav-bar.component';
import { ExploreComponent } from './features/explore/explore.component';
import { ReelsComponent } from './features/reels/reels.component';
import { MessagesComponent } from './features/messages/messages.component';
import { ProfileComponent } from './features/profile/profile.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    component:WelcomeScreenComponent,
    // canActivate:[AuthGuard],
    children:[
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
        component: ExploreComponent
      },
      {
        path:'reels',
        component: ReelsComponent
      },
      {
        path:'messages',
        component: MessagesComponent
      },
      {
        path:'profile',
        component: ProfileComponent
      },
      {
        path:'sample',
        loadChildren:()=> import('./core/sample/sample.module').then(m=>m.SampleModule)
      },
      {
        path:'home',
        component: HomeComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
