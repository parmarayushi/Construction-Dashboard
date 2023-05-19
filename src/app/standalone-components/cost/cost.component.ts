import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardComponent } from 'src/app/card/card.component';
import { Costs } from 'src/app/dashboard/dashboard.model';
//----------------------------
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(...registerables, ChartDataLabels);

@Component({
  selector: 'app-cost',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './cost.component.html',
})
export class CostComponent {
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
      this.renderCostsChart(labelData, realData, colorData);
    }
  }
  public get costsStatistics(): Costs[] | null {
    return this._costsStatistics;
  }

  // variable instance for costs statistics
  private _costsStatistics: Costs[];

  constructor() {
    this._costsStatistics = [];
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
   * method to render bar chart for costs statistics
   * @param labelData
   * @param mainData
   * @param colorData
   */
  public renderCostsChart(
    labelData: string[],
    mainData: number[],
    colorData: string[]
  ) {
    new Chart('costs', {
      type: 'bar',
      data: {
        // labels: labelData,
        // datasets: [
        //   {
        //     data: mainData,
        //     backgroundColor: colorData,
        //     barThickness: 50,
        //     borderWidth: 1,
        //   },
        // ],

        labels: [''],
        datasets: [
          {
            label: 'Actual',
            backgroundColor: '#84bb5d',
            data: [3000],
            barThickness: 60,
          },
          {
            label: 'Planned',
            backgroundColor: '#54d2f9',
            data: [4500],
            barThickness: 60,
          },
          {
            label: 'Budget',
            backgroundColor: '#4198e0',
            data: [6000],
            barThickness: 60,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          bar: {
            borderWidth: 4,
            borderColor: 'rgba(0, 0, 0, 0.1)',
          },
        },
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
              // pointStyle: 'rectRot',
              padding: 30,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            border: {
              display: false,
            },
            ticks: {
              callback: function (value) {
                var ranges = [{ divider: 1e3, suffix: 'k' }];
                function formatNumber(n: any) {
                  for (var i = 0; i < ranges.length; i++) {
                    if (n >= ranges[i].divider) {
                      return (
                        (n / ranges[i].divider).toString() + ranges[i].suffix
                      );
                    }
                  }
                  return n;
                }
                return formatNumber(value);
              },
              padding: 18,
              font: {
                size: 18,
              },
              // color: '#ffffff',
              stepSize: 1500,
            },
            grid: {
              color: '#222533',
            },
          },
          x: {
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
