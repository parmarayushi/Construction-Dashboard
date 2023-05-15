import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from './dashboard.model';

@Injectable()
export class DashboardService {
  private baseURL: string;

  constructor(private _http: HttpClient) {
    this.baseURL = 'http://localhost:3000';
  }

  public getTasks(): Observable<Tasks[]> {
    return this._http.get<Tasks[]>(`${this.baseURL}/tasks`);
  }
}
