import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.css']
})
export class DateSelectorComponent implements OnInit {

  startDate = new Date();
  dateRange = [];
  defaultRange = 7;
  constructor() { }

  ngOnInit() {
    const dateRange2 = [
      {day: new Date(2018, 2, 28)},
      {day: new Date(2018, 3, 1)},
      {day: new Date(2018, 3, 2)},
      {day: new Date(2018, 3, 3)},
      {day: new Date(2018, 3, 4)}
    ];
    console.log('initializing dates');
    console.log(new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate() + 1));
    for (let i = 0; i < this.defaultRange; i++) {
      this.dateRange.push({ day: new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate() - i) } );
    }
    console.log(this.dateRange);
    console.log(dateRange2);

  }

}
