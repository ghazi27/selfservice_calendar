import { Component } from '@angular/core';
import {
  NgbDateStruct,
  NgbCalendar,
  NgbCalendarIslamicUmalqura,
  NgbDatepickerI18n,
} from '@ng-bootstrap/ng-bootstrap';
import { IslamicI18n } from './IslamicI18n';


@Component({
  selector: 'ngx-calendar3',
  templateUrl: './calendar3.component.html',
  styleUrls: ['./calendar3.component.scss'],
  providers: [
    { provide: NgbCalendar, useClass: NgbCalendarIslamicUmalqura },
    { provide: NgbDatepickerI18n, useClass: IslamicI18n },
  ],
})
export class Calendar3Component {
  model: NgbDateStruct;
  menu = [
    {
      title: 'NbDatepicker',
      link: '/calendar1',
      icon: 'home',
    },
    {
      title: 'OwlDateTime',
      link: '/calendar2',
      icon: 'home',
    },
    {
      title: 'ngbDatepicker',
      link: '/calendar3',
      icon: 'home',
    },
  ];

  constructor(private calendar: NgbCalendar) {}

  selectToday() {
    this.model = this.calendar.getToday();
  }
}

