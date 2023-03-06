import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample/sample.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SampleRoutingModule } from './sample-routing.module';



@NgModule({
  declarations: [
    SampleComponent
  ],
  imports: [
    CommonModule,
    SampleRoutingModule
  ]
})
export class SampleModule { }
