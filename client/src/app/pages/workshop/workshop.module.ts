import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WorkshopComponent } from './../../pages/workshop/workshop.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  imports: [RouterModule.forRoot([
    {path:'add',
    component :AddComponent},
   {path:'delete',
    component :DeleteComponent},
   {path:'update',
    component :UpdateComponent},
  ])],


exports: [RouterModule]
})

export class WorkshopModule { }
