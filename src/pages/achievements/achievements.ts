
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { dashboardPage } from '../dashboard/dashboard';

@Component({
	selector: 'page-achievements',
	templateUrl: 'achievements.html',
})
export class AchievementsPage {

	private gamesList = [];
	private activeGameMode = '';

	constructor(
		public navCtrl: NavController,
		public viewCtrl: ViewController,
		public navParams: NavParams
	) {
		this.gamesList = [
			{ name: "Cheesy Words", date: "20-05-17", wins: 2, level: 4, position: "80%", score: "7,365", image: "assets/images/home/small-games/cheezywords.png" },
			{ name: "Word Hunt", date: "20-05-17", wins: 3, level: 4, position: "20%", score: "4,985", image: "assets/images/home/small-games/wordhunt.png" },
			{ name: "Smashy Blockz", date: "20-05-17", wins: 3, level: 4, position: "60%", score: "2,587", image: "assets/images/home/small-games/smashyblockz.png" },
			{ name: "Merji", date: "20-05-17", wins: 3, level: 4, position: "30%", score: "6,857", image: "assets/images/home/small-games/merji.png" },
			{ name: "Angry Vegan", date: "20-05-17", wins: 3, level: 4, position: "70%", score: "9,170", image: "assets/images/home/small-games/angryvegan.png" },
			{ name: "Skull Island", date: "20-05-17", wins: 3, level: 4, position: "40%", score: "3,776", image: "assets/images/home/small-games/skullsland.png" },
			
			{ name: "Cheesy Words", date: "20-05-17", wins: 3, level: 4, position: "80%", score: "7,365", image: "assets/images/home/small-games/cheezywords.png" },
			{ name: "Word Hunt", date: "20-05-17", wins: 3, level: 4, position: "20%", score: "4,985", image: "assets/images/home/small-games/wordhunt.png" },
			{ name: "Smashy Blockz", date: "20-05-17", wins: 3, level: 4, position: "60%", score: "2,587", image: "assets/images/home/small-games/smashyblockz.png" },
			{ name: "Merji", date: "20-05-17", wins: 3, level: 4, position: "30%", score: "6,857", image: "assets/images/home/small-games/merji.png" },
			{ name: "Angry Vegan", date: "20-05-17", wins: 3, level: 4, position: "70%", score: "9,170", image: "assets/images/home/small-games/angryvegan.png" },
			{ name: "Skull Island", date: "20-05-17", wins: 3, level: 4, position: "40%", score: "3,776", image: "assets/images/home/small-games/skullsland.png" },
		];
	}

	ionViewDidLoad() {
	}

	goBack() {
		this.viewCtrl.dismiss();
	}

	changeActiveGameMode(data){
		this.activeGameMode = data;
	}

}
