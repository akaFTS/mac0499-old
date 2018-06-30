import * as moment from 'moment';

/* Object representing an entry in the course timeline */
export class Record {
    date: moment.Moment;
    year: number;
    text: string;
    featureLevel: number;

    constructor (year: number, date: string, text: string, featureLevel = 0) {
        this.year = year;
        this.date = date ? moment(date, 'DD/MM') : null;
        this.text = text;
        this.featureLevel = featureLevel;
    }
}
