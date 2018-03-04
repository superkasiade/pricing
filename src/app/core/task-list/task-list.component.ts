import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnChanges {
  @Input() id;
  taskList = [];
  subTasks = [];

  tasks = [
    { id: 1, sub_id: 3, title: 'Transaction Status - none below Fin Calc', status: 0, details: 'some random info 2'},
    { id: 2, sub_id: 3, title: 'Deal price/Market price mismatch', status: 0, details: 'some random info 2'},
    { id: 3, sub_id: 3, title: 'Manual Transaction Proof List', status: 0, details: 'some random info 2'},
    { id: 4, sub_id: 3, title: 'Asset Transfers', status: 0, details: 'some random info 2'},
    { id: 5, sub_id: 3, title: 'Oversold positions', status: 0, details: 'some random info 2'},
    { id: 6, sub_id: 3, title: 'Forward/Back-dated transactions', status: 0, details: 'some random info 2'},
    { id: 7, sub_id: 3, title: 'Amendments Notified from DQ', status: 0, details: 'some random info 2'},
    { id: 8, sub_id: 5, title: 'Amendments have been processed', status: 0, details: 'some random info 2'},
    { id: 9, sub_id: 5, title: 'Projected income/Bank rec review', status: 0, details: 'some random info 2'},
    { id: 10, sub_id: 5, title: 'Batch job 112', status: 0, details: 'some random info 2'},
    { id: 11, sub_id: 5, title: 'Dividends/Coupons have been created', status: 0, details: 'some random info 2'}
  ];

  subs =  [
    { id: 1, parent_id: 1, title: 'Previous Fund Prices Published', hasChildren: true, status: 1, completed_when: new Date(54684535456461), completed_by: 'Z441'},
    { id: 2, parent_id: 1, title: 'Appropriations Prelim Jobs Complete', hasChildren: false, status: 0, completed_when: null, completed_by: 'Z441'},
    { id: 3, parent_id: 2, title: 'Trades/Settlements', hasChildren: true, status: 0, completed_when: null, completed_by: 'Z441'},
    { id: 4, parent_id: 2, title: 'Corporate Actions Complete', hasChildren: false, status: 0, completed_when: null, completed_by: 'Z441'},
    { id: 5, parent_id: 2, title: 'Dividend Income', hasChildren: true, status: 0, completed_when: null, completed_by: 'Z441'},
    { id: 6, parent_id: 2, title: 'Treasury', hasChildren: true, status: 0, completed_when: null, completed_by: 'Z441'},
    { id: 7, parent_id: 2, title: 'Appropriations', hasChildren: true, status: 0, completed_when: null, completed_by: 'Z441'},
    { id: 8, parent_id: 3, title: 'Data Quality', hasChildren: true, status: 0, completed_when: null, completed_by: 'Z441'},
    { id: 9, parent_id: 3, title: 'Reconcilliations Team', hasChildren: true, status: 0, completed_when: null, completed_by: 'Z441'},
    { id: 10, parent_id: 3, title: 'Fund Pricing Team', hasChildren: true, status: 0, completed_when: null, completed_by: 'Z441'},
  ];
  constructor() { }

  ngOnInit() {
    this.subTasks = this.subs.filter(sub => sub.parent_id === 1);

    console.log(this.subs);
    console.log(this.subTasks);
    console.log(this.id);
    // this.taskList = 
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changing task list');
    console.log(changes.id.currentValue);
    this.subTasks = this.subs.filter(sub => sub.parent_id === changes.id.currentValue);
  }

}
