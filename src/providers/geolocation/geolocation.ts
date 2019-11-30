import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GeolocationProvider {
  // url: string = "http://localhost:8000/api/";
  url: string = "http://jondev.website/api/";
  
  constructor(public http: HttpClient) {

   
  }
  addGeolocation(data: any) {
    return this.http.post(this.url + 'geolocation', data);
  }
}
