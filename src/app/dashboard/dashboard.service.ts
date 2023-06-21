import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Costs, Progress, Tasks, Time, WorkLoad } from './dashboard.model';

@Injectable()
export class DashboardService {
  constructor() {}

  /**
   * method to get tasks statistics data.
   * @returns Observable of type Tasks[]
   */
  public getTasksStatistics(): Observable<Tasks[]> {
    return of([
      {
        label: 'Not Started',
        value: 10,
        color: '#9ba1aa',
      },
      {
        label: 'Complete',
        value: 6,
        color: '#6acc6c',
      },
      {
        label: 'In Progress',
        value: 2,
        color: '#4eccc1',
      },
    ]);
  }

  /**
   * method to get costs statistics data
   * @returns Observable of type Costs[]
   */
  public getCostsStatistics(): Observable<Costs[]> {
    return of([
      {
        label: 'Actual',
        value: 3000,
        color: '#84bb5d',
      },
      {
        label: 'Planned',
        value: 4500,
        color: '#54d2f9',
      },
      {
        label: 'Budget',
        value: 6000,
        color: '#4198e0',
      },
    ]);
  }

  /**
   * method to get workload statistics data
   * @returns Observable of type WorkLoad[]
   */
  public getWorkLoadStatistics(): Observable<WorkLoad[]> {
    return of([
      {
        label: 'Mike',
        completed: 4,
        remaining: 0,
        overdue: 0,
      },
      {
        label: 'Jennifer',
        completed: 2,
        remaining: 2,
        overdue: 0,
      },
      {
        label: 'Brandon',
        completed: 0,
        remaining: 1,
        overdue: 0,
      },
      {
        label: 'Sam',
        completed: 0,
        remaining: 3,
        overdue: 0,
      },
      {
        label: 'George',
        completed: 0,
        remaining: 1,
        overdue: 0,
      },
    ]);
  }

  /**
   * method to get time statistics data
   * @returns Observable of type Time[]
   */
  public getTimeStatistics(): Observable<Time[]> {
    return of([
      {
        label: 'Planned Completion',
        value: 0,
      },
      {
        label: 'Actual Completion',
        value: 14,
      },
      {
        label: 'Ahead',
        value: 14,
      },
      {
        label: '',
        value: 0,
      },
      {
        label: '',
        value: 0,
      },
    ]);
  }

  /**
   * method to get progress statistics data
   * @returns Observable of type Progress[]
   */
  public getProgressStatistics(): Observable<Progress[]> {
    return of([
      {
        label: 'Contracts',
        value: 100,
        color: '#6acb6d',
      },
      {
        label: 'Design',
        value: 80,
        color: '#6acb6d',
      },
      {
        label: 'Procurement',
        value: 19,
        color: '#de5b9a',
      },
      {
        label: 'Construction',
        value: 0,
        color: '#9ba1aa',
      },
      {
        label: 'Post Construction',
        value: 0,
        color: '#9ba1aa',
      },
      {
        label: 'Project Clone',
        value: 0,
        color: '#9ba1aa',
      },
    ]);
  }
}
