import { Component, OnInit, Input } from '@angular/core';
import { Professor } from '../professor.model';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss']
})
export class ProfessorComponent implements OnInit {
  @Input() professor: Professor;
  path: string;

  constructor() {}

  ngOnInit() {
    this.path = 'assets/images/' + this.professor.code + '.jpg';
  }
}
