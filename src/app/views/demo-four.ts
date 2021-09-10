import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { DemoFourComponent } from '../components/demoFourComponent';
import { DemoThreeComponent } from '../components/demoThreeComponent';

@Component({
  template: `
    <section class="md:w-2/3 mx-auto">
      <div class="font-semibold text-2xl mb-3">
        ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit,
        ngAfterViewChecked
      </div>

      <button
        class="bg-green-800 text-gray-50 p-2 rounded"
        (click)="triggerChanges()"
      >
        Trigger Changes
      </button>

      <section class="mt-10 border-t-2 border-gray-100">
        <demo-four-component
          *ngFor="let country of countries"
          [country]="country"
        ></demo-four-component>
      </section>
    </section>
  `,
})
export class DemoFourView implements AfterViewInit, AfterViewChecked {
  // Reference to the List of Components
  @ViewChildren(DemoFourComponent) children!: QueryList<DemoFourComponent>;

  countries = ['nigeria', 'south africa'];

  triggerChanges() {
    this.countries = this.countries.sort((a, b) =>
      Math.random() > 0.5 ? 1 : -1
    );
  }

  ngOnChanges() {
    console.log('parent onChanges ran');
  }

  ngOnInit() {
    console.log('parent view initialized');
    console.log(this.children);
  }

  ngAfterViewChecked() {
    console.log('parent view checked');
    console.log(this.children);
  }

  ngAfterViewInit() {
    console.log('parent afterview initialized');
    console.log(this.children);
  }
}
