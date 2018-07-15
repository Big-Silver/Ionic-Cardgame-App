import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GameOverPage } from '../game-over/game-over';
import { InAppBrowser,InAppBrowserObject } from '@ionic-native/in-app-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { clickSoundProvider } from '../../providers/click';
import { StatusBar } from '@ionic-native/status-bar';
 
@Component({
	selector: 'page-game-webview',
	templateUrl: 'game-webview.html',
})
export class GameWebviewPage {

	@ViewChild('iframe') iframe : ElementRef; 

	private gameUrl : any = false;
	private iframeElement : HTMLIFrameElement;
	private oldMetaString = '';

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private browser : InAppBrowser,
		private santizer : DomSanitizer,
		private orientation : ScreenOrientation,
		private soundProvider : clickSoundProvider,
		private statusbar : StatusBar
	) {
		this.gameUrl = this.navParams.data.gameUrl;
	}

	
	gameOver(){
		this.navCtrl.push(GameOverPage, this.navParams.data);
	}

	ionViewDidEnter(){
		this.orientation.lock(this.orientation.ORIENTATIONS.PORTRAIT);
		let metaTag : HTMLMetaElement = document.getElementById('metaViewport') as HTMLMetaElement;
		this.oldMetaString = metaTag.getAttribute('content')

		
		if(this.navParams.data && this.navParams.data.orientation && this.navParams.data.orientation == 'landscape'){
			this.orientation.lock(this.orientation.ORIENTATIONS.LANDSCAPE);
			metaTag.setAttribute('content','viewport-fit=cover, width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=3.0, user-scalable=no');
		}

		

	}

	ionViewDidLoad(){

		if(!this.gameUrl)
			return;

		this.soundProvider.stopHomeScreenSound();
		let instance : InAppBrowserObject = this.browser.create(this.gameUrl, '_blank',{
			clearcache : "yes",
			clearsessioncache : "yes",
			location : "no",
			// toolbar : 'no'
		});
		instance.show();
		
		this.statusbar.hide();		

	}

	ionViewWillLeave(){
		this.orientation.lock(this.orientation.ORIENTATIONS.PORTRAIT);
		let metaTag : HTMLMetaElement = document.getElementById('metaViewport') as HTMLMetaElement;
		metaTag.setAttribute('content',this.oldMetaString);
	}

}
