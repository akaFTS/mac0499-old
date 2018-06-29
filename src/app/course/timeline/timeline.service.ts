import { Injectable } from '@angular/core';
import { Record } from './record.model';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  records: Record[] = [
    new Record('03/05/1970', 'Criação do IME'),
    new Record('04/07/1970', 'Primeiros professores começam a chegar de outros institutos e outros locais da USP'),
    new Record('25/01/1971', 'Aniversário da cidade de SP.', true),
    new Record('08/09/1996', 'Dia que eu nasci')
  ];

  constructor() { }

  /* group records by year */
  getRecordsByYear(): {year: number, records: Record[]}[] {
    const years: {year: number, records: Record[]}[] = [];
    let curYear = {
      year: this.records[0].date.year(),
      records: []
    };
    for (const record of this.records) {
      if (record.date.year() === curYear.year) {
        curYear.records.push(record);
      } else {
        years.push(curYear);
        curYear = {
          year: record.date.year(),
          records: [record]
        };
      }
    }
    years.push(curYear);
    return years;
  }
}
