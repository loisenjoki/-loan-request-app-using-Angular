import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { BasicElementsRoutingModule } from './basic-elements-routing.module';
import { BasicelementsComponent } from './basicelements.component';
import {SharedModule} from '../../../shared/shared.module';
/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '../../../Material/angular-material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatDialogModule} from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    BasicElementsRoutingModule,
    SharedModule,
    AngularMaterialModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [BasicelementsComponent],

  declarations: [BasicelementsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],


})
export class BasicElementsModule { }
