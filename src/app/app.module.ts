import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeatherItemComponent } from './weather/weatheritem.component';
import { WeatherListComponent } from './weather/weatherlist.component';
import { WeatherItem } from './weather/weatheritem';
import { WeatherService } from './weather/weather.service';
import { ProfileService } from './profile.service';


@NgModule({
  declarations: [
    AppComponent, WeatherItemComponent, WeatherListComponent, WeatherItem,
  ],
  imports: [
    BrowserModule, FormGroup
  ],
  providers: [WeatherService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
