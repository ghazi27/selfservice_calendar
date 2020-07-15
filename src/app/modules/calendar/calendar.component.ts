import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  menu = [
    {
      title: 'NbDatepicker',
      link: '/calendar1',
      icon: 'home'
    },
    {
      title: 'OwlDateTime',
      link: '/calendar2',
      icon: 'home'
    }
  ];

  constructor() {

  }

  ngOnInit(): void {
  }

}
