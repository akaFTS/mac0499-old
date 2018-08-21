import { Component, OnInit } from '@angular/core';
import { ClassesService } from '../classes.service';

@Component({
  selector: 'app-area-year',
  templateUrl: './area-year.component.html',
  styleUrls: ['./area-year.component.scss']
})
export class AreaYearComponent implements OnInit {
  currentYear: number;
  classNumbers = [0, 0, 0, 0];

  constructor(private classesService: ClassesService) {}

  handleYearChange(year: number) {
    this.currentYear = year;
    this.classesService.getClassesByYear(year).subscribe(classes => {
      this.classNumbers = [0, 0, 0, 0];
      classes.map(subject => {
        this.classNumbers[subject.area]++;
      });
    });
  }

  getBallSize(area: number) {
    return area + 50 + 'px';
  }

  ngOnInit() {}
}
