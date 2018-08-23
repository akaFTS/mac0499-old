import { Injectable } from '@angular/core'
import { Classe } from './classe.model'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class ClassesService {
  constructor(public httpClient: HttpClient) {}

  public getAllClasses() {
    return this.httpClient.get<Classe[]>('assets/data/classes.json').pipe(
      map(classes => {
        classes.map(classe => {
          classe.beginYear = Math.floor(Math.random() * 46) + 1972
          classe.endYear =
            Math.floor(Math.random() * (2018 - classe.beginYear)) +
            classe.beginYear
        })
        return classes
      }),
    )
  }

  public getClassCodesByYear(year: number) {
    return this.httpClient
      .get<number[]>(`assets/data/classes/${year}.json`)
      .pipe(
        map(codes => {
          return codes.map(code => `MAC0${code}`)
        }),
      )
  }
}
