import { DataProviderService } from './../shared/services/data-provider.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pricing Manager';
  mainMenu = [];
  selectedMenu: number;
  subtasks: any[];

  constructor (private dataProvider: DataProviderService) {

    this.mainMenu = this.dataProvider.getMainMenu();
    this.subtasks = this.dataProvider.getSubsForMenu(1);
  }
  log(x) {
    this.selectedMenu = x;
    this.subtasks = this.dataProvider.getSubsForMenu(x + 1);
    console.log('clicked me ' + x);
  }
}
