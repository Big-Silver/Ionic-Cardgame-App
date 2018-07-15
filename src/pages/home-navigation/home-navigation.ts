

import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NewHomePage  } from '../new-home/new-home';
import { clickSoundProvider } from '../../providers/click';


@Component({
	selector: 'page-home-navigation',
	templateUrl: 'home-navigation.html',
	providers : [
		clickSoundProvider
	]
})
export class HomeNavigationPage {

	@ViewChild('nav') nav : NavController ;

	private rootPage = NewHomePage;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private soundProvider : clickSoundProvider
	) {

		// let images = [
		// "./assets/images/game-mode-icons/instant_win.png",
		// "./assets/images/game-mode-icons/instant_win.png",
		// "./assets/images/game-mode-icons/contest.png",
		// "./assets/images/home/lock.png",
		// "./assets/images/home/small-games/skullsland.png",
		// "./assets/images/home/small-games/smashyblockz.png",
		// "./assets/images/home/small-games/wordhunt.png",
		// "./assets/images/home/big-games/cheezywords.png",
		// "./assets/images/home/big-games/merji.png",
		// "./assets/images/home/big-games/skullsland.png",
		// "./assets/images/home/big-games/smashyblockz.png",
		// "./assets/images/home/big-games/wordhunt.png",
		// "./assets/images/home/small-games/lifes_a_beach.png",
		// "./assets/images/home/small-games/neon_spin.png",
		// "./assets/images/home/small-games/megaspin.png",
		// "./assets/images/home/small-games/pop_slot.png",
		// "./assets/images/home/slider_image_3.png",
		// "./assets/images/home/slider_image_2.png",
		// "./assets/images/profile/avatar45.svg",
		// "./assets/images/profile/avatar44.svg",
		// "./assets/images/profile/avatar43.svg",
		// "./assets/images/profile/avatar42.svg",
		// "./assets/images/profile/avatar41.svg",
		// "./assets/images/profile/avatar40.svg",
		// "./assets/images/profile/avatar39.svg",
		// "./assets/images/profile/avatar38.svg",
		// "./assets/images/profile/avatar37.svg",
		// "./assets/images/profile/avatar36.svg",
		// "./assets/images/profile/avatar35.svg",
		// "./assets/images/profile/avatar34.svg",
		// "./assets/images/profile/avatar33.svg",
		// "./assets/images/profile/avatar32.svg",
		// "./assets/images/profile/avatar31.svg",
		// "./assets/images/profile/avatar30.svg",
		// "./assets/images/profile/avatar29.svg",
		// "./assets/images/profile/avatar28.svg",
		// "./assets/images/profile/avatar27.svg",
		// "./assets/images/profile/avatar26.svg",
		// "./assets/images/profile/avatar25.svg",
		// "./assets/images/profile/avatar24.svg",
		// "./assets/images/profile/avatar23.svg",
		// "./assets/images/profile/avatar22.svg",
		// "./assets/images/profile/avatar21.svg",
		// "./assets/images/profile/avatar20.svg",
		// "./assets/images/profile/avatar19.svg",
		// "./assets/images/profile/avatar18.svg",
		// "./assets/images/profile/avatar17.svg",
		// "./assets/images/profile/avatar16.svg",
		// "./assets/images/profile/avatar15.svg",
		// "./assets/images/profile/avatar14.svg",
		// "./assets/images/profile/avatar13.svg",
		// "./assets/images/profile/avatar12.svg",
		// "./assets/images/profile/avatar11.svg",
		// "./assets/images/profile/avatar10.svg",
		// "./assets/images/profile/avatar9.svg",
		// "./assets/images/profile/avatar8.svg",
		// "./assets/images/profile/avatar7.svg",
		// "./assets/images/profile/avatar6.svg",
		// "./assets/images/profile/avatar5.svg",
		// "./assets/images/profile/avatar4.svg",
		// "./assets/images/profile/avatar3.svg",
		// "./assets/images/profile/avatar2.svg",
		// "./assets/images/player-profile/mystry-box.png",
		// "./assets/images/game-mode-icons/head2head.png",
		// "./assets/images/home/icons/money.png",
		// "./assets/images/arcade/token-red.png",
		// "./assets/images/game-mode-icons/arcade.png",
		// "./assets/images/arcade/dart-icon.png",
		// "./assets/images/arcade/token-yellow.png",
		// "./assets/images/home/icons/clock.png",
		// "./assets/images/game-mode-icons/replay.png",
		// "./assets/images/arcade/token-blue.png",
		// "./assets/images/home/small-games/merji.png",
		// "./assets/images/home/big-games/candystreak.png",
		// "./assets/images/home/small-games/candystreak.png",
		// "./assets/images/home/small-games/angryvegan.png",
		// "./assets/images/home/big-games/angryvegan.png",
		// "./assets/images/home/small-games/cheezywords.png",
		// "./assets/images/player-profile/calendar.png",
		// "./assets/images/store/blue_dot.png",
		// "./assets/images/store/red_dot.png",
		// "./assets/images/store/purple_dot.png",
		// "./assets/images/store/background.png",
		// "./assets/images/flag/gb.svg",
		// "./assets/images/profile/avatar1.svg",
		// "./assets/images/dashboard/snapchat.png",
		// "./assets/images/dashboard/instagram.png",
		// "./assets/images/home/slider_image_4.png",
		// "./assets/images/home/slider_image_1.png",
		// "./assets/images/home/mission.png",
		// "./assets/images/arcade/store-icon.png",
		// "./assets/images/dashboard/twitter.png",
		// "./assets/images/dashboard/facebook.png",
		// "./assets/images/dashboard/mail.png",
		// "./assets/images/dashboard/golden-coins-two.png",
		// "./assets/images/dashboard/golden-coins-one.png",
		// "./assets/images/dashboard/coin.png",
		// "./assets/images/dashboard/store.png",
		// "./assets/images/player-profile/fighter.png",
		// "./assets/images/player-profile/fame.png",
		// "./assets/images/home/background.png",
		// 'assets/images/store/background.png',
		// 'assets/images/store/purple_dot.png',
		// 'assets/images/store/red_dot.png',
		// 'assets/images/store/blue_dot.png',
		// 'assets/images/player-profile/calendar.png',
		// 'assets/images/loading_layer_1.png',
		// 'assets/images/loading_layer_2.png',
		// 'assets/images/player-profile/mystry-box.png'];


		// var cacheHolder = document.getElementById('cacheHolder');

		// for(let i =0 ; i < images.length ; i++){
		// 	let image = new Image();
		// 	image.src = images[i];
		// 	cacheHolder.appendChild(image);
		// }


	}

	ionViewDidEnter(){
	}

	ionViewWillEnter(){
		
	}

}
