import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Calendar3Component } from './calendar3.component';

const routes: Routes = [
  {
    path: '',
    component: Calendar3Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Calendar3RoutingModule {}
