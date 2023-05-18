import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { CardComponent } from 'src/app/card/card.component';
import { Time } from 'src/app/dashboard/dashboard.model';

@Component({
  selector: 'app-time',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './time.component.html',
})
export class TimeComponent {
  /**
   * Component property for time statistics
   */
  @Input() public set timeStatistics(value: Time[] | null) {
    if (value) {
      const labelData = [];
      const realData = [];
      for (let i = 0; i < value.length; i++) {
        labelData.push(value[i].label);
        realData.push(value[i].value);
      }
      this.renderTimeChart(labelData, realData);
    }
  }
  public get timeStatistics(): Time[] | null {
    return this._timeStatistics;
  }

  // variable instance for workload statistics
  private _timeStatistics: Time[];

  constructor() {
    this._timeStatistics = [];
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

  // Add a custom labels on chart
  public customPercentageLable = {
    id: 'customelabels',
    afterDatasetsDraw(chart: any) {
      const { ctx } = chart;

      for (let i = 0; i < chart.data.datasets[2].data.length; i++) {
        const yPostion = chart.getDatasetMeta(2).data[i].y;
        const value = chart.data.datasets[2].data[i];
        ctx.font = 'bold 18px sans-serif';
        ctx.fillStyle = 'rgb(101 203 110)';
        ctx.save();
        ctx.fillText(
          JSON.stringify(value) + '%',
          chart.width / 2 + 30,
          yPostion
        );
      }
    },
  };

  /**
   * method to render bar chart fo time statistics
   * @param labelData
   * @param mainData
   */
  public renderTimeChart(labelData: string[], mainData: number[]) {
    new Chart('time', {
      type: 'bar',
      data: {
        labels: labelData,
        datasets: [
          // {
          //   data: mainData,
          //   backgroundColor: '#84bb5d',
          //   barThickness: 30,
          //   borderWidth: 1,
          // },
          {
            label: 'Ahead',
            data: [0, 0, 0],
            backgroundColor: '#3facf4',
            barThickness: 22,
          },
          {
            label: 'Behind',
            data: [0, 0, 0],
            backgroundColor: '#f7a652',
            barThickness: 22,
          },
          {
            label: 'OnTime',
            data: [0, 14, 14],
            backgroundColor: '#6bcc6d',
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
              color: '#ffffff',
              font: {
                size: 18,
              },
            },
            grid: {
              display: false,
            },
          },
          x: {
            stacked: true,
            beginAtZero: true,
            max: 100,
            min: -100,
            ticks: {
              callback: (val: any) => Math.abs(val),
              color: '#ffffff',
              font: {
                size: 18,
              },
              padding: 18,
              stepSize: 25,
            },
            grid: {
              color: '#222533',
            },
          },
        },
      },
      plugins: [this.legendMargin, this.customPercentageLable],
    });
  }
}
