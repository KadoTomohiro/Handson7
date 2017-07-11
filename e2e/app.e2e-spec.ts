import { Handson7Page } from './app.po';

describe('handson7 App', () => {
  let page: Handson7Page;

  beforeEach(() => {
    page = new Handson7Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
