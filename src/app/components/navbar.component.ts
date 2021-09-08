import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  template: `
    <nav class="flex flex-col space-y-4">
      <a routerLink="/">Introduction</a>
      <a routerLink="/ngonchanges">ngOnChanges</a>
      <a routerLink="/ngoninit">ngOnInit</a>
      <a>ngOnDestroy</a>
    </nav>

    <nav class="flex flex-col space-y-4">
      <a class="mx-2">ngAfterContentInit</a>
      <a class="mx-2">ngAfterContentChecked</a>
      <a class="mx-2">ngAfterViewInit</a>
      <a class="mx-2">ngAfterViewChecked</a>
    </nav>

    <style>
      nav {
        padding: 1em;
      }

      a {
        background-color: #596a4e99;
        padding: 0.5em 1em;
        display: block;
        border-radius: 4px;
        color: #f1f1f1;
        font-size: 0.9em;
        cursor: pointer;
      }

      a.mx-2 {
        padding: 0.5em;
        background-color: #865f2d;
      }
    </style>
  `,
})
export class NavbarComponent {}
