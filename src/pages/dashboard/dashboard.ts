import { Component, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { NavController, NavParams, Menu, MenuController, Content, ModalController, Events } from 'ionic-angular';
import { gameHomePage } from '../game-home/game-home';
import { PlayerProfilePage } from '../player-profile/player-profile';
import { Subscription } from 'rxjs/Subscription';
import { } from 'ionic';

@Component({
	selector: 'page-dashboard',
	templateUrl: 'dashboard.html',
})
export class dashboardPage implements OnDestroy, AfterViewInit {

	@ViewChild('menu') menu : Menu;
	@ViewChild('menuContent') menuContent : Content;

	private rootPage = gameHomePage;
	private menuEventSubscription : Subscription;
	private showSideMenu = true;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private modal : ModalController,
		private event : Events
	) {
		
	}

	setMenuHandler(){
		this.menuEventSubscription = this.menu.ionClose.subscribe(()=>{
			this.showSideMenu = false;
			setTimeout(()=>{this.showSideMenu = true;},200);
		});
	}

	ngOnDestroy(){
		this.menuEventSubscription.unsubscribe();
	}

	ngAfterViewInit(){
		this.setMenuHandler();

		this.menu.ionOpen.subscribe(()=>{
			this.event.publish('global:menu_open');
		});
		this.menu.ionClose.subscribe(()=>{
			this.event.publish('global:menu_close');
		});

	}

	openPlayerProfile(){
		let modal = this.modal.create(PlayerProfilePage);
		modal.present({
			animate : false
		});
	}



}
