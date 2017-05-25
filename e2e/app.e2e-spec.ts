import { ChartAppPage } from './app.po';

describe('chart-app App', () => {
  let page: ChartAppPage;

  beforeEach(() => {
    page = new ChartAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
