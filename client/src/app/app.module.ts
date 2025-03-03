import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkshopComponent } from './pages/workshop/workshop.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { AddComponent } from './pages/workshop/add/add.component';
import { DeleteComponent } from './pages/workshop/delete/delete.component';
import { UpdateComponent } from './pages/workshop/update/update.component';
import { ViewComponent } from './pages/workshop/view/view.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { PredictDemandPageComponent } from './pages/statistics/predict-demand-page/predict-demand-page.component';
import { LoginComponent } from './pages/login/login.component';
import { PredictDemandFiftyYearsComponent } from './pages/statistics/predict-demand-fifty-years/predict-demand-fifty-years.component';
import { DistributionDivisionComponent } from './pages/information/distribution-division/distribution-division.component';
import { InstalledCapacityComponent } from './pages/information/installed-capacity/installed-capacity.component';
import { ElectricityGenerationComponent } from './pages/information/electricity-generation/electricity-generation.component';

const appRoutes: Routes = [
  {path: 'pets', component : ViewComponent}

  ];


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    DeleteComponent,
    UpdateComponent,
    ViewComponent,
    PredictDemandPageComponent,
    LoginComponent,
    PredictDemandFiftyYearsComponent,
    DistributionDivisionComponent,
    InstalledCapacityComponent,
    ElectricityGenerationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
