import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  template: `
    <div class="font-semibold text-2xl mb-3">ngOnInit and ngOnDestroy</div>

    <button
      class="bg-green-800 text-gray-50 p-2 rounded"
      (click)="toggleShowComponent()"
    >
      {{ buttonText }}
    </button>

    <section class="mt-10 border-t-2 border-gray-100">
      <demo-one-component *ngIf="showComponent"></demo-one-component>
    </section>
  `,
})
export class DemoOneView {
  showComponent = false;

  get buttonText() {
    return this.showComponent ? 'Hide Component' : 'Show Component';
  }

  toggleShowComponent() {
    this.showComponent = !this.showComponent;
  }
}
