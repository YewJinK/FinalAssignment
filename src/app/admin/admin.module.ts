import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { ChartsComponent } from '../charts/charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [AdminComponent, 
    ChartsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxChartsModule
  ]
})
export class AdminModule { }
