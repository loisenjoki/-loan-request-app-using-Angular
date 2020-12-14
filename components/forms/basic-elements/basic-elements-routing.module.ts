import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicelementsComponent} from './basicelements.component';

const routes: Routes = [
  {
    path: '',
    component: BasicelementsComponent,
    data: {
      breadcrumb: 'Loan Request Form',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicElementsRoutingModule { }
