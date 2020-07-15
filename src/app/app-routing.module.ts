import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'calendar1',
    loadChildren: () => import('./modules/calendar/calendar.module')
      .then(m => m.CalendarModule),
  },
  {
    path: 'calendar2',
    loadChildren: () => import('./modules/calendar2/calendar2.module')
      .then(m => m.Calendar2Module),
  },
  { path: '', redirectTo: 'calendar1', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
