import { Component, Input } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Tasks } from '../../dashboard.model';
import { DashboardPresneterService } from '../dashboard-presenter/dashboard-presneter.service';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard-presentation',
  templateUrl: './dashboard-presentation.component.html',
})
export class DashboardPresentationComponent {
  @Input() public set tasksStatistics(value: Tasks[] | null) {
    if (value) {
      this._tasksStatistics = value;
      console.log(value);

      {
        const labelData = [];
        const realData = [];
        const colorData = [];
        for (let i = 0; i < value.length; i++) {
          labelData.push(value[i].label);
          realData.push(value[i].value);
          colorData.push(value[i].color);
        }
        this._dashboardPresenterService.renderDoughnutChart(
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

  private _tasksStatistics: Tasks[];

  constructor(private _dashboardPresenterService: DashboardPresneterService) {
    this._tasksStatistics = [];
  }
}
