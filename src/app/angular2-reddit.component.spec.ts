import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2RedditAppComponent } from '../app/angular2-reddit.component';

beforeEachProviders(() => [Angular2RedditAppComponent]);

describe('App: Angular2Reddit', () => {
  it('should create the app',
      inject([Angular2RedditAppComponent], (app: Angular2RedditAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-reddit works!\'',
      inject([Angular2RedditAppComponent], (app: Angular2RedditAppComponent) => {
    expect(app.title).toEqual('angular2-reddit works!');
  }));
});
