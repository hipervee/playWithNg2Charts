import { Component } from '@angular/core';
import { BarChartDataModel } from './charts/models/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  barChartData: BarChartDataModel[] = [new BarChartDataModel('X'), new BarChartDataModel('Series B')];

  update() {
    this.barChartData = [
      new BarChartDataModel('Series A', [88, 22, 80, 81, 56, 55, 40]),
      new BarChartDataModel('Series C', [84, 22, 96, 19, 86, 27, 90])
    ];
  }
}
