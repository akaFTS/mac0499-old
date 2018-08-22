import { Injectable } from '@angular/core'
import { Classe } from './classe.model'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class ClassesService {
  constructor(public httpClient: HttpClient) {}

  public getAllClasses() {
    return this.httpClient.get<Classe[]>('assets/data/classes.json')
  }

  public getClassCodesByYear(year: number) {
    return this.httpClient.get<string[]>(`assets/data/classes/${year}.json`)
  }
}
