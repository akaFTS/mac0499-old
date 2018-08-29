import { Component, OnInit } from '@angular/core'
import { ClassesService } from '../classes.service'
import { Classe } from '../classe.model'

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.scss'],
})
export class ClassesListComponent implements OnInit {
  constructor(public classesService: ClassesService) {}
  classList = []
  filter = -1
  yearInput = ''
  yearFilter = -1

  ngOnInit() {
    this.classesService.getAllClasses().subscribe(classes => {
      this.classList = classes
    })
  }

  applyYearFilter() {
    const year = parseInt(this.yearInput)

    if (isNaN(year) || year < 1972 || year > 2018) {
      this.yearInput = ''
      this.yearFilter = -1
    } else {
      this.yearFilter = year
    }
  }

  setFilter(filter: number) {
    this.filter = filter
  }

  getAreaColor(area: number) {
    switch (area) {
      case 0:
        return 'bg-blue'
      case 1:
        return 'bg-green'
      case 2:
        return 'bg-pink'
      case 3:
        return 'bg-orange'
      case 4:
        return 'bg-light-silver'
    }
  }

  getBeginYearColor(classe: Classe) {
    if (classe.beginYear < 1982) {
      return 'moon-gray'
    } else if (classe.beginYear < 1998) {
      return 'light-silver'
    } else if (classe.beginYear < 2010) {
      return 'gray'
    } else {
      return 'dark-gray'
    }
  }

  getEndYearColor(classe: Classe) {
    if (classe.endYear < 1982) {
      return 'washed-red'
    } else if (classe.endYear < 1998) {
      return 'light-red'
    } else if (classe.endYear < 2010) {
      return 'red'
    } else {
      return 'dark-red'
    }
  }
}
