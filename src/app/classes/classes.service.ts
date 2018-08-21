import { Injectable } from '@angular/core';
import { Class } from './class.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  constructor(public httpClient: HttpClient) {}

  public getClassesByYear(year: number): Observable<Class[]> {
    return this.httpClient.get<Class[]>('assets/data/professors.json');
  }
}
