import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from '../dashboard.model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
})
export class DashboardContainerComponent implements OnInit {
  public tasksStatistics$: Observable<Tasks[]>;

  constructor(private _dashboardService: DashboardService) {
    this.tasksStatistics$ = new Observable();
  }
  ngOnInit(): void {
    this.getTasksStatistics();
  }

  public getTasksStatistics() {
    this.tasksStatistics$ = this._dashboardService.getTasks();
  }
}
