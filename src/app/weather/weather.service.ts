import { throws } from 'assert';
import { Injectable } from '@angular/core';
import { WEATHER_ITEMS } from './weather.data';
import { WeatherItem } from './weatheritem';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class WeatherService {
    weatherItem: WeatherItem[];

    constructor(private _http: Http) {}

    getweatheritems() {
        return (WEATHER_ITEMS);
    }

    addWeatherItem( weatheritem: WeatherItem) {
      WEATHER_ITEMS.push(weatheritem);
    }

    clearWeatherItem() {
        WEATHER_ITEMS.splice(0);
    }

    searchweatherdata(cityname: string): Observable<any> {
        return this._http.get('http://api.openweathermap.org/data/2.5/weather?q= ' + cityname + '&APPID=KEY&Units=metric')


        .map(response => response.json() )
        .catch(error => {
            console.error(error);
            return Observable.throw(error.json());
        });
    }
}
