import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbMenuModule,
  NbInputModule,
  NbDatepickerModule,

} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';

import { CalendarComponent } from './calendar.component';
import { CalendarRoutingModule } from './calendar-routing.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    NbMenuModule,
    ThemeModule,
    NbInputModule,
    NbDatepickerModule,

  ],
  exports: [CalendarComponent],
  providers: [

  ],

})
export class CalendarModule { }
