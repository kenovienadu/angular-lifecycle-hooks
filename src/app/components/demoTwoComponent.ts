import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'demo-two-component',
  template: `
    <section class="md:w-3/5 mx-auto my-4">
      <p class="text-center mb-2">{{ slideIndex + 1 }} / {{ images.length }}</p>

      <img class="w-full rounded" [src]="imageSrc" alt="" />

      <div class="text-center my-2">
        <button
          class="text-xs p-2 rounded bg-gray-100"
          (click)="shuffleImages()"
        >
          Shuffle Images
        </button>
      </div>
    </section>

    <style>
      img {
        height: 420px;
        object-fit: cover;
      }
    </style>
  `,
})
export class DemoTwoComponent implements OnChanges, OnInit, DoCheck {
  @Input() slideIndex!: number;

  get imageSrc() {
    return this.images[this.slideIndex];
  }

  images = [
    'https://images.pexels.com/photos/5968231/pexels-photo-5968231.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/5638268/pexels-photo-5638268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/4409250/pexels-photo-4409250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/6287527/pexels-photo-6287527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ];

  ngOnInit() {
    console.log('onInit ran');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('onChanges Ran');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('change detection running');
  }

  shuffleImages() {
    // These changes will be detected by ngDoCheck but not ngOnChanges
    this.images = this.images.sort((a, b) => (Math.random() > 0.5 ? 1 : -1));
  }
}
