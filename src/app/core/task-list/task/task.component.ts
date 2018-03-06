import { DataProviderService } from './../../../shared/services/data-provider.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input('task') task;
  title: string;
  hideToggle: boolean;
  isDisabled: boolean;
  children: any[];

  constructor(private dataProvider: DataProviderService) { }

  ngOnInit() {
    this.children = this.dataProvider.getTasksForSub(this.task.id);
    this.title =  this.task.hasChildren ? 'Expand' : 'Complete';
    this.hideToggle = this.task.hasChildren ? false : true;
    this.isDisabled = this.task.status;
  }

}
