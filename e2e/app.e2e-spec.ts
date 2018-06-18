import { MdpAdminPage } from './app.po';

describe('mdp-admin App', () => {
  let page: MdpAdminPage;

  beforeEach(() => {
    page = new MdpAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
