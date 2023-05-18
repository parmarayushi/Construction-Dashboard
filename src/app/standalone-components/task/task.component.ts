import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { CardComponent } from 'src/app/card/card.component';
import { Tasks } from 'src/app/dashboard/dashboard.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './task.component.html',
})
export class TaskComponent {
  /**
   * Component property for task statistics
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
        this.renderTasksChart(labelData, realData, colorData);
      }
    }
  }
  public get tasksStatistics(): Tasks[] | null {
    return this._tasksStatistics;
  }

  // variable instance for task statistics
  private _tasksStatistics: Tasks[];

  constructor() {
    this._tasksStatistics = [];
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
   * method to render doughnut chart for tasks statistics
   * @param labelData
   * @param mainData
   * @param colorData
   */
  public renderTasksChart(
    labelData: string[],
    mainData: number[],
    colorData: string[]
  ) {
    new Chart('tasks', {
      type: 'doughnut',
      data: {
        labels: labelData,
        datasets: [
          {
            data: mainData,
            borderWidth: 0,
            backgroundColor: colorData,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '85%',
        radius: 120,
        spacing: 3,
        plugins: {
          datalabels: {
            anchor: 'end',
            align: 'end',
            font: {
              size: 24,
            },
            color: colorData,
            padding: 16,
          },
          legend: {
            labels: {
              generateLabels: (chart: any) => {
                const datasets = chart.data.datasets;
                return datasets[0].data.map((data: any, i: any) => ({
                  text: `${chart.data.labels[i]} (${data})`,
                  fillStyle: datasets[0].backgroundColor[i],
                  fontColor: '#a9b0b9',
                  index: i,
                }));
              },
              font: {
                size: 18,
              },
              usePointStyle: true,
              // pointStyle: 'rectRot',
              padding: 30,
            },
          },
        },
      },
      plugins: [this.legendMargin],
    });
  }
}
