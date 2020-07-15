import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Calendar2RoutingModule } from './calendar2-routing.module';
import { Calendar2Component } from './calendar2.component';
import { NbMenuModule, NbInputModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { OwlDateTimeModule } from 'ng-pick-datetime';


@NgModule({
  declarations: [Calendar2Component],
  imports: [
    CommonModule,
    Calendar2RoutingModule,
    NbMenuModule,
    ThemeModule,
    NbInputModule,
    OwlDateTimeModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ar-SA' },
  ],
})
export class Calendar2Module { }
