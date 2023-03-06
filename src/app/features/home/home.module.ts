import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SideNavBarComponent } from './home/side-nav-bar/side-nav-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    HomeComponent,
    SideNavBarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports:[
    SideNavBarComponent,
    HomeComponent
  ]
})
export class HomeModule { }
