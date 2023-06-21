import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { CardComponent } from 'src/app/card/card.component';
import { WorkLoad } from 'src/app/dashboard/dashboard.model';

@Component({
  selector: 'app-workload',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './workload.component.html',
})
export class WorkloadComponent {
  /**
   * Component property for workload statistics
   */
  @Input() public set workLoadStatistics(value: WorkLoad[] | null) {
    if (value) {
      this.renderWorkLoadChart(value);
    }
  }
  public get workLoadStatistics(): WorkLoad[] | null {
    return this._workLoadStatistics;
  }

  // variable instance for workload statistics
  private _workLoadStatistics: WorkLoad[];

  constructor() {
    this._workLoadStatistics = [];
  }

  // margin for legends
  public legendMargin = {
    id: 'legendMargin',
    beforeInit(chart: any) {
      const fiValue = chart.legend.fit;
      chart.legend.fit = function () {
        fiValue.bind(chart.legend)();
        return (this.height += 35);
      };
    },
  };

  /**
   * method to render stacked bar chart for workload statistics
   * @param mainData
   */
  public renderWorkLoadChart(mainData: WorkLoad[]) {
    const labelData = mainData.map((data) => data.label) || [];
    const completed = mainData.map((data) => data.completed) || [];
    const remaining = mainData.map((data) => data.remaining) || [];
    const overdue = mainData.map((data) => data.overdue) || [];
    new Chart('workLoad', {
      type: 'bar',
      data: {
        labels: labelData,
        datasets: [
          {
            label: 'Completed',
            data: completed,
            backgroundColor: '#84bb5d',
            barThickness: 22,
          },
          {
            label: 'Remaining',
            data: remaining,
            backgroundColor: '#54d2f9',
            barThickness: 22,
          },
          {
            label: 'Overdue',
            data: overdue,
            backgroundColor: '#e9514b',
            barThickness: 22,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            display: false,
          },
          legend: {
            align: 'start',
            labels: {
              font: {
                size: 18,
              },
              color: '#a9b0b9',
              usePointStyle: true,
              padding: 30,
            },
          },
        },
        indexAxis: 'y',
        scales: {
          y: {
            stacked: true,
            ticks: {
              crossAlign: 'far',
              // color: '#ffffff',
              font: {
                size: 18,
              },
              padding: 30,
            },
            grid: {
              display: false,
            },
          },
          x: {
            border: {
              display: false,
            },
            stacked: true,
            beginAtZero: true,
            max: 8,
            ticks: {
              // color: '#ffffff',
              font: {
                size: 18,
              },
              stepSize: 2,
              padding: 18,
            },
            grid: {
              color: '#222533',
            },
          },
        },
      },
      plugins: [this.legendMargin],
    });
  }
}
