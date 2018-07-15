import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the SignupSucessPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
import {ProfileAvatarPage} from '../profile-avatar/profile-avatar';
import {pageSpeed} from '../../app/config/environment';

@Component({
  selector: 'page-signup-sucess',
  templateUrl: 'signup-sucess.html',
})
export class SignupSucessPage {
  header_data:any;
  constructor(
    public navCtrl: NavController,  
    public menu: MenuController, 
    public navParams: NavParams
  ){
  	this.header_data={ismenu:true,ishome:false,title:"Home"};
  }

  ionViewDidEnter() {
      this.menu.swipeEnable(false);
    	let el = this;
    	setTimeout(function(){
    		el.navCtrl.setRoot(ProfileAvatarPage,{}, {animate: true,animation:'transition',duration:pageSpeed,direction:'forward'});
    	},1500);
  }
}
