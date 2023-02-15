---
title: 'What should be tested in frontend applications?'
excerpt: 'Unit testing is a critical component of modern software development. It allows developers to verify the correctness of their code, catch defects early, and prevent regressions. Angular, a popular front-end framework, provides a robust testing framework that allows developers to write unit tests for their code. In this article, we will explore how to set up Angular unit tests as a senior developer.'
coverImage: '/assets/blog/what-should-be-tested-in-frontend-applications/cover.jpg'
date: '2023-02-14T22:32:00.000Z'
author:
  name: Victor Nogueira
  picture: '/assets/blog/authors/vmnog.jpg'
ogImage:
  url: '/assets/blog/what-should-be-tested-in-frontend-applications/cover.jpg'
---

### Summary
 - [Initial Setup](#initial-setup)
 - [What should be tested?](#what-should-be-tested)
 - [Testing logic behaviors](#testing-logic-behaviors)
 - [Testing interface behaviors](#testing-interface-behaviors)
 - [Testing CSS styling behaviors](#testing-css-styling-behaviors)

<hr/>

Unit testing is a critical component of modern software development. It allows developers to verify the correctness of their code, catch defects early, and prevent regressions. Angular, a popular front-end framework, provides a robust testing framework that allows developers to write unit tests for their code. In this article, we will explore how to set up Angular unit tests as a senior developer.

To start, let's explore the key aspects to consider when creating unit tests for frontend applications. As this is a post on my personal blog, I'll be sharing my opinions and best practices that I've developed and refined throughout my career.

## Initial Setup

The first step I make is to make sure my test is setup correctly, let's consider we have a file called `custom.component.ts` it means we should have a another related test file called `custom.component.spec.ts`.  After creating the file we should make share that the test is running perfectly. If you use the [Angular CLI](https://angular.io/cli/generate) to generate your components you probrably already have a setup using the default settings such as `TestBed.configureTestingModule`, `TestBed.createComponent` and a `describe` with a `it('should create')`. Once we have our test ready and running we can start with our next step: _Analizing what should be tested_.

## What should be tested?

Typically, in frontend applications, there exist intricate connections between various components such as logic, interfaces, user interactions, validations, navigation, and API calls. If we adhere to the principle that unit tests should examine every component in isolation, it implies that we should test each line of code in HTML, Typescript, and CSS. Nonetheless, this approach would lead to a difficult and arduous development and maintenance process due to the complexity and effort required to modify each individual piece of code whenever updates are made. The approach I like to use when developing frontend unit test is to always first look at the interface (HTML).

### Testing logic behaviors

Let's consider the following component as our test case for study in this article.

```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: '<button (click)="onClick()">{{label}}</button>',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() label: string;
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
```


As mentioned earlier, our priority is to test the interface behavior first. Therefore, in this scenario, we can test the following aspects:

- The `<button>` tag is displayed in the component.
- The `label` property is properly displayed inside the `<button>` tag.
- Upon clicking the `<button>` tag, it should emit the `clicked` event.

> 💡 Even though the `clicked` EventEmitter does not directly lead to any UI changes, it is the only behavior that this component reproduces. Therefore, we need to test it in this case.

### Testing interface behaviors

Let's assume that this component has a different behavior when the button is clicked, resulting in a UI change.

```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: '<button (click)="onClick()">{{wasClicked ? label : 'untouch'}}</button>',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() label: string;
  wasClicked: boolean;

  onClick() {
    this.wasClicked = true;
  }
}
```

Given the changes in the button behavior, our test cases should now include the following conditions:

- The `<button>` tag is displayed in the component. _(same)_
- The `label` property is properly displayed inside the `<button>` tag. _(same)_
- Upon clicking the `<button>` tag, it should display the text `untouch` inside itself.

> 💡 It's important to note that we are always testing the final result that reflects changes in our interface. This means that we are not testing any CSS, state values, or event emissions, but only directly testing HTML changes.

### Testing CSS styling behaviors

Assuming this component has a different behavior when the button is clicked, resulting in a CSS change, our test cases should include the following conditions:

- The `<button>` tag is displayed in the component. _(same)_
- The `label` property is properly displayed inside the `<button>` tag. _(same)_
- Upon clicking the `<button>` tag, it should change its background color to red.

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: '<button [style.background-color]="backgroundColor" (click)="onClick()">{{label}}</button>',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() label: string;
  backgroundColor: string = "white";

  onClick() {
    this.backgroundColor = "red";
  }
}
```
>💡 It's important to note that we are testing CSS behavior in this case, which means we are validating the styling of our component. While testing, we should ensure that the button changes its background color to red upon being clicked.

## Conclusion
To sum up, unit testing is crucial to modern software development. For frontend applications, we can test intricate connections between various components such as logic, interfaces, user interactions, validations, navigation, and API calls. However, our focus should be on testing the interface behavior first, then logic and CSS. We should ensure that the test cases we are using are minimal, easy to maintain, and have a high return on investment. By doing so, we can verify the correctness of our code, catch defects early, and prevent regressions.
