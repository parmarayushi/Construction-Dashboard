import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Costs, Tasks, WorkLoad } from './dashboard.model';

@Injectable()
export class DashboardService {
  private baseURL: string;

  constructor(private _http: HttpClient) {
    this.baseURL = 'http://localhost:3000';
  }

  /**
   * method to get tasks statistics data.
   * @returns Observable of type Tasks[]
   */
  public getTasksStatistics(): Observable<Tasks[]> {
    return this._http.get<Tasks[]>(`${this.baseURL}/tasks`);
  }

  /**
   * method to get costs statistics data
   * @returns Observable of type Costs[]
   */
  public getCostsStatistics(): Observable<Costs[]> {
    return this._http.get<Costs[]>(`${this.baseURL}/costs`);
  }

  /**
   * method to get workload statistics data
   * @returns Observable of type WorkLoad[]
   */
  public getWorkLoadStatistics(): Observable<WorkLoad[]> {
    return this._http.get<WorkLoad[]>(`${this.baseURL}/workLoad`);
  }
}
