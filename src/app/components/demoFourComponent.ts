import { Component, Input } from '@angular/core';

@Component({
  selector: 'demo-four-component',
  template: `
    <div class="bg-white capitalize border p-3 mb-4">
      {{ country }}
    </div>
  `,
})
export class DemoFourComponent {
  @Input() country!: string;

  id = Math.floor(Math.random() * 1000);

  ngOnChanges() {
    console.log('child onChanges ran', this.id);
  }

  ngOnInit() {
    console.log('child component initialized', this.id);
  }

  ngAfterViewChecked() {
    console.log('child view checked', this.id);
  }
}
