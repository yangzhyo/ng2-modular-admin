import { OzzoCentralPage } from './app.po';

describe('ozzo-central App', () => {
  let page: OzzoCentralPage;

  beforeEach(() => {
    page = new OzzoCentralPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
