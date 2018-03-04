import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.css']
})
export class DateSelectorComponent implements OnInit {

  dateRange = [];
  constructor() { }

  ngOnInit() {
    this.dateRange = [
      {day: new Date(2018, 2, 28)},
      {day: new Date(2018, 3, 1)},
      {day: new Date(2018, 3, 2)},
      {day: new Date(2018, 3, 3)},
      {day: new Date(2018, 3, 4)}
    ];

  }

}
