import { Component, Input } from '@angular/core';
import { WeatherItem } from './weatheritem';


@Component({
    selector: 'app-weatheritem',
    template: `
    <article class="weather-element">
    <div class="col-1">
      <h1>{{weatherItem.CityName}}</h1>
      <p class="info">{{weatherItem.descripton}}</p>
    </div>
    <div class="col-2">
  <span class="temprature">{{weatherItem.temprature}}°C</span>
    </div>
  </article>
    `,
    styleUrls: ['./weatheritem.component.css'],
})
export class WeatherItemComponent {
    @Input()
    'weatherItem: item';

    weatherItem: WeatherItem;
}
