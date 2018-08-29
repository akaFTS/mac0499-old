import { Component, OnInit } from '@angular/core'
import { ClassesService } from '../classes.service'
import { forkJoin } from 'rxjs'

@Component({
  selector: 'app-area-year',
  templateUrl: './area-year.component.html',
  styleUrls: ['./area-year.component.scss'],
})
export class AreaYearComponent implements OnInit {
  currentYear: number
  classNumbers = [0, 0, 0, 0, 0]

  constructor(private classesService: ClassesService) {}

  handleYearChange(year: number) {
    this.currentYear = year

    const year$ = this.classesService.getClassCodesByYear(year)
    const classes$ = this.classesService.getAllClasses()

    forkJoin(year$, classes$).subscribe(([yearCodes, classes]) => {
      this.classNumbers = [0, 0, 0, 0, 0]
      yearCodes.map(yearCode => {
        const classe = classes.find(classe => classe.code === yearCode)
        if (classe) {
          this.classNumbers[classe.area]++
        }
      })
    })
  }

  getBallSize(area: number) {
    return `${this.classNumbers[area] * 3 + 50}px`
  }

  ngOnInit() {}
}
