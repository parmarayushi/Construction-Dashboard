import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Costs, Tasks } from '../dashboard.model';
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
  public workLoadStatistics$: Observable<Costs[]>;

  constructor(private _dashboardService: DashboardService) {
    this.tasksStatistics$ = new Observable();
    this.costsStatistics$ = new Observable();
    this.workLoadStatistics$ = new Observable();
  }
  ngOnInit(): void {
    this.getTasksStatistics();
    this.getCostsStatistics();
    this.getWorkLoadStatistics();
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
}
