import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather';
import { LocationService } from 'src/app/services/location.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'clima-app';

  data: Weather = {};
  name: string = '';

  constructor(private weatherService: WeatherService,
    private locationService: LocationService)
   { }

  ngOnInit(): void {
    
  }

  async weatherByName(){
    this.data = await this.weatherService.getWeahter(this.name) as Weather;
    console.log(this.data);
  }

  async weatherByPosition(){
    const position = await this.locationService.requestPermission();
    if(position){
      this.data = await this.weatherService.getWeahterByLocation(position.latitude,position.longitude) as Weather;
    }
  }

}
