export class Angular2RedditPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-reddit-app h1')).getText();
  }
}
