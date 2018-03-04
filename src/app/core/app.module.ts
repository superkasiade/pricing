import { MaterialModule } from './../shared/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TaskComponent } from './task-list/task/task.component';
import { DateSelectorComponent } from './date-selector/date-selector.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskGroupComponent } from './task-group/task-group.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    DateSelectorComponent,
    TaskListComponent,
    TaskGroupComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
