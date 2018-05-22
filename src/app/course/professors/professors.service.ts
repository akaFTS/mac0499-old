import { Injectable } from '@angular/core';
import { Professor } from './professor.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessorsService {
  all_professors: Professor[] = [
    new Professor('Carlinhos', 'carlinhos.jpg', 6),
    new Professor('Daniel', 'daniel.jpg', 5),
    new Professor('Feofiloff', 'pf.jpg', 2)
  ];

  // professor_epochs:

  constructor() { }

  getProfessorsFromEpoch(epoch: number): Professor[] {
    return this.all_professors;
  }
}
