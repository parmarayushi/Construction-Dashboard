import { Injectable } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables, ChartDataLabels);

@Injectable({
  providedIn: 'root',
})
export class DashboardPresneterService {
  constructor() {}

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
        cutout: '88%',
        plugins: {
          datalabels: {
            anchor: 'end',
            align: 'end',
            font: {
              size: 20,
            },
            color: colorData,
            padding: 18,
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
                size: 16,
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
            barThickness: 50,
          },
          {
            label: 'Planned',
            backgroundColor: '#54d2f9',
            data: [4500],
            barThickness: 50,
          },
          {
            label: 'Budget',
            backgroundColor: '#4198e0',
            data: [6000],
            barThickness: 50,
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
                size: 16,
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
              padding: 20,
              font: {
                size: 18,
              },
              color: '#ffffff',
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

  /**
   * method to render stacked bar chart for workload statistics
   * @param labelData
   * @param mainData
   * @param colorData
   */
  public renderWorkLoadChart(
    labelData: string[],
    mainData: number[],
    colorData: string[]
  ) {
    new Chart('workLoad', {
      type: 'bar',
      data: {
        labels: labelData,
        datasets: [
          // {
          //   data: mainData,
          //   backgroundColor: colorData,
          //   barThickness: 20,
          //   borderWidth: 1,
          // },
          {
            label: 'Completed',
            data: [4, 2, 0, 0, 0],
            backgroundColor: '#84bb5d',
            barThickness: 22,
          },
          {
            label: 'Remaining',
            data: [0, 2, 1, 3, 1],
            backgroundColor: '#54d2f9',
            barThickness: 22,
          },
          {
            label: 'Overdue',
            data: [0, 0, 0, 0, 0],
            backgroundColor: '#e9514b',
            barThickness: 22,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          bar: {
            borderWidth: 3,
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
                size: 16,
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
              padding: 30,
            },
            grid: {
              display: false,
            },
          },
          x: {
            stacked: true,
            beginAtZero: true,
            max: 8,
            ticks: {
              color: '#ffffff',
              font: {
                size: 18,
              },
              stepSize: 2,
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
            // anchor: 'start',
            // align: 'start',
            // font: {
            //   size: 20,
            // },
            // padding: 18,
            display: false,
          },
          legend: {
            align: 'start',
            labels: {
              font: {
                size: 16,
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
            min: -100,
            ticks: {
              callback: (val: any) => Math.abs(val),
              color: '#ffffff',
              font: {
                size: 18,
              },
              stepSize: 25,
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
