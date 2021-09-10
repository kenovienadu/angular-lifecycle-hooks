import { Component } from '@angular/core';

@Component({
  template: `
    <div class="font-semibold text-2xl mb-3">ngOnChanges</div>

    <section class="mt-10 border-t-2 torder-b-2 border-gray-100">
      <demo-two-component [slideIndex]="currentSlideIndex"></demo-two-component>
    </section>

    <div class="text-center space-x-2">
      <button
        class="bg-green-800 text-gray-50 py-2 px-6 rounded"
        (click)="prev()"
      >
        Prev
      </button>

      <button
        class="bg-green-800 text-gray-50 py-2 px-6 rounded"
        (click)="next()"
      >
        Next
      </button>
    </div>
  `,
})
export class DemoTwoView {
  currentSlideIndex = 0;

  next() {
    if (this.currentSlideIndex >= 4) {
      console.log('right end of slide');
      return;
    }

    this.currentSlideIndex = this.currentSlideIndex + 1;
  }

  prev() {
    if (this.currentSlideIndex === 0) {
      console.log('left end of slide');
      return;
    }

    this.currentSlideIndex = this.currentSlideIndex - 1;
  }
}
