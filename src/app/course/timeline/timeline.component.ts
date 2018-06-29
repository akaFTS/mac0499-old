import { Component, OnInit } from '@angular/core';
import { TimelineService } from './timeline.service';
import { Record } from './record.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  years: {year: number, records: Record[]}[];

  constructor(private timelineService: TimelineService) { }

  ngOnInit() {
    this.years = this.timelineService.getRecordsByYear();
  }

}
