import { DataProviderService } from './../shared/services/data-provider.service';
import { MaterialModule } from './../shared/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TaskComponent } from './task-list/task/task.component';
import { DateSelectorComponent } from './date-selector/date-selector.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskGroupComponent } from './task-group/task-group.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DailyTasksComponent } from './daily-tasks/daily-tasks.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    DateSelectorComponent,
    TaskListComponent,
    TaskGroupComponent,
    HeaderComponent,
    NotFoundComponent,
    DailyTasksComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot([
      {
        path: 'tasklist/:date/:menu_id',
        component: DailyTasksComponent
      },
      {
        path: 'tasklist/:date',
        component: DailyTasksComponent
      },
      {
        path: 'tasklist',
        component: DailyTasksComponent
      },
      {
        path: '',
        redirectTo: '/tasklist',
        pathMatch: 'full'
      },
      {
        path: 'report',
        component: ReportComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [DataProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
