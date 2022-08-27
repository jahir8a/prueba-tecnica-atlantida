import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {



  constructor() { }

  async requestPermission()
  {
    try {
      const position = await this.getPosition();
      console.log(position);
      const data = { latitude: position.coords.latitude, longitude: position.coords.longitude  }; //= position.coords;
      return data;
  } catch (err: any) {
      console.error(err.message);
      return null;
  }
    
  }

 private getPosition(): Promise<any> {
    return new Promise((resolve, reject) => 
        navigator.geolocation.getCurrentPosition(resolve, reject)
    );
  }

}
