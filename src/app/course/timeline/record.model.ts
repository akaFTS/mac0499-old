import * as moment from 'moment';

/* Object representing an entry in the course timeline */
export class Record {
    date: moment.Moment;
    text: string;
    isFeatured: boolean;

    constructor (dateString: string, text: string, isFeatured = false) {
        this.date = moment(dateString, 'DD/MM/YYYY');
        this.text = text;
        this.isFeatured = isFeatured;
    }
}
