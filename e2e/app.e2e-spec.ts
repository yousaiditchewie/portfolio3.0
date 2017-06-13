import { Portfolio3.0Page } from './app.po';

describe('portfolio3.0 App', () => {
  let page: Portfolio3.0Page;

  beforeEach(() => {
    page = new Portfolio3.0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
