import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main
      class="h-screen flex bg-gray-900 justify-center pt-20 md:pt-56"
      *ngIf="showWelcomeScreen"
    >
      <div class="w-4/5 md:w-1/2 text-gray-50">
        <h3 class="text-2xl font-semibold mb-4">
          Getting started: Angular LifeCycle Hooks
        </h3>
        <div class="flex space-x-4 items-center">
          <img
            class="w-12 h-12 rounded-full object-cover border border-gray-50"
            src="https://res.cloudinary.com/dk07kf3yl/image/upload/v1630491900/ken-ovienadu-portfolio/IMG_0524_hdj6jh.jpg"
            alt="image of ken ovienadu"
          />

          <div>
            <span>Ken Ovienadu</span>
          </div>
        </div>

        <p class="opacity-50 mt-4">
          Hi, in this short lecture, we would go over the basics of Angular
          Lifecycle hooks and how to utilize them to build our web applications.
        </p>

        <div class="mt-10">
          <button
            (click)="handleHideWelcomeScreen()"
            class="bg-green-800 px-4 py-2 text-sm font-medium rounded text-gray-50"
          >
            Let's Begin
          </button>
        </div>
      </div>
    </main>

    <main class="h-screen md:flex bg-gray-900" *ngIf="!showWelcomeScreen">
      <navbar class="w-56 flex-none h-screen"></navbar>

      <section class="flex-auto bg-gray-50 p-4">
        <header
          class="md:flex pb-3 justify-between header border border-r-0 border-l-0 border-t-0 border-b-1"
        >
          <div class="font-semibold text-2xl">Angular LifeCycle Hooks</div>

          <div class="space-x-4">
            <a href="https://kenovienadu.me" target="_blank" class="opacity-50"
              >Ken Ovienadu</a
            >
            <!-- <a href="https://github.com/kenovienadu/angular-lifecycle-hooks">
              <i class="fab fa-github"></i>
            </a> -->
          </div>
        </header>

        <div class="text-right">
          <a
            class="opacity-50 text-xs"
            href="https://github.com/kenovienadu/angular-lifecycle-hooks"
            target="_blank"
          >
            View On Github
            <i class="fab fa-github ml-1"></i>
          </a>
        </div>

        <br />

        <router-outlet></router-outlet>
      </section>
    </main>

    <style>
      section {
        min-height: 50vh;
      }
    </style>
  `,
})
export class AppComponent {
  showWelcomeScreen = true;

  constructor() {
    const hasSeenWelcomeScreen = sessionStorage.getItem('seenWelcomeScreen');
    this.showWelcomeScreen = hasSeenWelcomeScreen ? false : true;
  }

  handleHideWelcomeScreen() {
    this.showWelcomeScreen = !this.showWelcomeScreen;
    sessionStorage.setItem('seenWelcomeScreen', 'true');
  }
}
