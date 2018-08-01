import { Component, OnInit } from '@angular/core';
import { ProfessorsService } from './professors.service';
import { Professor } from './professor.model';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.scss']
})
export class ProfessorsComponent implements OnInit {
  curProfessors: Professor[];
  allProfessors: Professor[];
  curEpoch;

  constructor(private professorsService: ProfessorsService) {}

  ngOnInit() {
    this.professorsService.getAllProfessors().subscribe(professors => {
      this.allProfessors = professors;
    });

    this.onSliderChange({ value: 0 });
  }

  transladeY(level, y) {
    if (level < 4) {
      level++;
    }

    return (6 - level) * 140 + y;
  }

  onSliderChange(event) {
    this.curEpoch = event.value + 1972;

    const professors$ = this.professorsService.getAllProfessors();
    const codes$ = this.professorsService.getProfessorsFromYear(this.curEpoch);

    forkJoin(professors$, codes$).subscribe(([professors, codes]) => {
      this.allProfessors.map(prof => {
        prof.enabled = false;

        if (Object.keys(codes).includes(prof.code)) {
          prof.enabled = true;
          prof.level = codes[prof.code];
          prof.posX = prof.defX + '%';
          prof.posY = this.transladeY(prof.level, prof.defY) + 'px';
        }
      });
    });
  }
}
