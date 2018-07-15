import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NativeAudio } from '@ionic-native/native-audio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { WheelSelector } from '@ionic-native/wheel-selector';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { firebaseConfig } from './config/firebase-config';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// GAMES COMMON COMPONENTS

	import { GameWebviewPage } from '../pages/game-webview/game-webview';
	import { GameOverPage } from '../pages/game-over/game-over';
	import { GameAdvertisePage } from '../pages/game-advertise/game-advertise';
	import { HowToPlayPage } from '../pages/how-to-play/how-to-play';

	import { GamemodeBalanceComponent } from '../components/gamemode-balance/gamemode-balance';
	import { GamemodeHeaderComponent } from '../components/gamemode-header/gamemode-header';
	import { GamemodeGameInformationComponent } from '../components/gamemode-game-information/gamemode-game-information';
	import { GamemodeGameDetailsComponent } from '../components/gamemode-game-details/gamemode-game-details';
	import { GamemodeScoreInformationComponent } from '../components/gamemode-score-information/gamemode-score-information';
	import { GamemodeGameDetailsWonComponent } from '../components/gamemode-game-details-won/gamemode-game-details-won';
	import { GamemodeGameIconComponent } from '../components/gamemode-game-icon/gamemode-game-icon';
	import { GamemodeGamePlayerChartComponent } from '../components/gamemode-game-player-chart/gamemode-game-player-chart';
	import { GamemodeScoreInformationWonComponent } from '../components/gamemode-score-information-won/gamemode-score-information-won';

// ARCADE PAGES AND COMPONENTS

	//PAGES

	import { ArcadeGamePage } from '../pages/arcade-game/arcade-game';
	import { ArcadeGameSettingsPage } from '../pages/arcade-game-settings/arcade-game-settings';
	import { ArcadeGameWinnersPage } from '../pages/arcade-game-winners/arcade-game-winners';
	

	//COMPONENTS

	import { ArcadeContentComponent } from '../components/arcade-content/arcade-content';
	import { ArcadeContentGameDetailsWonComponent } from '../components/arcade-content-game-details-won/arcade-content-game-details-won';
	import { ArcadeContentGameDetailsLoseComponent } from '../components/arcade-content-game-details-lose/arcade-content-game-details-lose';
	import { ArcadeContentScoreInformationComponent } from '../components/arcade-content-score-information/arcade-content-score-information';
	import { ArcadeContentScoreInformationWonComponent } from '../components/arcade-content-score-information-won/arcade-content-score-information-won';
	

// ARCADE PAGES AND COMPONENTS OVER

// REPLAY PAGES AND COMPONENTS

	// PAGES

	import { ReplayGamePage } from '../pages/replay-game/replay-game';

	// COMPONENTS

	import { ReplayContentComponent } from '../components/replay-content/replay-content';

// REPLAY PAGES AND COMPONENTS OVER


// INSTANTWIN PAGES AND COMPONENTS

	import { InstantwinGamePage } from '../pages/instantwin-game/instantwin-game';

	import { InstantwinContentComponent } from '../components/instantwin-content/instantwin-content';
	import { InstantwinContentScoreInformationComponent } from '../components/instantwin-content-score-information/instantwin-content-score-information';

// INSTANTWIN PAGES AND COMPONENTS OVER

// CONTENT PAGES AND COMPONENTS

	import { ContestGamePage } from '../pages/contest-game/contest-game';

	import { ContestContentComponent } from '../components/contest-content/contest-content';

// CONTENT PAGES AND COMPONENTS OVER

// HEAD2HEAD PAGES AND COMPONENTS


	import { Head2headGamePage } from '../pages/head2head-game/head2head-game';

	import { Head2headContentComponent } from '../components/head2head-content/head2head-content';
	import { Head2headGoalSetterComponent } from '../components/head2head-goal-setter/head2head-goal-setter';
	import { Head2headSearchOpponentComponent } from '../components/head2head-search-opponent/head2head-search-opponent';
	import { Head2headAreYouReadyComponent } from '../components/head2head-are-you-ready/head2head-are-you-ready';
	import { Head2headScoreInformationComponent } from '../components/head2head-score-information/head2head-score-information';
	import { Head2headAwaitingSlideComponent } from '../components/head2head-awaiting-slide/head2head-awaiting-slide';
	import { Head2headWinningSlideComponent } from '../components/head2head-winning-slide/head2head-winning-slide';
	import { Head2headLoseSlideComponent } from '../components/head2head-lose-slide/head2head-lose-slide';
	import { Head2headScoreInformationAwaitingComponent } from '../components/head2head-score-information-awaiting/head2head-score-information-awaiting';
	import { Head2headScoreInformationAwaitingSlideComponent } from '../components/head2head-score-information-awaiting-slide/head2head-score-information-awaiting-slide';
	import { Head2headScoreInformationWonSlideComponent } from '../components/head2head-score-information-won-slide/head2head-score-information-won-slide';
	import { Head2headScoreInformationLoseSlideComponent } from '../components/head2head-score-information-lose-slide/head2head-score-information-lose-slide';

// HEAD2HEAD PAGES AND COMPONENTS OVER


// GAME HOME PAGE

	import { gameHomePage } from '../pages/game-home/game-home';

	import { HomeNavigationPage } from '../pages/home-navigation/home-navigation';

	import { NewHomePage } from '../pages/new-home/new-home';
	import { NewHomeLoginPage } from '../pages/new-home-login/new-home-login';
	import { NewHomeSignupPage } from '../pages/new-home-signup/new-home-signup';
	import { DefaultAvatarListPage } from '../pages/default-avatar-list/default-avatar-list';

	import { HomeNavigationHeaderComponent } from '../components/home-navigation-header/home-navigation-header';
	import { HomeScreenHeaderComponent } from '../components/home-screen-header/home-screen-header';
	import { HomeScreenGameIconRedBigComponent } from '../components/home-screen-game-icon-red-big/home-screen-game-icon-red-big';
	import { HomeScreenGameModeHeaderComponent } from '../components/home-screen-game-mode-header/home-screen-game-mode-header';
	import { HomeScreenGameIconSmallComponent } from '../components/home-screen-game-icon-small/home-screen-game-icon-small';

	import { NewHomeLoginForgotPasswordComponent } from '../components/new-home-login-forgot-password/new-home-login-forgot-password';
	import { NewHomeBasicInformationComponent } from '../components/new-home-basic-information/new-home-basic-information';
	import { NewHomeSignupInformationComponent } from '../components/new-home-signup-information/new-home-signup-information';
	import { NewHomeAvatarOptionsComponent } from '../components/new-home-avatar-options/new-home-avatar-options';
	import { NewHomeVerificationComponent } from '../components/new-home-verification/new-home-verification';
	import { NewHomeReferralCodeComponent } from '../components/new-home-referral-code/new-home-referral-code';


// GAME

// RANKING MODAL PAGE AND COMPONENTS

	import { RankingModalPage } from '../pages/ranking-modal/ranking-modal';

	import { RankingContentComponent } from '../components/ranking-content/ranking-content';
	import { RankingTrendingComponent } from '../components/ranking-trending/ranking-trending';
	import { RankingLiveComponent } from '../components/ranking-live/ranking-live';
	import { RankingPrizeComponent } from '../components/ranking-prize/ranking-prize';
	import { RankingDescriptionComponent } from '../components/ranking-description/ranking-description';
	import { RankingSquadupComponent } from '../components/ranking-squadup/ranking-squadup';

// RANKING MODAL PAGE AND COMPONENTS OVER


// SQUADUP MODAL PAGE AND COMPONENT 

	import { SquadupModalPage } from '../pages/squadup-modal/squadup-modal';

	import { SquadupSelectionComponent } from '../components/squadup-selection/squadup-selection';
	import { SquadupSelectionHeaderComponent } from '../components/squadup-selection-header/squadup-selection-header';
	import { SquadupSelectionFooterComponent } from '../components/squadup-selection-footer/squadup-selection-footer';
	import { SquadupSelectionPlayersComponent } from '../components/squadup-selection-players/squadup-selection-players';
	import { SquadupPlayerIconComponent } from '../components/squadup-player-icon/squadup-player-icon';

// SQUADUP MODAL PAGE AND COMPONENTS OVER

// PLAYER MODAL PAGE AND COMPOENTS

	import { PlayerProfilePage } from '../pages/player-profile/player-profile';

	import { PlayerProfileModalComponent } from '../components/player-profile-modal/player-profile-modal';
	import { PlayerProfileHeaderComponent } from '../components/player-profile-header/player-profile-header';
	import { PlayerProfileRecentlyPlayedGamesComponent } from '../components/player-profile-recently-played-games/player-profile-recently-played-games';
	import { PlayerProfileStatisticsComponent } from '../components/player-profile-statistics/player-profile-statistics';

// PLAYER MODAL PAGE AND COMPOENTS OVER

// LEADERBOARD MODAL PAGE AND COMPOENTS

	import { LeaderboardPage } from '../pages/leaderboard/leaderboard';

	import { LeaderboardHeaderComponent } from '../components/leaderboard-header/leaderboard-header';
	import { LeaderboardTabsComponent } from '../components/leaderboard-tabs/leaderboard-tabs';
	import { LeaderboardContentComponent } from '../components/leaderboard-content/leaderboard-content';

// LEADERBOARD MODAL PAGE AND COMPOENTS OVER

// STORE MODAL PAGE AND COMPOENTS

	import { StorePage } from '../pages/store/store';

	import { StoreHeaderComponent } from '../components/store-header/store-header';
	import { StoreEarnBuyComponent } from '../components/store-earn-buy/store-earn-buy';
	import { StoreBlueSlotComponent } from '../components/store-blue-slot/store-blue-slot';
	import { StoreRedSlotComponent } from '../components/store-red-slot/store-red-slot';
	import { StoreOffersComponent } from '../components/store-offers/store-offers';
	import { StoreContentComponent } from '../components/store-content/store-content';
	import { StoreBalanceComponent } from '../components/store-balance/store-balance';

// STORE MODAL PAGE AND COMPOENTS OVER

// WINNER MODAL PAGE AND COMPOENTS

	import { WinnerPage } from '../pages/winner/winner';
	import { WinningAnimationScreenPage } from '../pages/winning-animation-screen/winning-animation-screen';

	import { WinnerPlayerComponent } from '../components/winner-player/winner-player';
	import { WinnerHeaderComponent } from '../components/winner-header/winner-header';
	import { WinningAnimationContentComponent } from '../components/winning-animation-content/winning-animation-content';
	import { WinningAnimationFooterComponent } from '../components/winning-animation-footer/winning-animation-footer';
	import { WinningAnimationStageComponent } from '../components/winning-animation-stage/winning-animation-stage';

	import { WinningAnimationSecondScreenContentComponent } from '../components/winning-animation-second-screen-content/winning-animation-second-screen-content';
	import { WinningAnimationSecondScreenHeaderComponent } from '../components/winning-animation-second-screen-header/winning-animation-second-screen-header';
	import { WinningAnimationSecondScreenListComponent } from '../components/winning-animation-second-screen-list/winning-animation-second-screen-list';

// WINNER MODAL PAGE AND COMPOENTS OVER

// CONVERT MODAL PAGE AND COMPOENTS

	import { ConvertPage } from '../pages/convert/convert';

	import { ConvertContentComponent } from '../components/convert-content/convert-content';
	import { ConvertHeaderComponent } from '../components/convert-header/convert-header';
	import { ConvertUserCoinsComponent } from '../components/convert-user-coins/convert-user-coins';
	import { ConvertHelperComponent } from '../components/convert-helper/convert-helper';
	import { ConvertRangeSliderComponent } from '../components/convert-range-slider/convert-range-slider';
	import { ConvertFooterComponent } from '../components/convert-footer/convert-footer';

// CONVERT MODAL PAGE AND COMPOENTS OVER

// INBOX MODAL PAGE AND COMPOENTS

	import { InboxPage } from '../pages/inbox/inbox';

	import { InboxTabComponent } from '../components/inbox-tab/inbox-tab';
	import { InboxHeaderComponent } from '../components/inbox-header/inbox-header';
	import { InboxPromotionsSlotComponent } from '../components/inbox-promotions-slot/inbox-promotions-slot';
	import { InboxResultsSlotComponent } from '../components/inbox-results-slot/inbox-results-slot';
	import { InboxRequestsSlotComponent } from '../components/inbox-requests-slot/inbox-requests-slot';

// INBOX MODAL PAGE AND COMPOENTS OVER

// FOLLOW MODAL PAGE AND COMPOENTS

	import { FollowModelPage } from '../pages/follow-model/follow-model';
	import { FollowHeaderComponent } from '../components/follow-header/follow-header';
	
// FOLLOW MODAL PAGE AND COMPOENTS OVER

// DAILYMISSION  PAGE AND COMPOENTS

	import { DailyMissionPage } from '../pages/daily-mission/daily-mission';

	import { DailyMissionContentComponent } from '../components/daily-mission-content/daily-mission-content';
	import { DailyMissionHeaderComponent } from '../components/daily-mission-header/daily-mission-header';
	import { DailyMissionOfferComponent } from '../components/daily-mission-offer/daily-mission-offer';
	import { DailyMissionProgressComponent } from '../components/daily-mission-progress/daily-mission-progress';
	import { DailyMissionFooterComponent } from '../components/daily-mission-footer/daily-mission-footer';


// DAILYMISSION PAGE AND COMPOENTS OVER

// BATTLEAFRIEND  PAGE AND COMPOENTS

	import { BattleAFriendPage } from '../pages/battle-a-friend/battle-a-friend';
	
	import { BattleAFriendContentComponent } from '../components/battle-a-friend-content/battle-a-friend-content';

// BATTLEAFRIEND PAGE AND COMPOENTS OVER

// SQUADUP REQUEST PAGE AND COMPOENTS

	import { SquadupRequestPage } from '../pages/squadup-request/squadup-request';
		
	import { SquadupRequestContentComponent } from '../components/squadup-request-content/squadup-request-content';

// SQUADUP REQUEST PAGE AND COMPOENTS OVER

// GAME REQUEST COMPONENTS

	import { GameRequestHeaderComponent } from '../components/game-request-header/game-request-header';
	import { GameRequestChallangerComponent } from '../components/game-request-challanger/game-request-challanger';
	import { GameRequestFooterComponent } from '../components/game-request-footer/game-request-footer';
	import { GameRequestGameInfoComponent } from '../components/game-request-game-info/game-request-game-info';

// GAME REQUEST COMPONENTS OVER

// STAGE RESULT COMPONENTS

	import { StageResultPage } from '../pages/stage-result/stage-result';

	import { StageResultContentComponent } from '../components/stage-result-content/stage-result-content';
	import { StageResultHeaderComponent } from '../components/stage-result-header/stage-result-header';
	import { StageResultGameInfoComponent } from '../components/stage-result-game-info/stage-result-game-info';
	import { StageResultLeaderboardComponent } from '../components/stage-result-leaderboard/stage-result-leaderboard';
	import { StageResultFooterComponent } from '../components/stage-result-footer/stage-result-footer';

	import { CurtainComponent } from '../components/curtain/curtain';

// STAGE RESULT COMPONENTS OVER


// STAGE COMPONENTS AND PAGE

	import { StagePage } from '../pages/stage/stage';

	import { StageBlockComponent } from '../components/stage-block/stage-block';

// STAGE COMPONENTS AND PAGE OVER

// ACHIEVEMENTS COMPONENTS AND PAGES

	import { AchievementsPage } from '../pages/achievements/achievements';

	import { AchievementContentComponent } from '../components/achievement-content/achievement-content';
	import { AchievementGameSlotComponent } from '../components/achievement-game-slot/achievement-game-slot';
	import { AchievementTabsComponent } from '../components/achievement-tabs/achievement-tabs';
	import { AchievementFooterComponent } from '../components/achievement-footer/achievement-footer';

// ACHIEVEMENTS COMPONENTS AND PAGES OVER


//ANIMATIONS

	import { confettiAnimationService } from '../animation/confetti';
	import { fireAnimationService } from '../animation/fire';
	import { clickSoundProvider } from '../providers/click';
	import { coinAnimationService } from '../animation/coin';

import { PlaygroundPage } from '../pages/playground/playground';
import { dashboardPage } from '../pages/dashboard/dashboard';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { SplashPage } from '../pages/splash/splash';
import { ResetPassword } from '../pages/reset-password/reset-password';
import { SignupSucessPage } from '../pages/signup-sucess/signup-sucess';
import { ProfileAvatarPage } from '../pages/profile-avatar/profile-avatar';
import { AppHeaderPage } from '../pages/app-header/app-header';
import { VerificationDetailPage } from '../pages/verification-detail/verification-detail';
import { CashoutPage } from '../pages/cashout/cashout';
import { OutcomeBeforeResultPage } from '../pages/outcome-before-result/outcome-before-result';


import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';
import { SplashScreen } from '@ionic-native/splash-screen';
import { VideoPlayer } from '@ionic-native/video-player';
import { Camera } from '@ionic-native/camera';

import { FontStaggerComponent } from '../components/font-stagger/font-stagger';
import { ArcadeContentScoreInformationLoseComponent } from '../components/arcade-content-score-information-lose/arcade-content-score-information-lose';
import { ArcadeUserDetailComponent } from '../components/arcade-user-detail/arcade-user-detail';
import { ArcadeCashBalanceComponent } from '../components/arcade-cash-balance/arcade-cash-balance';
import { ArcadeSettingComponent } from '../components/arcade-setting/arcade-setting';
import { ArcadeContentGameWinnersComponent } from '../components/arcade-content-game-winners/arcade-content-game-winners';
import { MarqueeListComponent } from '../components/marquee-list/marquee-list';
import { CustomInputComponent } from '../components/custom-input/custom-input';
import { AlertProvider } from '../providers/alert/alert';
import { SidemenuComponent } from '../components/sidemenu/sidemenu';
import { LazyDebossedDirective } from '../directives/lazy-debossed/lazy-debossed';
import { RoundInputDirective } from '../directives/round-input/round-input';

import { ArcadeContentFlagDetailsComponent } from '../components/arcade-content-flag-details/arcade-content-flag-details';

import { PlayerAvatarIconComponent } from '../components/player-avatar-icon/player-avatar-icon';
import { TimerComponent } from '../components/timer/timer';

import { PlayerPositionSlotComponent } from '../components/player-position-slot/player-position-slot';
import { NumberCounterDirective } from '../directives/number-counter/number-counter';
import { ShiningTextComponent } from '../components/shining-text/shining-text';
import { FadedCountdownDirective } from '../directives/faded-countdown/faded-countdown';
import { RecentlyPlayedGameIconComponent } from '../components/recently-played-game-icon/recently-played-game-icon';
import { PlayerGameRankTableComponent } from '../components/player-game-rank-table/player-game-rank-table';
import { PlayerResultComponent } from '../components/player-result/player-result';
import { PlayerResultWinningComponent } from '../components/player-result-winning/player-result-winning';
import { AuthProvider } from '../providers/auth/auth';


@NgModule({
	id : 'main_module',
	declarations: [

		MyApp,
		AppHeaderPage,
		dashboardPage,
		HomePage,
		SignupPage,
		SignupSucessPage,
		ProfileAvatarPage,
		ResetPassword,
		LoginPage,
		SplashPage,
		HowToPlayPage,
		OutcomeBeforeResultPage,
		
		VerificationDetailPage,
		CashoutPage,

		HomeNavigationPage,
		NewHomePage,
		NewHomeLoginPage,
		NewHomeSignupPage,
		DefaultAvatarListPage,

		NewHomeLoginForgotPasswordComponent,
		NewHomeBasicInformationComponent,
		NewHomeSignupInformationComponent,
		NewHomeAvatarOptionsComponent,
		NewHomeVerificationComponent,
		NewHomeReferralCodeComponent,

		GameWebviewPage,
		GameAdvertisePage,
		GameOverPage,
		gameHomePage,

		GamemodeHeaderComponent,
		GamemodeBalanceComponent,
		GamemodeGameInformationComponent,
		GamemodeGameDetailsComponent,
		GamemodeScoreInformationComponent,
		GamemodeGameDetailsWonComponent,
		GamemodeGameIconComponent,
		GamemodeGamePlayerChartComponent,
		GamemodeScoreInformationWonComponent,

		ArcadeGamePage,
		ArcadeContentComponent,
		ArcadeContentScoreInformationComponent,
		ArcadeContentGameDetailsWonComponent,
		ArcadeContentGameDetailsLoseComponent,
		ArcadeContentScoreInformationWonComponent,
		ArcadeContentScoreInformationLoseComponent,
		ArcadeGameSettingsPage,
		ArcadeUserDetailComponent,
		ArcadeCashBalanceComponent,
		ArcadeSettingComponent,
		ArcadeContentGameWinnersComponent,
		ArcadeGameWinnersPage,
		ArcadeContentFlagDetailsComponent,

		ReplayGamePage,
		ReplayContentComponent,

		InstantwinGamePage,
		InstantwinContentComponent,
		InstantwinContentScoreInformationComponent,

		ContestGamePage,
		ContestContentComponent,

		Head2headGamePage,
		Head2headContentComponent,
		Head2headGoalSetterComponent,
		Head2headSearchOpponentComponent,
		Head2headAreYouReadyComponent,
		FadedCountdownDirective,
		Head2headScoreInformationComponent,
		Head2headAwaitingSlideComponent,
		Head2headWinningSlideComponent,
		Head2headLoseSlideComponent,
		Head2headScoreInformationAwaitingComponent,
		Head2headScoreInformationAwaitingSlideComponent,
		Head2headScoreInformationWonSlideComponent,
		Head2headScoreInformationLoseSlideComponent,

		HomeNavigationHeaderComponent,
		HomeScreenHeaderComponent,
		HomeScreenGameIconRedBigComponent,
		HomeScreenGameModeHeaderComponent,
		HomeScreenGameIconSmallComponent,

		RankingModalPage,
		RankingTrendingComponent,
		RankingLiveComponent,
		RankingPrizeComponent,
		RankingDescriptionComponent,
		RankingSquadupComponent,

		SquadupModalPage,
		SquadupSelectionComponent,
		SquadupSelectionHeaderComponent,
		SquadupSelectionFooterComponent,
		SquadupSelectionPlayersComponent,
		SquadupPlayerIconComponent,

		PlayerProfilePage,
		PlayerProfileModalComponent,
		PlayerProfileHeaderComponent,
		PlayerProfileRecentlyPlayedGamesComponent,
		PlayerProfileStatisticsComponent,

		StorePage,
		StoreHeaderComponent,
		StoreEarnBuyComponent,
		StoreRedSlotComponent,
		StoreBlueSlotComponent,
		StoreOffersComponent,
		StoreContentComponent,
		StoreBalanceComponent,

		ConvertPage,
		ConvertContentComponent,
		ConvertUserCoinsComponent,
		ConvertHeaderComponent,
		ConvertHelperComponent,
		ConvertRangeSliderComponent,
		ConvertFooterComponent,

		WinnerPage,
		WinningAnimationScreenPage,
		WinnerPlayerComponent,
		WinnerHeaderComponent,
		WinningAnimationContentComponent,
		WinningAnimationFooterComponent,
		WinningAnimationStageComponent,

		WinningAnimationSecondScreenContentComponent,
		WinningAnimationSecondScreenHeaderComponent,
		WinningAnimationSecondScreenListComponent,

		LeaderboardPage,
		LeaderboardTabsComponent,
		LeaderboardHeaderComponent,
		LeaderboardContentComponent,

		PlaygroundPage,
		InboxPage,
		InboxTabComponent,
		InboxHeaderComponent,
		InboxPromotionsSlotComponent,
		InboxRequestsSlotComponent,
		InboxResultsSlotComponent,

		FollowModelPage,
		FollowHeaderComponent,

		DailyMissionPage,
		DailyMissionContentComponent,
		DailyMissionHeaderComponent,
		DailyMissionOfferComponent,
		DailyMissionProgressComponent,
		DailyMissionFooterComponent,

		BattleAFriendPage,
		BattleAFriendContentComponent,

		SquadupRequestPage,
		SquadupRequestContentComponent,
		
		GameRequestChallangerComponent,
		GameRequestFooterComponent,
		GameRequestGameInfoComponent,
		GameRequestHeaderComponent,

		AchievementsPage,
		AchievementContentComponent,
		AchievementGameSlotComponent,
		AchievementTabsComponent,
		AchievementFooterComponent,

		StageResultPage,
		StageResultContentComponent,
		StageResultHeaderComponent,
		StageResultGameInfoComponent,
		StageResultLeaderboardComponent,
		StageResultFooterComponent,
		CurtainComponent,

		StagePage,
		StageBlockComponent,

		SidemenuComponent,
		LazyDebossedDirective,
		RoundInputDirective,
		PlayerAvatarIconComponent,
		TimerComponent,
		MarqueeListComponent,
		PlayerPositionSlotComponent,
		NumberCounterDirective,
		ShiningTextComponent,
		FontStaggerComponent,
		RankingContentComponent,
		RecentlyPlayedGameIconComponent,
		PlayerGameRankTableComponent,
		PlayerResultComponent,
		PlayerResultWinningComponent,
		CustomInputComponent

	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		IonicModule.forRoot(MyApp, {
			mode: 'ios',
			scrollPadding: false,
			scrollAssist: false,
			autoFocusAssist: false,
			statusbarPadding: false
		}),
		AngularFireModule.initializeApp(firebaseConfig),
		AngularFireAuthModule,
		AngularFireDatabaseModule,
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		AppHeaderPage,

		HomeNavigationPage,	
		NewHomeSignupPage,
		NewHomePage,
		NewHomeLoginPage,
		DefaultAvatarListPage,
		HowToPlayPage,
		

		HomePage,
		gameHomePage,
		SignupPage,
		SignupSucessPage,
		ProfileAvatarPage,
		ResetPassword,
		LoginPage,
		SplashPage,
		gameHomePage,
		dashboardPage,
		ArcadeGamePage,
		ReplayGamePage,
		ContestGamePage,
		InstantwinGamePage,
		Head2headGamePage,
		GameWebviewPage,
		GameOverPage,
		GameAdvertisePage,
		ArcadeGameSettingsPage,
		RankingModalPage,
		SquadupModalPage,
		PlayerProfilePage,
		StorePage,
		ConvertPage,
		ArcadeGameWinnersPage,
		ArcadeContentFlagDetailsComponent,
		WinnerPage,
		WinningAnimationScreenPage,
		PlaygroundPage,
		FollowModelPage,
		InboxPage,
		StageResultPage,
		LeaderboardPage,
		DailyMissionPage,
		BattleAFriendPage,
		SquadupRequestPage,
		StagePage,
		VerificationDetailPage,
		CashoutPage,
		AchievementsPage,
		OutcomeBeforeResultPage
	],
	providers: [
		ScreenOrientation,
		WheelSelector,
		StatusBar,
		Keyboard,
		SplashScreen,
		VideoPlayer,
		Camera,
		fireAnimationService,
		coinAnimationService,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		AlertProvider,
		clickSoundProvider,
		InAppBrowser,
		NativeAudio,
    AuthProvider
	]
})
export class AppModule { }
