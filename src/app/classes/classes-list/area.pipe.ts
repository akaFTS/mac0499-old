import { Pipe, PipeTransform } from '@angular/core';
import { Classe } from '../classe.model';

@Pipe({
  name: 'area'
})
export class AreaPipe implements PipeTransform {
  transform(classes: Classe[], area: number): any {
    if (area === -1) {
      return classes;
    }

    return classes.filter(classe => classe.area === area);
  }
}
