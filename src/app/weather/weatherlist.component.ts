import { Component, OnInit } from '@angular/core';
import { WeatherItemComponent } from './weatheritem.component';
import { WeatherItem } from './weatheritem';
import { WeatherService } from './weather.service';

@Component({
    selector: 'app-weatherlist',
    template: `
     <section class='weatherlist'>
     <app-weatheritem **ngFor="weatheritem of WeatherItem" [item]="weatherItem"></app-weatheritem>
     </section>
     `,
})

export class WeatherListComponent implements OnInit {
  weatherItem: WeatherItem[];

    constructor( private _weatherService: WeatherService) {}

    ngOnInit(): any {
    this.weatherItem = this._weatherService.getweatheritems();
    }
}
