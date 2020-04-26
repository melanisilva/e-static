import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WorkshopComponent } from './pages/workshop/workshop.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { PredictDemandPageComponent } from './pages/statistics/predict-demand-page/predict-demand-page.component';
import { InformationComponent } from './pages/information/information.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AddComponent } from './pages/workshop/add/add.component';
import { DeleteComponent } from './pages/workshop/delete/delete.component';
import { UpdateComponent } from './pages/workshop/update/update.component';
import { ViewComponent } from './pages/workshop/view/view.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'workshop',
    component: WorkshopComponent
  }, {
    path: 'statistics',
    component: StatisticsComponent
  }, {
    path: 'information',
    component: InformationComponent
  }, {
    path: 'settings',
    component : SettingsComponent
  }, {
    path: 'add',
  component : AddComponent
}, {
  path: 'delete',
  component : DeleteComponent
}, {
  path: 'update',
  component : UpdateComponent
}, {
  path: 'view',
  component : ViewComponent
}, {
    path: 'predict-demand',
    component : PredictDemandPageComponent
  }
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class AppRoutingModule { }
