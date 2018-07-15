
import { Component, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Menu, NavController, NavParams, Slides, ModalController } from 'ionic-angular';

import { Subscription } from 'rxjs/Subscription';
import { ArcadeGameSettingsPage } from '../../pages/arcade-game-settings/arcade-game-settings';
import { WinnerPage } from '../../pages/winner/winner';
import { LeaderboardPage } from '../../pages/leaderboard/leaderboard';
import { FollowModelPage } from '../../pages/follow-model/follow-model';
import { InboxPage } from '../../pages/inbox/inbox';
import { AchievementsPage } from '../../pages/achievements/achievements'
import { DailyMissionPage } from '../../pages/daily-mission/daily-mission';
import { StorePage } from '../../pages/store/store';
 
@Component({
	selector: 'sidemenu, [sidemenu]',
	templateUrl: 'sidemenu.html'
})
export class SidemenuComponent implements OnDestroy {

	@Output() openPlayerProfile: EventEmitter<any> = new EventEmitter();

	private inputCode: String = "";
	private menuSubscription: Subscription;

	private playerInfo = {
		avatarImage : 'assets/images/profile/avatar1.svg',
		avatarCountryImage : 'assets/images/flag/gb.svg',
		name : 'Amari1268'
	};

	constructor(
		public navCtrl: NavController, 
		public menu: Menu, 
		public navParams: NavParams,
		private modal : ModalController
	) {

		this.menuSubscription = this.menu.ionClose.subscribe(() => {
			this.inputCode = "";
		});
	}
	ngOnDestroy() {
		this.menuSubscription.unsubscribe();
	}

	goToArcadeSettingPage() {
		this.navCtrl.push(ArcadeGameSettingsPage);
	}

	goToWinnersPage() {
		this.navCtrl.push(WinnerPage);
	}

	goToLeaderBoardPage(){
		this.navCtrl.push(LeaderboardPage);
	}

	goToFollowerPage(){
		this.navCtrl.push(FollowModelPage);
	}

	goToInboxPage(){
		this.navCtrl.push(InboxPage);
	}
	
	goToDailyMissionPage(){
		this.navCtrl.push(DailyMissionPage);
	}

	goToAchievementsPage(){
		this.navCtrl.push(AchievementsPage);
	}

	openStoreScreen(){
		this.navCtrl.push(StorePage);
	}

}
