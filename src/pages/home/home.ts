import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';

import wandxApi from '../../../node_modules/wandx-api/index';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  countries: any;
  errorMessage: string;

  constructor(public navCtrl: NavController, public rest: RestProvider) {

  }

  ionViewDidLoad() {
    this.getCountries();
    console.dir(wandxApi);
    var tradeHistory = wandxApi.tradeHistory;
    var init = wandxApi.init;
    init.setToken("xyz");
    tradeHistory.getHourlyTradeHistory("GNT");
  }

  getCountries() {
    this.rest.getCountries()
       .subscribe(
         countries => this.countries = countries,
         error =>  this.errorMessage = <any>error);
  }


}
