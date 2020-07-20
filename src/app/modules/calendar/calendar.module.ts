import { NgModule } from '@angular/core';
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
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    NbMenuModule,
    ThemeModule,
    NbInputModule,
    NbDatepickerModule,
    NbDateFnsDateModule,
    FormsModule,
  ],
  exports: [CalendarComponent],
  providers: [

  ],

})
export class CalendarModule { }
