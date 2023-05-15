import { Injectable } from '@angular/core';
import { Chart } from 'chart.js';

@Injectable({
  providedIn: 'root',
})
export class DashboardPresneterService {
  constructor() {}

  public renderDoughnutChart(
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
            borderWidth: 1,
            backgroundColor: colorData,
          },
        ],
      },
      options: {
        responsive: true,
        cutout: '90%',
      },
    });
  }
}
