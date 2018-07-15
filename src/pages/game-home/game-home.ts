import { Component, ViewChild, AfterViewInit, OnChanges, ViewChildren, QueryList, ChangeDetectorRef, ElementRef } from '@angular/core';
import { NavController, NavParams, Slides, Scroll, Content, ScrollEvent, ModalController, MenuController, Events, ViewController } from 'ionic-angular';

import { AlertProvider } from '../../providers/alert/alert';
import { clickSoundProvider } from '../../providers/click';
import { ArcadeGamePage } from '../arcade-game/arcade-game';
import { ReplayGamePage } from '../replay-game/replay-game';
import { InstantwinGamePage } from '../instantwin-game/instantwin-game';
import { ContestGamePage } from '../contest-game/contest-game';
import { Head2headGamePage } from '../head2head-game/head2head-game';
import { HomeScreenGameIconRedBigComponent } from '../../components/home-screen-game-icon-red-big/home-screen-game-icon-red-big';
import { Subject  } from 'rxjs/Subject';
import { Subscription  } from 'rxjs/Subscription';
import { StorePage } from '../store/store';
import { MarqueeListComponent } from '../../components/marquee-list/marquee-list';

import { InboxPage } from '../inbox/inbox';
import { FollowModelPage } from '../follow-model/follow-model';
import { DailyMissionPage } from '../daily-mission/daily-mission';
import { OutcomeBeforeResultPage } from '../outcome-before-result/outcome-before-result';

import { ImageCacher } from '../../experiment/imageCacher';

 
@Component({
	selector: 'page-game-home',
	templateUrl: 'game-home.html'
})
@ImageCacher([
	'StorePage',
	'InboxPage',
	'DailyMissionPage',
	'FollowModelPage',
	'ArcadeGameSettingsPage',
	'LeaderboardPage',
	'AchievementsPage',
	'WinnerPage',
	'ArcadeGamePage',
	'ReplayGamePage',
	'Head2headGamePage',
	'ContestGamePage',
	'InstantwinGamePage'
])
export class gameHomePage implements AfterViewInit {


	private menuCloseSubscription : any;
	private menuOpenSubscription : any;

	@ViewChild('slides') slide : Slides;
	@ViewChild('content') content : Content;
	@ViewChild(MarqueeListComponent) marqueeList : MarqueeListComponent;
	@ViewChildren(HomeScreenGameIconRedBigComponent) bigIcons : QueryList<HomeScreenGameIconRedBigComponent>;

	private arcadeGames : Array<any> = new Array<any>();
	private replayGames : Array<any> = new Array<any>();
	private head2headGames : Array<any> = new Array<any>();
	private contestGames : Array<any> = new Array<any>();
	private instantWinGames : Array<any> = new Array<any>();
	private winnerList : Array<any> = new Array<any>();

	private scrollSubject : Subject<any> = new Subject();
	private horizontalScrollStopped = false;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams, 
		private alert : AlertProvider, 
		private clickSoundProvider : clickSoundProvider,
		private modal : ModalController,
		private changeDetector : ChangeDetectorRef,
		private ele : ElementRef,
		private menu : MenuController,
		private events : Events,
		private view : ViewController
	) {
		this.changeDetector.detach();

		this.setWinnerList();
		this.setArcadeGames();
		this.setReplayGames();
		this.setHead2HeadGames();
		this.setContestGames();
		this.setInstantWinGames();
		
		this.menuOpenSubscription = this.events.subscribe('global:menu_open',()=>{
			if(this.marqueeList){
				this.marqueeList.stopPlay()
			}
			this.detachChangeDetection();
		});

		this.menuCloseSubscription = this.events.subscribe('global:menu_close',()=>{
			if(this.marqueeList){
				this.marqueeList.startPlay();
			}
			this.attachChangeDetection();
		});

		this.changeDetector.reattach();

	}

	openStoreScreen(){
		
		this.detachChangeDetection();
		if(this.marqueeList){
			this.marqueeList.stopPlay();
		}
			
		this.navCtrl.push(StorePage,{parentNativeElement : this.ele.nativeElement});
		
	}

	ngAfterViewInit(){

		let slider : any = this.slide;
		this.slide.autoplayStopOnLast = false;
		this.slide.autoplay = 3000;
		this.slide.loop = true;
		this.slide.speed = 1500;
		this.slide.autoplayDisableOnInteraction = false;
		slider.autoHeight = false;
		slider.coverflow.slideShadows = false;
		slider.coverflow.rotate = 0;
		slider.coverflow.depth = 640;
		this.slide.slidesPerView = 1;
		this.slide.centeredSlides = true;


		this.content.ionScrollStart.subscribe(()=>{
			this.detachChangeDetection();
		});

		this.content.ionScrollEnd.subscribe(()=>{
			this.attachChangeDetection();
		});

	}

	setWinnerList(){

		this.winnerList.push({name : 'Derick', amount : 5, maxAmount : 60});
		this.winnerList.push({name : 'Simon', amount : 5, maxAmount : 60});
		this.winnerList.push({name : 'Derick1', amount : 5, maxAmount : 60});

	}

	setArcadeGames(){

		this.arcadeGames.push({ mode:'ARCADE', disabled:false, name:'Candy Streak', level : 1, blueToken : 1, image : 'assets/images/home/small-games/candystreak.png'});
		this.arcadeGames.push({ mode:'ARCADE', disabled:false, name:'Angry Vegan', level : 2, blueToken : 3, image : 'assets/images/home/small-games/angryvegan.png'});
		this.arcadeGames.push({ mode:'ARCADE', disabled:false, name:'Cheesy Words', level : 5, blueToken : 11, image : 'assets/images/home/small-games/cheezywords.png', gameUrl : 'http://ec2-34-250-80-237.eu-west-1.compute.amazonaws.com/', orientation : 'landscape'});
		this.arcadeGames.push({ mode:'ARCADE', disabled:false, name:'Merji', level : 2, blueToken : 10, image : 'assets/images/home/small-games/merji.png'});
		this.arcadeGames.push({ mode:'ARCADE', disabled:false, name:'Skull Island', level : 3, blueToken : 5, image : 'assets/images/home/small-games/skullsland.png'});
		this.arcadeGames.push({ mode:'ARCADE', disabled:false, name:'Smashy Blockz', level : 1, blueToken : 3, image : 'assets/images/home/small-games/smashyblockz.png'});
		this.arcadeGames.push({ mode:'ARCADE', disabled:false, name:'Word Hunt', level : 4, blueToken : 2, image : 'assets/images/home/small-games/wordhunt.png', gameUrl : 'http://ec2-34-240-214-185.eu-west-1.compute.amazonaws.com/', orientation : 'portrait'});
		
	}

	setReplayGames(){

		this.replayGames.push({ tempWinPosition : 1, mode:'REPLAY', disabled:false, subbar:'DIFFICULTY_INFO', name:'Candy Streak', difficulty:'EXPERT', redToken:4, prize:150, isCountDown:true, time:9000, image:'assets/images/home/big-games/candystreak.png' });
		this.replayGames.push({ tempWinPosition : 2, mode:'REPLAY', disabled:false, subbar:'DIFFICULTY_INFO', name:'Angry Vegan', difficulty:'PRO', redToken:4, prize:100, isCountDown:true, time:8000, image:'assets/images/home/big-games/angryvegan.png' });
		this.replayGames.push({ tempWinPosition : 3, mode:'REPLAY', disabled:false, subbar:'DIFFICULTY_INFO', name:'Cheesy Words', difficulty:'PRO', redToken:4, prize:100, isCountDown:true, time:800, image:'assets/images/home/big-games/cheezywords.png' });
		this.replayGames.push({ tempWinPosition : 4, mode:'REPLAY', disabled:false, subbar:'DIFFICULTY_INFO', name:'Merji', difficulty:'NEWBIE', redToken:4, prize:70, isCountDown:true, time:7000, image:'assets/images/home/big-games/merji.png' });
		this.replayGames.push({ tempWinPosition : 5, mode:'REPLAY', disabled:false, subbar:'DIFFICULTY_INFO', name:'Skull Island', difficulty:'PRO', redToken:4, prize:90, isCountDown:true, time:6000, image:'assets/images/home/big-games/skullsland.png' });
		this.replayGames.push({ tempWinPosition : 1, mode:'REPLAY', disabled:false, subbar:'DIFFICULTY_INFO', name:'Smashy Blockz', difficulty:'PRO', redToken:4, prize:15, isCountDown:true, time:5000, image:'assets/images/home/big-games/smashyblockz.png' });
		this.replayGames.push({ tempWinPosition : 2, mode:'REPLAY', disabled:false, subbar:'DIFFICULTY_INFO', name:'Word Hunt', difficulty:'NEWBIE', redToken:4, prize:107, isCountDown:true, time:4000, image:'assets/images/home/big-games/wordhunt.png' });
		
	}

	setHead2HeadGames(){

		this.head2headGames.push({ mode:'HEAD2HEAD', disabled:false, name:'Candy Streak', difficulty:'EXPERT', image:'assets/images/home/small-games/candystreak.png' });
		this.head2headGames.push({ mode:'HEAD2HEAD', disabled:false, name:'Angry Vegan', difficulty:'PRO', image:'assets/images/home/small-games/angryvegan.png' });
		this.head2headGames.push({ mode:'HEAD2HEAD', disabled:true, name:'Cheesy Words', difficulty:'NEWBIE', image:'assets/images/home/small-games/cheezywords.png' });
		this.head2headGames.push({ mode:'HEAD2HEAD', disabled:true, name:'Merji', difficulty:'NEWBIE', image:'assets/images/home/small-games/merji.png' });
		this.head2headGames.push({ mode:'HEAD2HEAD', disabled:true, name:'Skull Island', difficulty:'PRO', image:'assets/images/home/small-games/skullsland.png' });
		this.head2headGames.push({ mode:'HEAD2HEAD', disabled:true, name:'Smashy Blockz', difficulty:'PRO', image:'assets/images/home/small-games/smashyblockz.png' });
		this.head2headGames.push({ mode:'HEAD2HEAD', disabled:true, name:'Word Hunt', difficulty:'NEWBIE', image:'assets/images/home/small-games/wordhunt.png' });

	}

	setContestGames(){

		this.contestGames.push({ tempWinPosition : 1, mode:'CONTEST', disabled:false, subbar:'GAMEPROGRESS_INFO', name:'Candy Streak', stage:4, attempts:15, redToken:4, prize:150, isCountDown:true, time:9000, image:'assets/images/home/big-games/candystreak.png' });
		this.contestGames.push({ tempWinPosition : 2, mode:'CONTEST', disabled:true, subbar:'DIFFICULTY_INFO', name:'Angry Vegan', difficulty:'PRO', redToken:4, prize:100, isCountDown:true, time:750, image:'assets/images/home/big-games/angryvegan.png' });
		this.contestGames.push({ tempWinPosition : 3, mode:'CONTEST', disabled:true, subbar:'DIFFICULTY_INFO', name:'Cheesy Words', difficulty:'PRO', redToken:4, prize:100, isCountDown:true, time:850, image:'assets/images/home/big-games/cheezywords.png' });
		this.contestGames.push({ tempWinPosition : 4, mode:'CONTEST', disabled:true, subbar:'DIFFICULTY_INFO', name:'Merji', difficulty:'NEWBIE', redToken:4, prize:70, isCountDown:true, time:600, image:'assets/images/home/big-games/merji.png' });
		this.contestGames.push({ tempWinPosition : 5, mode:'CONTEST', disabled:true, subbar:'DIFFICULTY_INFO', name:'Skull Island', difficulty:'PRO', redToken:4, prize:90, isCountDown:true, time:1800, image:'assets/images/home/big-games/skullsland.png' });
		this.contestGames.push({ tempWinPosition : 6, mode:'CONTEST', disabled:true, subbar:'GAMEPROGRESS_INFO', name:'Smashy Blockz', stage:6, attempts:10,redToken:4, prize:15, isCountDown:true, time:800, image:'assets/images/home/big-games/smashyblockz.png' });
		this.contestGames.push({ tempWinPosition : 7, mode:'CONTEST', disabled:true, subbar:'GAMEPROGRESS_INFO', name:'Word Hunt', stage:7, attempts:1, redToken:4, prize:107, isCountDown:true, time:900, image:'assets/images/home/big-games/wordhunt.png' });

	}

	setInstantWinGames(){

		this.instantWinGames.push({ mode:'INSTANTWIN', disabled:false, subbar:'REWARD', name:'Lifes a beach', yellowToken : 11, image : 'assets/images/home/small-games/lifes_a_beach.png'});
		this.instantWinGames.push({ mode:'INSTANTWIN', disabled:false, subbar:'REWARD', name:'Neon Flash', yellowToken : 11, image : 'assets/images/home/small-games/neon_spin.png'});
		this.instantWinGames.push({ mode:'INSTANTWIN', disabled:false, subbar:'PROGRESSBAR', progress:4, name:'Mega Spin 4', yellowToken : 11, badge:true, badgeType:'LOCK', image : 'assets/images/home/small-games/megaspin.png'});
		this.instantWinGames.push({ mode:'INSTANTWIN', disabled:false, subbar:'PROGRESSBAR', progress:24, name:'Mega Spin 24', yellowToken : 11, badge:true, badgeType:'LOCK', image : 'assets/images/home/small-games/megaspin.png'});
		this.instantWinGames.push({ mode:'INSTANTWIN', disabled:false, subbar:'PROGRESSBAR', progress:49, name:'Mega Spin 49', yellowToken : 11, badge:true, badgeType:'LOCK', image : 'assets/images/home/small-games/megaspin.png'});
		this.instantWinGames.push({ mode:'INSTANTWIN', disabled:false, subbar:'PROGRESSBAR', progress:74, name:'Mega Spin 74', yellowToken : 11, badge:true, badgeType:'LOCK', image : 'assets/images/home/small-games/megaspin.png'});
		this.instantWinGames.push({ mode:'INSTANTWIN', disabled:false, subbar:'PROGRESSBAR', progress:99, name:'Mega Spin 99', yellowToken : 11, badge:true, badgeType:'LOCK', image : 'assets/images/home/small-games/megaspin.png'});
		this.instantWinGames.push({ mode:'INSTANTWIN', disabled:false, subbar:'REWARD', name:'Pop Slot', yellowToken : 11, image : 'assets/images/home/small-games/pop_slot.png'});
		this.instantWinGames.push({ mode:'INSTANTWIN', disabled:false, subbar:'INSTANTCHALLANGE', reward:true, rewardType:'MONEY', rewardValue:5, name:'Merji', level : 5, yellowToken : 11, badge:true, badgeType:'VALUE', badgeValue:2, image : 'assets/images/home/small-games/merji.png'});
		this.instantWinGames.push({ mode:'INSTANTWIN', disabled:false, subbar:'INSTANTCHALLANGE', reward:true, rewardType:'MONEY', rewardValue:20, name:'Candy Streak', level : 5, yellowToken : 11, image : 'assets/images/home/small-games/candystreak.png'});
		this.instantWinGames.push({ mode:'INSTANTWIN', disabled:false, subbar:'INSTANTCHALLANGE', reward:true, rewardType:'TOKEN', rewardValue:5, name:'Merji', level : 5, yellowToken : 11, badge:true, badgeType:'VALUE', badgeValue:5, image : 'assets/images/home/small-games/merji.png'});

	}

	detachChangeDetection(){
		this.slide.stopAutoplay();
		this.bigIcons.forEach((item)=>{
			item.detachFromChangeDetection();
		});
		// (this.content.getNativeElement() as HTMLElement).classList.add('disable-debossed');
	}

	attachChangeDetection(){

		if(!this.bigIcons)
			return false;

		if(this.marqueeList)
			this.marqueeList.startPlay();
			
		this.slide.startAutoplay();
		this.bigIcons.forEach((item)=>{
			item.attachToChangeDetection();
		});
		// (this.content.getNativeElement() as HTMLElement).classList.remove('disable-debossed');
	}

	openGame(game, event : Event = null){
		
		this.clickSoundProvider.playClick();
		if(game.disabled == true){
			let alert = this.alert.create("Complete lv <span class='highlight'>5</span> in arcade to unlock this level.",0,{
				cssClass : 'alert-game-locked'
			});
			alert.present();

			setTimeout(()=>{
				if(alert)
					alert.dismiss();
			},2500);

			return ;
		}

		let page : any = null;
		let navOptions = {};

		if(game.mode == 'ARCADE'){

			page = ArcadeGamePage;
			navOptions = {gameUrl : game.gameUrl,orientation : game.orientation};
		}else if(game.mode == 'REPLAY'){
			page = ReplayGamePage;
			navOptions = {tempWinPosition : game.tempWinPosition};
		}else if(game.mode == 'INSTANTWIN'){
			page = InstantwinGamePage;
		}else if(game.mode == 'CONTEST'){
			page = ContestGamePage;
			navOptions = {tempWinPosition : game.tempWinPosition};
		}else if(game.mode == 'HEAD2HEAD'){
			page = Head2headGamePage;
		}

		this.navCtrl.setRoot(page,navOptions,{animate:true,animation:'transition',duration:500,direction:'forward'});
	}

	ionViewDidUnload(){
		this.events.unsubscribe('global:menu_open');
		this.events.unsubscribe('global:menu_close');
	}

	openInboxScreen(){
		this.navCtrl.push(InboxPage);
	}

	openFollowerScreen(){
		this.navCtrl.push(FollowModelPage);
	}

	openDailyMissionScreen(){
		this.navCtrl.push(DailyMissionPage);
	}

	ionViewDidEnter(){
		setTimeout(()=>{
			this.changeDetector.reattach();
			this.attachChangeDetection();
		},0);
		
	}
	
}