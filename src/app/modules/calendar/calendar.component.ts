import { Component, OnInit } from '@angular/core';
import { toHijri, toGregorian } from 'hijri-converter';

@Component({
  selector: 'ngx-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  public selectedMoment: Date;
  public hijri: any;
  public gregorian: any;

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

  constructor() {}

  ngOnInit(): void {
    this.hijri = toHijri(2020, 7, 20);
    this.gregorian = toGregorian(1441, 11, 29);
  }
}
