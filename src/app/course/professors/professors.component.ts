import { Component, OnInit } from '@angular/core'
import { ProfessorsService } from './professors.service'
import { Professor } from './professor.model'
import { forkJoin } from 'rxjs'

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.scss'],
})
export class ProfessorsComponent implements OnInit {
  curProfessors: Professor[]
  allProfessors: Professor[]

  canvasSizes = [1, 1, 1, 1, 0, 1, 1]

  constructor(private professorsService: ProfessorsService) {}

  ngOnInit() {
    this.professorsService.getAllProfessors().subscribe(professors => {
      this.allProfessors = professors
    })
  }

  getCanvasSize(level) {
    return this.canvasSizes[level] * 50 + 50 + 'px'
  }

  transladeY(level, y) {
    let pad = 0
    for (let i = 6; i > level; i--) {
      if (i === 4) {
        continue
      }
      pad += (this.canvasSizes[i] + 1) * 50 + 20
    }
    return pad + y
  }

  handleYearChange(year: number) {
    const professors$ = this.professorsService.getAllProfessors()
    const codes$ = this.professorsService.getProfessorsFromYear(year)
    const slots$ = this.professorsService.getSlots()

    let levelCaps = [0, 0, 0, 0, 0, 0, 0]
    forkJoin(professors$, codes$, slots$).subscribe(
      ([professors, codes, slots]) => {
        Object.keys(codes).map(code => {
          levelCaps[codes[code]]++
        })
        levelCaps.map((size, index) => this.adjustCanvasSize(size, index))
        levelCaps = [0, 0, 0, 0, 0, 0, 0]

        this.allProfessors.map(prof => {
          prof.enabled = false

          if (Object.keys(codes).includes(prof.code)) {
            prof.enabled = true
            prof.level = codes[prof.code]

            const position = levelCaps[prof.level]
            prof.posX = slots[position][0] + '%'
            prof.posY = this.transladeY(prof.level, slots[position][1]) + 'px'
            levelCaps[prof.level]++
          }
        })
      },
    )
  }

  adjustCanvasSize(size, level) {
    if (size <= 6) {
      this.canvasSizes[level] = 1
    } else if (size <= 11) {
      this.canvasSizes[level] = 2
    } else if (size <= 17) {
      this.canvasSizes[level] = 3
    } else if (size <= 22) {
      this.canvasSizes[level] = 4
    } else {
      this.canvasSizes[level] = 5
    }
  }
}
