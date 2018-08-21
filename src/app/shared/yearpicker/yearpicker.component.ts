import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-yearpicker',
  templateUrl: './yearpicker.component.html',
  styleUrls: ['./yearpicker.component.scss']
})
export class YearpickerComponent implements OnInit {
  @Output()
  yearChanged = new EventEmitter<number>();

  currentYear = 2018;

  handleLeftClick = () => {
    if (this.currentYear > 1972) {
      this.currentYear--;
      this.yearChanged.emit(this.currentYear);
    }
  };

  handleRightClick = () => {
    if (this.currentYear < 2018) {
      this.currentYear++;
    }
  };

  constructor() {}

  ngOnInit() {}
}
