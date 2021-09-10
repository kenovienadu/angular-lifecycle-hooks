import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IUser } from '../interfaces/user.interface';

@Component({
  selector: 'demo-three-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="mb-4">
      <span class="uppercase w-1/3 inline-block">First Name</span>
      <span class="font-semibold">{{ user.firstName }}</span>
    </div>

    <div class="mb-4">
      <span class="uppercase w-1/3 inline-block">Last Name</span>
      <span class="font-semibold">{{ user.lastName }}</span>
    </div>

    <div class="mb-4">
      <span class="uppercase w-1/3 inline-block">Email</span>
      <span class="font-semibold">{{ user.email }}</span>
    </div>
  `,
})
export class DemoThreeComponent implements OnChanges, OnInit, DoCheck {
  @Input() user!: IUser;

  constructor(private changeDetectionRef: ChangeDetectorRef) {}

  ngOnInit() {
    console.log('onInit ran', this.user);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('onChanges Ran');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('change detection running');
    this.changeDetectionRef.detectChanges();
  }
}
