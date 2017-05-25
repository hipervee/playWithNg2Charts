import { Component, Input, SimpleChanges } from '@angular/core';
import { BarChartModel, BarChartDataModel } from '../models/index';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar.chart.component.html'
})
export class BarChartComponent {
  config: BarChartModel = new BarChartModel();
  public options: any = this.config.options;
  public labels: string[] = this.config.labels;
  public type: string = this.config.type;
  public legend: boolean = this.config.legend;
  @Input() data: BarChartDataModel[] = this.config.data;
}
