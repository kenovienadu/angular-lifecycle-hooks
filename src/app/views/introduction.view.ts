import { Component } from '@angular/core';

@Component({
  template: `
    <div class="wrapper mx-auto w-2/3 pt-10">
      <section class="space-y-4 slide" *ngIf="currentPage === 1">
        <p class="font-semibold text-2xl">What is Angular</p>
        <p>
          Angular is a TypeScript-based free and open-source web application
          framework led by the Angular Team at Google and by a community of
          individuals and corporations.
        </p>

        <p>Angular is not AngularJS.</p>
      </section>

      <section class="space-y-4 slide" *ngIf="currentPage === 2">
        <p class="font-semibold text-2xl">Available Hooks</p>

        <p>
          Angular lifecycle Hooks allow us to interact with our components as
          they go through the various phases in their lifecycle.
        </p>

        <p>
          The available hooks are grouped into two: <span>Regular</span> and
          Parent Hooks
        </p>
      </section>

      <section class="space-y-4 slide" *ngIf="currentPage === 3">
        <p class="font-semibold text-2xl">Regular Hooks</p>

        <p>These apply to all components registered in the application.</p>

        <p>
          They are:
          <span class="font-semibold">OnInit</span>,
          <span class="font-semibold">OnChanges</span>,
          <span class="font-semibold">DoCheck</span>,
          <span class="font-semibold">OnDestroy</span>
        </p>
      </section>

      <section class="space-y-4 slide" *ngIf="currentPage === 4">
        <p class="font-semibold text-2xl">Parent Hooks</p>

        <p>These apply to parent components.</p>

        <p>
          They are:
          <span class="font-semibold">AfterContentInit</span>,
          <span class="font-semibold">AfterContentChecked</span>,
          <span class="font-semibold">AfterViewInit</span>,
          <span class="font-semibold">AfterViewChecked</span>
        </p>
      </section>

      <section class="space-y-4 slide" *ngIf="currentPage === 5">
        <p class="font-semibold text-2xl">Constructor</p>

        <p>
          The constructor method is a special method of a class for creating and
          initializing an object of that class. This function is called when the
          class is instantiated using the "new" keyword.
        </p>

        <img class="rounded-md" src="assets/images/constructor-1.png" alt="" />

        <p class="pt-4">
          Angular relies a lot on dependency injection and the constructor is
          the place to inject those dependencies. Under the hood, Angular uses a
          single instance of the class across the application.
        </p>

        <img class="rounded-md" src="assets/images/constructor-2.png" alt="" />
      </section>

      <!-- SLIDES END HERE -->

      <section class="flex justify-between items-center mt-4">
        <span class="opacity-20 text-xs"
          >{{ currentPage }} / {{ numberOfPages }}</span
        >
        <div>
          <button
            class="text-yellow-800 py-2 px-4 rounded text-sm"
            (click)="prev()"
            [hidden]="currentPage === 1"
          >
            Prev
          </button>
          <button
            (click)="next()"
            class="bg-yellow-700 py-2 px-4 rounded text-sm text-gray-50 ml-4"
          >
            Next
          </button>
        </div>
      </section>
    </div>

    <style>
      .slide {
        min-height: 400px;
        max-height: 600px;
        overflow-y: scroll;
      }
    </style>
  `,
})
export class IntroductionView {
  numberOfPages = 5;
  currentPage = 1;

  constructor() {
    const pageInMemory = sessionStorage.getItem('currentPage');

    if (!pageInMemory) {
      this.currentPage = 1;
      return;
    }

    this.currentPage = parseInt(pageInMemory);
  }

  next() {
    if (this.currentPage === this.numberOfPages) {
      return;
    }

    this.currentPage = this.currentPage + 1;
    sessionStorage.setItem('currentPage', JSON.stringify(this.currentPage));
  }

  prev() {
    if (this.currentPage === 1) {
      return;
    }

    this.currentPage = this.currentPage - 1;
    sessionStorage.setItem('currentPage', JSON.stringify(this.currentPage));
  }
}
