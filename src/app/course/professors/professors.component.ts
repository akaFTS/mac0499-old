import { Component, OnInit } from '@angular/core';
import { ProfessorsService } from './professors.service';
import { Professor } from './professor.model';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.scss']
})
export class ProfessorsComponent implements OnInit {
  curProfessors: Professor[];
  curEpoch = '1972';

  constructor(private professorsService: ProfessorsService) { }

  ngOnInit() {
    this.onSliderChange({value: 1});
  }

  onSliderChange(event) {
    switch (event.value) {
      case 1:
        this.curEpoch = '1972';
        break;
      case 2:
        this.curEpoch = '1983';
        break;
      case 3:
        this.curEpoch = '2002';
        break;
      case 4:
        this.curEpoch = '2010';
        break;
      case 5:
        this.curEpoch = '2018';
    }
    this.curProfessors = this.professorsService.getProfessorsFromEpoch(event.value);
  }

  getProfessorClasses(prof: Professor): string {
    return 'professor professor--ms' + prof.level;
  }

  getTooltip(prof: Professor): string {
    switch (prof.level) {
      case 2:
        return 'Assistente (MS-2)';
      case 3:
        return 'Doutor (MS-3)';
      case 5:
        return 'Associado (MS-5)';
      case 6:
        return 'Titular (MS-6)';
      default:
        return 'Aposentado';
    }
  }

}
