import { DataProviderService } from './../../shared/services/data-provider.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-daily-tasks',
  templateUrl: './daily-tasks.component.html',
  styleUrls: ['./daily-tasks.component.css']
})
export class DailyTasksComponent {

  mainMenu = [];
  subtasks: any[];

  constructor(private dataProvider: DataProviderService,
  private route: ActivatedRoute) {
    let menu: number;
    this.route.params.subscribe(params => menu = params.menu_id);
    this.mainMenu = this.dataProvider.getMainMenu();
    // this.subtasks = this.dataProvider.getSubsForMenu(menu ? menu : 1);
  }

  reloadMenu(index: number) {
    this.subtasks = this.dataProvider.getSubsForMenu(index + 1);
    console.log('clicked me ' + index);
  }
}
