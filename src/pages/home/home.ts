import { Component, ViewChild, ChangeDetectorRef, ElementRef } from '@angular/core';
import { NavController, NavParams, Slides, MenuController } from 'ionic-angular';

//import { VideoPlayer } from '@ionic-native/video-player';
//import { SignupPage } from '../signup/signup';
//import { LoginPage } from '../login/login';
import { ArcadeGamePage } from '../arcade-game/arcade-game';
import { ArcadeGameSettingsPage } from '../arcade-game-settings/arcade-game-settings';
import { ArcadeGameWinnersPage } from '../arcade-game-winners/arcade-game-winners';
import { gameHomePage } from '../game-home/game-home';

/**
 * @description The controller is handling video and text inside slider 
 * @description all video from the remote location and must be alloed with cross domain features
 * @Author: Raj
 * @Created: 21-07-2017
 * @modifued: 21-07-2017
 */
import { pageSpeed } from '../../app/config/environment';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
})

export class HomePage {
	@ViewChild(Slides) homeSlider: Slides;
	@ViewChild('video') video: ElementRef;


	public currentSlide: number;

	constructor(public navCtrl: NavController, public menu: MenuController, public navParams: NavParams, private changeDetector : ChangeDetectorRef) {
		this.currentSlide = 0;
		//this.isMuteOn = false;
	}

	//Slider options
	ngAfterViewInit() {
		this.homeSlider.lockSwipes(true);
	}

	slideWillChange() {
		this.homeSlider.lockSwipes(true);
	}
	
	ionViewDidLoad() {
		this.menu.swipeEnable(false);
	}

	doPause() {
		let video: any = document.getElementById("vid_slide_1");
		video.pause();
	}

	doPlay() {
		let video: any = document.getElementById("vid_slide_1");
		video.play();
	}

	slideChanged(slideTo, flag) {
		this.homeSlider.lockSwipes(false);
		//this.homeSlider.lockSwipeToNext(false);
		switch (slideTo) {
			case "register":
				this.currentSlide = 1;
				this.doPause();
				break;

			case "login":
				this.currentSlide = 2;
				this.doPause();
				break;

			case "reset-password":
				this.currentSlide = 3;
				this.doPause();
				break;

			default:
				this.currentSlide = 0;
				break;
		}
		let pSpeed = (flag && flag == true) ? pageSpeed : 0;
		this.homeSlider.slideTo(this.currentSlide, pSpeed);
	}

	goToArcadePage(){
		// this.navCtrl.swipeBackEnabled = false;
		// this.navCtrl.setRoot(gameHomePage);
		// this.navCtrl.setRoot(ArcadeGamePage);
	}

	goToArcadeSettingPage(){
		this.navCtrl.swipeBackEnabled = false;
		//this.navCtrl.setRoot(ArcadeGameSettingsPage);
		this.navCtrl.push(ArcadeGameSettingsPage)
	}

	goToArcadeWinPage(){
		this.navCtrl.swipeBackEnabled = false;
		//this.navCtrl.setRoot(ArcadeGameWinnersPage);
		this.navCtrl.push(ArcadeGameWinnersPage)
	}

}
