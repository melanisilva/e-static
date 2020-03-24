import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WorkshopComponent } from './pages/workshop/workshop.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { InformationComponent } from './pages/information/information.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  },{
    path:'workshop',
    component:WorkshopComponent
  },{
    path:'statistics',
    component:StatisticsComponent
<<<<<<< HEAD
  },
  {
=======
  },{
>>>>>>> 2c63757756a205b87a0479bc15f14b9b8b201053
    path:'information',
    component:InformationComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class AppRoutingModule { }
