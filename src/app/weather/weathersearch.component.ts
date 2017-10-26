import { FormGroup } from '@angular/forms';
import { Data } from '@angular/router';
import { Subject } from 'rxjs/Rx';
import { WeatherItemComponent } from './weatheritem.component';
import { Component, OnInit, Provider } from '@angular/core';
import { WeatherService } from './weather.service';
import { WeatherItem } from './weatheritem';


@Component({
    selector: 'app-weathersearch',
    template: `
    <section class="weathersearch">
    <form ngSubmit=onSubmit()>
       <label for="city">City</label>
       <input ngControl="location" type="text" id="city" (input)="onSearchLocation(input.value)' required #input>
       <button type="submit">addcity</button>
    </form>
    <div>
    <span class="info"> city found:</span> {{data.cityname}}
    </div>
    </section>
    `,
})
export class WheatherSearchComponent implements OnInit {

    private searchStream = new Subject<string>();
    data: any = {};
    constructor(private _weatherService: WeatherService) { }

    onSubmit(form: FormGroup) {
        const weatherItem = new WeatherItem(this.data.name, this.data.weatheritem[0].description, this.data.main.temprature);
        this._weatherService.addWeatherItem(weatherItem);
    }
 onSearchLocation(cityName: string) {
     this.searchStream
     .next(cityName);
 }
   ngOnInit() {
       // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
       // Add 'implements OnInit' to the class.
       this.searchStream
       .debounceTime(300)
       .distinctUntilChanged()
       .switchMap((input: string) => this._weatherService.searchweatherdata(input))
       .subscribe (
           data => this.data = data
       );

   }
}


