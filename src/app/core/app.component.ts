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

  constructor () {
    
    this.mainMenu = [
      { id: 1, name: 'Prelim Processing' },
      { id: 2, name: 'Transactions Processing' },
      { id: 3, name: 'Investing Fund Pricing Pre-Processed' },
      { id: 4, name: 'Investing Fund Prices Sign-Off' },
      { id: 5, name: 'Fund Hierarchy Sign-Off' }
    ];
  }
  log(x) {
    this.selectedMenu = x;
    console.log('clicked me ' + x);
  }
}
