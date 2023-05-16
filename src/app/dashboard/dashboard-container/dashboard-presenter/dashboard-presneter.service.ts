import { Injectable } from '@angular/core';
import { Chart } from 'chart.js';

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
        return (this.height += 30);
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
        maintainAspectRatio: true,
        cutout: '90%',
        plugins: {
          legend: {
            labels: {
              font: {
                size: 14,
              },
              color: '#a9b0b9',
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
        maintainAspectRatio: true,
        elements: {
          bar: {
            borderWidth: 3,
            borderColor: 'rgba(0, 0, 0, 0.1)',
          },
        },
        plugins: {
          legend: {
            align: 'start',
            labels: {
              font: {
                size: 14,
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
              font: {
                size: 14,
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
            data: [0, 0, 0, 0, , 0],
            backgroundColor: '#e9514b',
            barThickness: 22,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        elements: {
          bar: {
            borderWidth: 3,
            borderColor: 'rgba(0, 0, 0, 0.1)',
          },
        },
        plugins: {
          legend: {
            align: 'start',
            labels: {
              font: {
                size: 14,
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
              color: '#ffffff',
              font: {
                size: 14,
              },
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
                size: 14,
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
}
