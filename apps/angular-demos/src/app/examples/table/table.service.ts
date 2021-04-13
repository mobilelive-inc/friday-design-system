import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http
      .get('/assets/tasks.json')
      .toPromise()
      .then((res: any) => {
        return res;
      });
  }
}
