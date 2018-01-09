import { MySassPage } from './app.po';

describe('my-sass App', () => {
  let page: MySassPage;

  beforeEach(() => {
    page = new MySassPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
