import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { WorkshopComponent } from './../../pages/workshop/workshop.component';
import { StatisticsComponent } from './../../pages/statistics/statistics.component';
import { ComponentsModule } from './../../components/components.module';
import { MatSidenavModule} from '@angular/material';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    WorkshopComponent,
    StatisticsComponent
  ],
  imports: [
  CommonModule,
    RouterModule,
    ComponentsModule,
    MatSidenavModule
  ]
})
export class DefaultModule { }
