import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { CardComponent } from 'src/app/card/card.component';
import { Progress } from 'src/app/dashboard/dashboard.model';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './progress.component.html',
})
export class ProgressComponent {
  /**
   * Component property for progress statistics
   */
  @Input() public set progressStatistics(value: Progress[] | null) {
    if (value) {
      const labelData = [];
      const realData = [];
      const colorData = [];
      for (let i = 0; i < value.length; i++) {
        labelData.push(value[i].label);
        realData.push(value[i].value);
        colorData.push(value[i].color);
      }
      this.renderProgressChart(labelData, realData, colorData);
    }
  }
  public get progressStatistics(): Progress[] | null {
    return this._progressStatistics;
  }

  // variable instance for progress statistics
  private _progressStatistics: Progress[];

  constructor() {
    this._progressStatistics = [];
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
   * method to render bar chart fo time statistics
   * @param labelData
   * @param mainData
   */
  public renderProgressChart(
    labelData: string[],
    mainData: number[],
    colorData: string[]
  ) {
    new Chart('progress', {
      type: 'bar',
      data: {
        labels: labelData,
        datasets: [
          {
            data: mainData,
            backgroundColor: colorData,
            barThickness: 28,
            borderWidth: 3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            anchor: 'start',
            align: 'start',
            color: colorData,
            formatter(value) {
              return value + '%';
            },
            font: {
              size: 18,
            },
          },
          legend: {
            display: false,
          },
        },
        indexAxis: 'y',
        scales: {
          y: {
            stacked: true,
            ticks: {
              crossAlign: 'far',
              color: '#ffffff',
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
            stacked: true,
            beginAtZero: true,
            max: 100,
            ticks: {
              display: false,
              color: '#ffffff',
              font: {
                size: 18,
              },
              padding: 18,
            },
            grid: {
              display: false,
            },
          },
        },
      },
      plugins: [this.legendMargin],
    });
  }
}
