import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input [(ngModel)]="name" />
    Hello {{ name }}
    <div>Data String: {{ dataString }}</div>
    <div>{{ data | json }}</div>
  `,
  styles: []
})
export class AppComponent {
  @Input() dataString = '';
  @Input() data = { hi: 'hello' };
  name = 'World';
}
