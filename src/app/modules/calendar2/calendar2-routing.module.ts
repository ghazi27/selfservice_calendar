import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Calendar2Component } from './calendar2.component';


const routes: Routes = [
  {
    path: '',
    component: Calendar2Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Calendar2RoutingModule { }
