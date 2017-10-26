import { Component, Directive } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `
  <header>
  <h1> Angular 2 WeatherApp</h1>
  </header>
  <app-weatherlist></app-weatherlist>
  <app-weathersearch></app-weathersearch>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
}
