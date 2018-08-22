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
  inputYear = 2018;

  setYear = () => {
    if(this.inputYear > 2018) {
      this.inputYear = 2018;
    }
    else if(this.inputYear < 1972) {
      this.inputYear = 1972;
    }
    this.currentYear = this.inputYear;
    this.yearChanged.emit(this.currentYear);
  }

  handleLeftClick = () => {
    if (this.currentYear > 1972) {
      this.inputYear--;
      this.currentYear--;
      this.yearChanged.emit(this.currentYear);
    }
  };

  handleRightClick = () => {
    if (this.currentYear < 2018) {
      this.inputYear++;
      this.currentYear++;
      this.yearChanged.emit(this.currentYear);
    }
  };

  constructor() {}

  ngOnInit() {
    this.yearChanged.emit(this.currentYear);
  }
}
