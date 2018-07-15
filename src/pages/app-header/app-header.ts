import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * @description TS file for the common header and application
 * @param	header data need to be send from the page where it is calling
 * @return complete partial view for required pages
 * @author Raj
 * @created on: 2 aug 2017
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 import { HomePage } from '../home/home';

@Component({
  selector: 'custom-app-header',
  templateUrl: 'app-header.html',
})
export class AppHeaderPage {
  
  header_data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }
  
  set header(header_data: any) {
    this.header_data=header_data;
  }
  
  get header() {
    return this.header_data;
  }
  
  homeClick() {
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    
  }

}
