import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { GameAdvertisePage } from '../game-advertise/game-advertise';

declare var window : Window;

@Component({
	selector: 'page-game-over',
	templateUrl: 'game-over.html',
})
export class GameOverPage {

	private balance: any = {
		balance1 : 7,
		balance2 : 22,
		balance3 : 40
	};

	private timeoutEvent = null;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.timeoutEvent = setTimeout(()=>{
			this.goToAdvertisePage();
		},3200);
	}

	goToAdvertisePage(){
		this.navCtrl.push(GameAdvertisePage,this.navParams.data)
			.then(()=>{

				let GameComponent = this.getGameComponent();

				if(GameComponent == null)
					return;

				let startIndex = GameComponent.index + 1;
				let endIndex = this.navCtrl.getActive().index;
				let count = endIndex - startIndex;

				this.navCtrl.remove(startIndex, count);

			});
	}

	skipAdvertisePage(){

		window.clearTimeout(this.timeoutEvent);

		let GameComponent = this.getGameComponent();

		if(GameComponent != null)
			return this.navCtrl.popTo(GameComponent,{direction:'forward'});

		this.navCtrl.pop({direction:'forward'});
		
	}

	private getGameComponent(): ViewController{

		let index = -1;
		let views = this.navCtrl.getViews();

		views.forEach((el, i) => {
			if(
				el.component && (el.component.name == 'ArcadeGamePage' 
				|| el.component.name == 'ReplayGamePage' 
				|| el.component.name == 'InstantwinGamePage' 
				|| el.component.name == 'Head2headGamePage' )) 
				index = i;
		});

		if(index != -1)
			return views[index];

		return null;

	}

	ionViewDidLoad() {
		
	}

}