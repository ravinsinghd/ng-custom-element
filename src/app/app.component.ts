import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input [(ngModel)]="name" />
    Hello {{ name }}
  `,
  styles: []
})
export class AppComponent {
  name = 'World';
}
