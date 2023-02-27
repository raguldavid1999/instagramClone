import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './core/welcome-screen/welcome-screen.component';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FooterComponent } from './core//footer/footer/footer.component';
import { SignupComponent } from './core//sign-up/signup/signup.component';
import { ForgotPasswordComponent } from './core/forgot-password/forgot-password/forgot-password.component';
import { SideNavBarComponent } from './features/side-nav-bar/side-nav-bar/side-nav-bar.component';
import { ExploreComponent } from './features/explore/explore.component';
import { ReelsComponent } from './features/reels/reels.component';
import { MessagesComponent } from './features/messages/messages.component';
import { ProfileComponent } from './features/profile/profile.component';

@NgModule({
    declarations: [
        AppComponent,
        WelcomeScreenComponent,
        FooterComponent,
        SignupComponent,
        ForgotPasswordComponent,
        SideNavBarComponent,
        ExploreComponent,
        ReelsComponent,
        MessagesComponent,
        ProfileComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatSnackBarModule,
    ]
})
export class AppModule { }
