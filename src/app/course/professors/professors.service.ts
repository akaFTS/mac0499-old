import { Injectable } from '@angular/core';
import { Professor } from './professor.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessorsService {
  constructor(public httpClient: HttpClient) {}

  getAllProfessors(): Observable<Professor[]> {
    return this.httpClient.get<Professor[]>('assets/data/professors.json');
  }

  getProfessorsFromYear(year: number): Observable<any> {
    return this.httpClient.get('assets/data/professors/' + year + '.json');
  }

  getSlots(): Observable<any> {
    return this.httpClient.get('assets/data/slots.json');
  }
}
