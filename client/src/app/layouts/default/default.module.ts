import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { WorkshopComponent } from './../../pages/workshop/workshop.component';
import { StatisticsComponent } from './../../pages/statistics/statistics.component';
import { SettingsComponent } from './../../pages/settings/settings.component';
import { ComponentsModule } from './../../components/components.module';
import { MatSidenavModule, MatDividerModule, MatCardModule } from '@angular/material';
import{InformationComponent} from './../../pages/information/information.component'
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    WorkshopComponent,
    StatisticsComponent,
    InformationComponent,
    SettingsComponent
  ],
  imports: [
  CommonModule,
    RouterModule,
    ComponentsModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class DefaultModule { }
