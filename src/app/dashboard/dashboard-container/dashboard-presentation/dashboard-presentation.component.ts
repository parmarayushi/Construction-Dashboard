import { Component, Input } from '@angular/core';
import { Costs, Progress, Tasks, Time, WorkLoad } from '../../dashboard.model';

@Component({
  selector: 'app-dashboard-presentation',
  templateUrl: './dashboard-presentation.component.html',
})
export class DashboardPresentationComponent {
  /**
   * Component property for tasks statistics
   */
  @Input() public set tasksStatistics(value: Tasks[] | null) {
    if (value) {
      this._tasksStatistics = value;
    }
  }
  public get tasksStatistics(): Tasks[] | null {
    return this._tasksStatistics;
  }

  /**
   * Component property for costs statistics
   */
  @Input() public set costsStatistics(value: Costs[] | null) {
    if (value) {
      this._costsStatistics = value;
    }
  }
  public get costsStatistics(): Costs[] | null {
    return this._costsStatistics;
  }

  /**
   * Component property for workload statistics
   */
  @Input() public set workLoadStatistics(value: WorkLoad[] | null) {
    if (value) {
      this._workLoadStatistics = value;
    }
  }
  public get workLoadStatistics(): WorkLoad[] | null {
    return this._workLoadStatistics;
  }

  /**
   * Component property for time statistics
   */
  @Input() public set timeStatistics(value: Time[] | null) {
    if (value) {
      this._timeStatistics = value;
    }
  }
  public get timeStatistics(): Time[] | null {
    return this._timeStatistics;
  }

  /**
   * Component property for time statistics
   */
  @Input() public set progressStatistics(value: Progress[] | null) {
    if (value) {
      this._progressStatistics = value;
    }
  }
  public get progressStatistics(): Progress[] | null {
    return this._progressStatistics;
  }

  // variable instance for task statistics
  private _tasksStatistics: Tasks[];

  // variable instance for costs statistics
  private _costsStatistics: Costs[];

  // variable instance for workload statistics
  private _workLoadStatistics: WorkLoad[];

  // variable instance for workload statistics
  private _timeStatistics: Time[];

  // variable instance for progress statistics
  private _progressStatistics: Progress[];

  constructor() {}
}
