import { Injectable } from '@angular/core';
import { Professor } from './professor.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessorsService {
  all_professors: Professor[] = [
    new Professor('C. Humes', 'chumes.jpg'),
    new Professor('Feofiloff', 'pf.jpg'),
    new Professor('Routo', 'routo.jpg'),
    new Professor('Siang', 'siang.jpg'),
    new Professor('Setzer', 'setzer.jpg'),
    new Professor('Carlinhos', 'carlinhos.jpg'),
    new Professor('Ernesto', 'ernesto.jpg'),
    new Professor('Kon', 'kon.jpg'),
    new Professor('Barrera', 'barrera.jpg'),
    new Professor('Finger', 'finger.jpg'),
    new Professor('Marcondes', 'marcondes.jpg'),
    new Professor('Yoshi', 'yoshi.jpg'),
    new Professor('Yoshiko', 'yoshiko.jpg'),
    new Professor('Alan', 'alan.jpg'),
    new Professor('Gold', 'gold.jpg'),
    new Professor('Ana', 'acvm.jpg'),
    new Professor('Fujita', 'fujita.jpg'),
    new Professor('Mandel', 'arnaldo.jpg'),
    new Professor('Cris', 'cris.jpg'),
    new Professor('Daniel', 'daniel.jpg'),
    new Professor('Flavio', 'flavio.jpg'),
    new Professor('Jef', 'jef.jpg'),
    new Professor('Leliane', 'leliane.jpg'),
    new Professor('Marcel', 'marcel.jpg'),
    new Professor('Marcelo', 'marcelo.jpg'),
    new Professor('Nina', 'nina.jpg'),
    new Professor('Renata', 'renata.jpg'),
    new Professor('Hirata', 'hirata.jpg'),
    new Professor('Ronaldo', 'ronaldo.jpg'),
    new Professor('Walter', 'mascarenhas.jpg'),
    new Professor('Alair', 'alair.jpg'),
    new Professor('Hitoshi', 'hitoshi.jpg'),
    new Professor('Denis', 'denis.jpg'),
    new Professor('Coelho', 'coelho.jpg'),
    new Professor('Kelly', 'kelly.jpg'),
    new Professor('Kunio', 'kunio.jpg'),
    new Professor('Leonidas', 'leonidas.jpg'),
    new Professor('Marcel K.', 'marcelk.jpg'),
    new Professor('Gubi', 'gubi.jpg'),
    new Professor('Nami', 'nami.jpg'),
    new Professor('Paulo', 'pmiranda.jpg'),
    new Professor('Marcílio', 'marcilio.jpg'),
    new Professor('Reverbel', 'reverbel.jpg'),
    new Professor('J. Soares', 'jose.jpg'),
    new Professor('P. José', 'pjose.jpg'),
    new Professor('I. Simon', 'simon.jpg'),
    new Professor('J. Stern', 'stern.jpg'),
    new Professor('Dilma', 'dilma.jpg')
  ];

  // professor_epochs:
  professor_epochs: { id: number; level: number }[][] = [
    // 1970
    [],

    // 1987
    [
      { id: 45, level: 6 },
      { id: 4, level: 5 },
      { id: 0, level: 3 },
      { id: 1, level: 3 },
      { id: 2, level: 3 },
      { id: 3, level: 3 },
      { id: 12, level: 3 },
      { id: 17, level: 3 },
      { id: 41, level: 2 },
      { id: 42, level: 2 },
      { id: 11, level: 2 },
      { id: 39, level: 2 },
      { id: 46, level: 2 },
      { id: 13, level: 1 },
      { id: 43, level: 1 },
      { id: 33, level: 1 },
      { id: 5, level: 1 },
      { id: 47, level: 1 },
      { id: 35, level: 1 }
    ],

    // 1995
    [],

    // 2007
    [
      { id: 1, level: 0 },
      { id: 3, level: 0 },
      { id: 4, level: 0 },
      { id: 0, level: 6 },
      { id: 2, level: 6 },
      { id: 8, level: 6 },
      { id: 11, level: 6 },
      { id: 12, level: 6 },
      { id: 5, level: 5 },
      { id: 6, level: 5 },
      { id: 7, level: 5 },
      { id: 9, level: 5 },
      { id: 10, level: 5 },
      { id: 14, level: 5 },
      { id: 17, level: 5 },
      { id: 18, level: 5 },
      { id: 20, level: 5 },
      { id: 43, level: 5 },
      { id: 13, level: 3 },
      { id: 15, level: 3 },
      { id: 21, level: 3 },
      { id: 22, level: 3 },
      { id: 23, level: 3 },
      { id: 24, level: 3 },
      { id: 25, level: 3 },
      { id: 26, level: 3 },
      { id: 27, level: 3 },
      { id: 28, level: 3 },
      { id: 29, level: 3 },
      { id: 30, level: 3 },
      { id: 31, level: 3 },
      { id: 33, level: 3 },
      { id: 35, level: 3 },
      { id: 36, level: 3 },
      { id: 38, level: 3 },
      { id: 39, level: 3 },
      { id: 42, level: 3 },
      { id: 44, level: 3 },
      { id: 41, level: 2 }
    ],

    // 2018
    [
      { id: 0, level: 0 },
      { id: 1, level: 0 },
      { id: 2, level: 0 },
      { id: 3, level: 0 },
      { id: 4, level: 0 },
      { id: 5, level: 6 },
      { id: 6, level: 6 },
      { id: 7, level: 6 },
      { id: 8, level: 6 },
      { id: 9, level: 6 },
      { id: 10, level: 6 },
      { id: 11, level: 6 },
      { id: 12, level: 6 },
      { id: 13, level: 5 },
      { id: 14, level: 5 },
      { id: 15, level: 5 },
      { id: 16, level: 5 },
      { id: 17, level: 5 },
      { id: 18, level: 5 },
      { id: 19, level: 5 },
      { id: 20, level: 5 },
      { id: 21, level: 5 },
      { id: 22, level: 5 },
      { id: 23, level: 5 },
      { id: 24, level: 5 },
      { id: 25, level: 5 },
      { id: 26, level: 5 },
      { id: 27, level: 5 },
      { id: 28, level: 5 },
      { id: 29, level: 5 },
      { id: 30, level: 3 },
      { id: 31, level: 3 },
      { id: 32, level: 3 },
      { id: 33, level: 3 },
      { id: 34, level: 3 },
      { id: 35, level: 3 },
      { id: 36, level: 3 },
      { id: 37, level: 3 },
      { id: 38, level: 3 },
      { id: 39, level: 3 },
      { id: 40, level: 3 },
      { id: 41, level: 2 }
    ]
  ];

  constructor(public httpClient: HttpClient) {}

  getAllProfessors(): Observable<Professor[]> {
    return this.httpClient.get<Professor[]>('assets/data/professors.json');
  }

  getProfessorsFromYear(year: number): Observable<any> {
    return this.httpClient.get('assets/data/professors/' + year + '.json');
  }
}
