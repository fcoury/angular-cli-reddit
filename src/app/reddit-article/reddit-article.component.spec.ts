import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RedditArticleComponent } from './reddit-article.component';

describe('Component: RedditArticle', () => {
  // let builder: TestComponentBuilder;
  //
  // beforeEachProviders(() => [RedditArticleComponent]);
  // beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
  //   builder = tcb;
  // }));
  //
  // it('should inject the component', inject([RedditArticleComponent],
  //     (component: RedditArticleComponent) => {
  //   expect(component).toBeTruthy();
  // }));
  //
  // it('should create the component', inject([], () => {
  //   return builder.createAsync(RedditArticleComponentTestController)
  //     .then((fixture: ComponentFixture<any>) => {
  //       let query = fixture.debugElement.query(By.directive(RedditArticleComponent));
  //       expect(query).toBeTruthy();
  //       expect(query.componentInstance).toBeTruthy();
  //     });
  // }));
});

@Component({
  selector: 'test',
  template: `
    <app-reddit-article></app-reddit-article>
  `,
  directives: [RedditArticleComponent]
})
class RedditArticleComponentTestController {
}
