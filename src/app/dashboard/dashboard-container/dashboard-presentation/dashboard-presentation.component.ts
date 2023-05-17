import { Component, Input } from '@angular/core';
import { Costs, Tasks, Time, WorkLoad } from '../../dashboard.model';
import { DashboardPresneterService } from '../dashboard-presenter/dashboard-presneter.service';

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
      {
        const labelData = [];
        const realData = [];
        const colorData = [];
        for (let i = 0; i < value.length; i++) {
          labelData.push(value[i].label);
          realData.push(value[i].value);
          colorData.push(value[i].color);
        }
        this._dashboardPresenterService.renderTasksChart(
          labelData,
          realData,
          colorData
        );
      }
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
      const labelData = [];
      const realData = [];
      const colorData = [];
      for (let i = 0; i < value.length; i++) {
        labelData.push(value[i].label);
        realData.push(value[i].value);
        colorData.push(value[i].color);
      }
      this._dashboardPresenterService.renderCostsChart(
        labelData,
        realData,
        colorData
      );
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
      const labelData = [];
      const realData = [];
      const colorData = [];
      for (let i = 0; i < value.length; i++) {
        labelData.push(value[i].label);
        realData.push(value[i].value);
        colorData.push(value[i].color);
      }
      this._dashboardPresenterService.renderWorkLoadChart(
        labelData,
        realData,
        colorData
      );
    }
  }
  public get workLoadStatistics(): WorkLoad[] | null {
    return this._workLoadStatistics;
  }

  @Input() public set timeStatistics(value: Time[] | null) {
    if (value) {
      const labelData = [];
      const realData = [];
      for (let i = 0; i < value.length; i++) {
        labelData.push(value[i].label);
        realData.push(value[i].value);
      }
      this._dashboardPresenterService.renderTimeChart(labelData, realData);
    }
  }
  public get timeStatistics(): Time[] | null {
    return this._timeStatistics;
  }

  // variable instance for task statistics
  private _tasksStatistics: Tasks[];

  // variable instance for costs statistics
  private _costsStatistics: Costs[];

  // variable instance for workload statistics
  private _workLoadStatistics: WorkLoad[];

  // variable instance for workload statistics
  private _timeStatistics: Time[];

  constructor(private _dashboardPresenterService: DashboardPresneterService) {
    this._tasksStatistics = [];
    this._costsStatistics = [];
    this._workLoadStatistics = [];
    this._timeStatistics = [];
  }
}
