import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  // lineChart
  public lineChartData: Array<any> = [
    {data: [14, 18, 13, 16, 15, 26, 22, 20, 13,
            15, 12, 11, 18,  7, 12,  7,  9, 11,
            14, 12,  8, 10, 11,  2, 12, 10,  6,
            10,  6,  7,  3,  5,  3,  5,  5,  4,
             3,  3,  3,  1,  1,  6,  6,  6],
     label: 'Mulheres'},
    {data: [  7,  3,  7, 10,  7, 18,  8,  8, 10,
             12, 10,  8, 23, 17, 30, 17, 24, 17,
             16, 20, 15, 29, 28, 15, 31, 41, 49,
             37, 39, 50, 43, 24, 34, 39, 37, 35,
             31, 23, 30, 26, 21, 29, 35, 37],
     label: 'Homens'},
  ];
  public lineChartLabels: Array<number> = [];
  public lineChartOptions = {
    scales: {
      xAxes: [{ ticks: { maxTicksLimit: 8 }}]
    }
  };

  ngOnInit() {

    // Create date labels
    for (let i = 1974; i <= 2017; i++) {
      this.lineChartLabels.push(i);
    }

    // Accumulate on graduate numbers
    for (let i = 1; i < this.lineChartData[0].data.length; i++) {
      this.lineChartData[0].data[i] += this.lineChartData[0].data[i - 1];
      this.lineChartData[1].data[i] += this.lineChartData[1].data[i - 1];
    }
  }

}
