import { Component, OnDestroy, OnInit } from '@angular/core';
import { logTimeAtIntervals } from '../utilities';

@Component({
  selector: 'demo-one-component',
  template: ` <div>Hello, the time is {{ currentTime }}</div> `,
})
export class DemoOneComponent implements OnInit, OnDestroy {
  currentTime: string;
  interval: any;

  constructor() {
    this.currentTime = new Date().toTimeString();
  }

  ngOnInit() {
    console.log('ngOnInit called after constructor');
    this.interval = logTimeAtIntervals();
  }

  ngOnDestroy() {
    console.log('onDestroy called');
    clearInterval(this.interval);
  }
}
