import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { PlayerProfilePage } from '../player-profile/player-profile';

@Component({
	selector: 'page-follow-model',
	templateUrl: 'follow-model.html',
})
export class FollowModelPage {

	private activeTab = 'follow';

	private followPlayerHits =  [];
	private followPlayerRising =  [];
	private followPlayerTop =  [];
	private followingPlayerHits =  [];
	private followingPlayerAll =  [];
	private followersPlayerHits =  [];
	private followersPlayerAll =  [];

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private view : ViewController,
		private modal : ModalController
	) {
	}

	ionViewDidLoad() {
	}

	handleTabChange(e){
		this.activeTab = e;
	}

	ionViewDidEnter(){
		this.followPlayerHits =  [
			{image:'assets/images/profile/avatar1.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar2.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar3.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar4.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar5.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar6.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar7.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar8.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar9.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar10.svg',name:'Amari Jade',amount:'4.7k',online:true}
		];

		this.followPlayerRising =  [
			{image:'assets/images/profile/avatar11.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar12.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar13.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar14.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar15.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar16.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar17.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar18.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar19.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar20.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar21.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar22.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar23.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar24.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar25.svg',name:'Amari Jade',amount:'4.7k',online:true}
		];

		this.followPlayerTop =  [
			{image:'assets/images/profile/avatar26.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar27.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar28.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar29.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar30.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar31.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar32.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar33.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar34.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar35.svg',name:'Amari Jade',amount:'4.7k',online:true}
		];

		this.followingPlayerHits =  [
			{image:'assets/images/profile/avatar1.svg',name:'Amari Jade',amount:'4.7k',online:true, isFollowing:true},
			{image:'assets/images/profile/avatar38.svg',name:'Amari Jade',amount:'4.7k',online:true, isFollowing:true},
			{image:'assets/images/profile/avatar39.svg',name:'Amari Jade',amount:'4.7k',online:true, isFollowing:true},
			{image:'assets/images/profile/avatar40.svg',name:'Amari Jade',amount:'4.7k',online:true, isFollowing:true},
			{image:'assets/images/profile/avatar41.svg',name:'Amari Jade',amount:'4.7k',online:true, isFollowing:true},
			{image:'assets/images/profile/avatar42.svg',name:'Amari Jade',amount:'4.7k',online:true, isFollowing:true},
			{image:'assets/images/profile/avatar43.svg',name:'Amari Jade',amount:'4.7k',online:true, isFollowing:true},
			{image:'assets/images/profile/avatar1.svg',name:'Amari Jade',amount:'4.7k',online:true, isFollowing:true},
			{image:'assets/images/profile/avatar2.svg',name:'Amari Jade',amount:'4.7k',online:true, isFollowing:true},
			{image:'assets/images/profile/avatar3.svg',name:'Amari Jade',amount:'4.7k',online:true, isFollowing:true}
		];

		this.followingPlayerAll =  [
			{image:'assets/images/profile/avatar4.svg',name:'Amari Jade',amount:'4.7k',online:true, isFollowing:true},
			{image:'assets/images/profile/avatar5.svg',name:'Amari Jade',amount:'4.7k',online:true, isFollowing:true},
			{image:'assets/images/profile/avatar6.svg',name:'Amari Jade',amount:'4.7k',online:true, isFollowing:true},
			{image:'assets/images/profile/avatar7.svg',name:'Amari Jade',amount:'4.7k',online:true, isFollowing:true},
			{image:'assets/images/profile/avatar8.svg',name:'Amari Jade',amount:'4.7k',online:true, isFollowing:true},
			{image:'assets/images/profile/avatar9.svg',name:'Amari Jade',amount:'4.7k',online:true, isFollowing:true},
			{image:'assets/images/profile/avatar10.svg',name:'Amari Jade',amount:'4.7k',online:true, isFollowing:true},
			{image:'assets/images/profile/avatar11.svg',name:'Amari Jade',amount:'4.7k',online:true, isFollowing:true},
			{image:'assets/images/profile/avatar12.svg',name:'Amari Jade',amount:'4.7k',online:true, isFollowing:true},
			{image:'assets/images/profile/avatar13.svg',name:'Amari Jade',amount:'4.7k',online:true, isFollowing:true},
			{image:'assets/images/profile/avatar14.svg',name:'Amari Jade',amount:'4.7k',online:true, isFollowing:true},
			{image:'assets/images/profile/avatar15.svg',name:'Amari Jade',amount:'4.7k',online:true, isFollowing:true},
			{image:'assets/images/profile/avatar16.svg',name:'Amari Jade',amount:'4.7k',online:true, isFollowing:true},
			{image:'assets/images/profile/avatar17.svg',name:'Amari Jade',amount:'4.7k',online:true, isFollowing:true},
			{image:'assets/images/profile/avatar18.svg',name:'Amari Jade',amount:'4.7k',online:true, isFollowing:true}
		];

		this.followersPlayerHits =  [
			{image:'assets/images/profile/avatar25.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar26.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar27.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar28.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar29.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar30.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar31.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar32.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar33.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar34.svg',name:'Amari Jade',amount:'4.7k',online:true}
		];
	
		this.followersPlayerAll =  [
			{image:'assets/images/profile/avatar37.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar38.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar39.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar40.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar41.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar42.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar43.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar1.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar2.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar3.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar4.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar5.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar6.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar7.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar8.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar1.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar2.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar3.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar4.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar5.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar6.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar7.svg',name:'Amari Jade',amount:'4.7k',online:true},
			{image:'assets/images/profile/avatar8.svg',name:'Amari Jade',amount:'4.7k',online:true}
		];

	}

	imageTapped(){
		this.modal.create(PlayerProfilePage).present({animate:false});
	}

	dismissView(){
		this.view.dismiss();
	}

}
