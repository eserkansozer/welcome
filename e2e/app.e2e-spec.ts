import { HomePagePage } from './app.po';

describe('home-page App', () => {
  let page: HomePagePage;

  beforeEach(() => {
    page = new HomePagePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
