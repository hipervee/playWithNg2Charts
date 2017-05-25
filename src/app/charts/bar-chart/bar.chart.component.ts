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

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  ngOnChanges(changes: SimpleChanges) {
    let previousValue = <BarChartDataModel[]>changes['data'].previousValue;
    let currentValue = <BarChartDataModel[]>changes['data'].currentValue;

    if (previousValue) {
      previousValue.forEach(dataModel => {
        let data = currentValue.filter(item => item.label == dataModel.label);

        if (data.length != 0) {
          dataModel.data = data[0].data;
        }
      });
    }
  }
}
