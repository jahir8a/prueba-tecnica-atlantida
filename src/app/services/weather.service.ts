import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  local_resource = '../../assets/mock-data.json';

  constructor() { }

  async getWeahter(city: string){
    try{
      const result = await fetch(`${environment.base_url}/${city}`);
      return await result.json() as Weather;
    } catch(error: any){
      //if(error.name === 'AbortError'){//timeout handle
      const local_info = await fetch(`${this.local_resource}`);
      return (await local_info.json() as Weather[])[0];
      //}
    }
    
  }

  async getWeahterByLocation(latitude:number, longitude: number){
    try{
      const result = await fetch(`${environment.base_url}/${latitude},${longitude}`);
      return await result.json() as Weather;
    } catch(error:any){
      //if(error.name === 'AbortError'){
      const local_info = await fetch(`${this.local_resource}`);
      return (await local_info.json() as Weather[])[0];
      //}
    }
  }
}
