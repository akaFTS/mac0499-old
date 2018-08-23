import { Pipe, PipeTransform } from '@angular/core'
import { Classe } from '../classe.model'

@Pipe({
  name: 'year',
})
export class YearPipe implements PipeTransform {
  transform(classes: Classe[], year: number): any {
    if (year === -1) {
      return classes
    }

    return classes.filter(
      classe => classe.beginYear < year && classe.endYear > year,
    )
  }
}
