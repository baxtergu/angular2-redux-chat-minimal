import { Angular2ReduxChatMinimalPage } from './app.po';

describe('angular2-redux-chat-minimal App', () => {
  let page: Angular2ReduxChatMinimalPage;

  beforeEach(() => {
    page = new Angular2ReduxChatMinimalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
