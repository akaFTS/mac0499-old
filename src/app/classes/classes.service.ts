import { Injectable } from '@angular/core'
import { Classe } from './classe.model'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { forkJoin } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ClassesService {
  constructor(public httpClient: HttpClient) {}

  public getAllClasses() {
    const yearPromises = []
    for (let i = 1991; i <= 2018; i++) {
      yearPromises.push(this.httpClient.get(`assets/data/classes/${i}.json`))
    }
    const classesPromise = this.httpClient.get<Classe[]>(
      'assets/data/classes.json',
    )

    return forkJoin([classesPromise, ...yearPromises]).pipe(
      map(([classes, ...years]) => {
        years.map((year, index) => {
          year.map(code => {
            const classe = classes.find(classe => classe.code === `MAC0${code}`)
            if (!classe) {
              console.log(
                'faltando materia: ' + code + ' no ano ' + (index + 1991),
              )
              return
            }

            classe.endYear = index + 1991
            classe.beginYear = classe.beginYear || index + 1991
          })
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
