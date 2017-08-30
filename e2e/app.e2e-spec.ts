import { Hw10Page } from './app.po';

describe('hw10 App', () => {
  let page: Hw10Page;

  beforeEach(() => {
    page = new Hw10Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
