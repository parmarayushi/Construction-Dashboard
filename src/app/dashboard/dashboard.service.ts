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
    // return this._http.get<Tasks[]>(`${this.baseURL}/tasks`);

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
    // return this._http.get<Costs[]>(`${this.baseURL}/costs`);
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
    // return this._http.get<WorkLoad[]>(`${this.baseURL}/workLoad`);
    return of([
      {
        label: 'Mike',
        value: 4,
        color: '#84bb5d',
      },
      {
        label: 'Jennifer',
        value: 4,
        color: '#84bb5d',
      },
      {
        label: 'Brandon',
        value: 1,
        color: '#54d2f9',
      },
      {
        label: 'Sam',
        value: 3,
        color: '#54d2f9',
      },
      {
        label: 'George',
        value: 1,
        color: '#54d2f9',
      },
    ]);
  }

  /**
   * method to get time statistics data
   * @returns Observable of type Time[]
   */
  public getTimeStatistics(): Observable<Time[]> {
    // return this._http.get<Time[]>(`${this.baseURL}/time`);
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
    // return this._http.get<Progress[]>(`${this.baseURL}/progress`);
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
