import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-current-temperature',
  templateUrl: 'currentTemperature.html'
})
export class CurrentTemperaturePage {

  currentTemperature:number;
  remoteWeather:object;
  remoteWeatherTemp:number;

  constructor(public navCtrl: NavController, private http: HttpClient) {

    /*
    * This function will request the current temperature from the raspiPi
    * */
    this.http.get<number>("http://wetterrf.linkpc.net:80/currentTemperatur")
      .subscribe(data => {
        this.currentTemperature = data;
      });


    /*
    * Coordinaten Reinsfeld 49.673999, 6.874726
    * */
    this.http.get<any>(
      "http://samples.openweathermap.org/data/2.5/weather?lat=49.673999&lon=6.874726&APPID=563165ed109af8785d11dff768fc5425&units=metric",
      {
      headers: {
        // "Access-allow-origin": "*",
        // 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT'
      }
    })
      .subscribe(data => {
        this.remoteWeather = data;
        let test = data.main.temp;
        console.log(test);
        this.remoteWeatherTemp =  test;
      });


  }


}
