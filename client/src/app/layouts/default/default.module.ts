import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { WorkshopComponent } from './../../pages/workshop/workshop.component';
import { StatisticsComponent } from './../../pages/statistics/statistics.component';
import { ComponentsModule } from './../../components/components.module';
import { MatSidenavModule, MatDividerModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule
  ]
})
export class DefaultModule { }
