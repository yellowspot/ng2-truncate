import { Ng2TruncatePage } from './app.po';

describe('ng2-truncate App', function() {
  let page: Ng2TruncatePage;

  beforeEach(() => {
    page = new Ng2TruncatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
