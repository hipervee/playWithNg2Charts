import { Component, OnInit } from '@angular/core';
import { BarChartDataModel } from './charts/models/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  barChartData: BarChartDataModel[] = [new BarChartDataModel(), new BarChartDataModel('Series B', [44,45,66])];

  ngOnInit() {
  }

  update() {
    this.barChartData = [
      new BarChartDataModel('Series A', [88, 22, 80, 81, 56, 55, 40]),
      new BarChartDataModel('Series B', [28, 48, 40, 19, 86, 27, 90]),
    ];
  }
}
