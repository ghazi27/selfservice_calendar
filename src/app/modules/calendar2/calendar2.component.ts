import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-calendar2',
  templateUrl: './calendar2.component.html',
  styleUrls: ['./calendar2.component.scss'],
})
export class Calendar2Component implements OnInit {
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
  ];
  constructor() {}

  ngOnInit(): void {}
}
