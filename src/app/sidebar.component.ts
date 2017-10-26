import { WeatherItem } from './weather/weatheritem';
import { OnInit } from '@angular/core';
import { Profile } from './profile';
import { Component } from '@Angular/core';
import { ProfileService } from './profile.service';
import { WeatherService } from './weather/weather.service';


@Component({
    selector: 'app-sidebar',
    template: `
    <h1> Saved Profile</h3>
    <button (click)="onSaveNew()">Save List to profile</button>
    <article class="profile" *ngFor="#profile of profies" (click)="onLoadProfile(profile)">
    <h4>{{profile.profileName}}</h4>
    <p> {{cities: profile.cities.join(', ')}}</p>
    <span class="delete" (click)="onDeleteProfile($event, profile)">X</span>
    </article>
    `,
})
export class SidebarComponent implements OnInit {
    profile: Profile[];
    cities: string;

    constructor(private _profileService: ProfileService, private _weatherService: WeatherService) { }

    onSaveNew() {
        const Cities = this._weatherService.getweatheritems().map(function (element: WeatherItem) {
            return element.CityName;
        });
    }

    onLoadProfile(profile: Profile) {
        this._weatherService.clearWeatherItem();
        for (let i = 0; i < profile.cities.length; i++) {
            this._weatherService.searchweatherdata(profile.cities[i])
                .retry()
                .subscribe(
                data => {
                    const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
                    this._weatherService.addWeatherItem(weatherItem);
                }
                );
        }

    }
    onDeleteProfile(event: Event, profile: Profile) {
        event.stopPropagation();
        this._profileService.deleteProile(profile);
    }

    ngOnInit() {
        this.profile = this._profileService.getProfiles();
    }


}