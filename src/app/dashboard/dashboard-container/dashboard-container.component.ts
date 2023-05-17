import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Costs, Tasks, Time, WorkLoad } from '../dashboard.model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
})
export class DashboardContainerComponent implements OnInit {
  /** variable for task statistics */
  public tasksStatistics$: Observable<Tasks[]>;

  /** variable for costs statistics */
  public costsStatistics$: Observable<Costs[]>;

  /** variable for workLoad statistics */
  public workLoadStatistics$: Observable<WorkLoad[]>;

  /** variable for time statistics */
  public timeStatistics$: Observable<Time[]>;

  constructor(private _dashboardService: DashboardService) {
    this.tasksStatistics$ = new Observable();
    this.costsStatistics$ = new Observable();
    this.workLoadStatistics$ = new Observable();
    this.timeStatistics$ = new Observable();
  }
  ngOnInit(): void {
    this.getTasksStatistics();
    this.getCostsStatistics();
    this.getWorkLoadStatistics();
    this.getTimeStatistics();
  }

  /** method to get the tasks statistics and sets to observable */
  public getTasksStatistics() {
    this.tasksStatistics$ = this._dashboardService.getTasksStatistics();
  }

  /** method to get the costs statistics and sets to observable */
  public getCostsStatistics() {
    this.costsStatistics$ = this._dashboardService.getCostsStatistics();
  }

  /** method to get the workload statistics and sets to observable */
  public getWorkLoadStatistics() {
    this.workLoadStatistics$ = this._dashboardService.getWorkLoadStatistics();
  }

  /** method to get the workload statistics and sets to observable */
  public getTimeStatistics() {
    this.timeStatistics$ = this._dashboardService.getTimeStatistics();
  }
}
