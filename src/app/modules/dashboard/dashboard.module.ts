import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RequestService } from '../../_services/request.service';

const routes: Routes =([
  {
      path: '',
      component: DashboardComponent
  }
]);

@NgModule({
  declarations: [
    DashboardComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers:[
    RequestService
  ]
})
export class DashboardModule { }
