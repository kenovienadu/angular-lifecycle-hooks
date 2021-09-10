import { Component } from '@angular/core';
import { IUser } from '../interfaces/user.interface';

@Component({
  template: `
    <div class="font-semibold text-2xl mb-3 ml-12">ngDoCheck</div>

    <div class="flex items-center gap-12 mt-8 ml-12">
      <div class="w-1/3">
        <label>First Name</label>
        <input type="text" [(ngModel)]="user.firstName" />

        <label>Last Name</label>
        <input type="text" [(ngModel)]="user.lastName" />

        <label>Email</label>
        <input type="text" [(ngModel)]="user.email" />
      </div>

      <div class="w-1/2">
        <demo-three-component [user]="user"></demo-three-component>
      </div>
    </div>

    <style>
      label,
      input {
        display: block;
        width: 100%;
        margin-bottom: 0.5em;
      }

      input {
        padding: 0.5em;
        height: 40px;
        margin-bottom: 1em;
        border: 1px solid grey;
        border-radius: 4px;
      }
    </style>
  `,
})
export class DemoThreeView {
  user: IUser = {
    firstName: 'john',
    lastName: 'doe',
    email: 'johndoe@gmail.com',
  };
}
