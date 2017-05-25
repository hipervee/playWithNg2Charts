export class BarChartDataModel {
    data: number[];
    label: string;

    constructor(label?: string, data?: number[]) {
        this.label = label || 'Series A';
        this.data = data && data.length ? data :[65, 59, 80, 81, 56, 55, 40];
    }
}
export class BarChartModel {
    data: BarChartDataModel[];
    type: string;
    labels: string[];
    legend: boolean;
    options: any;

    constructor() {
        this.options = {
            scaleShowVerticalLines: false,
            responsive: true
        };

        this.data = [
            new BarChartDataModel('Series A', [65, 59, 80, 81, 56, 55, 40]),
            new BarChartDataModel('Series B', [28, 48, 40, 19, 86, 27, 90]),
        ];

        this.legend = true;
        this.type = 'bar';
        this.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    }
}