var imageCaches = [];
var cacheHolder = document.getElementById('cacheHolder') as HTMLElement;

var imagesAvatarPack = [
	'./assets/images/profile/avatar1.svg',
	'./assets/images/profile/avatar2.svg',
	'./assets/images/profile/avatar3.svg',
	'./assets/images/profile/avatar4.svg',
	'./assets/images/profile/avatar5.svg',
	'./assets/images/profile/avatar6.svg',
	'./assets/images/profile/avatar7.svg',
	'./assets/images/profile/avatar8.svg',
	'./assets/images/profile/avatar9.svg',
	'./assets/images/profile/avatar10.svg',
	'./assets/images/profile/avatar11.svg',
	'./assets/images/profile/avatar12.svg',
	'./assets/images/profile/avatar13.svg',
	'./assets/images/profile/avatar14.svg',
	'./assets/images/profile/avatar15.svg',
	'./assets/images/profile/avatar16.svg',
	'./assets/images/profile/avatar17.svg',
	'./assets/images/profile/avatar18.svg',
	'./assets/images/profile/avatar19.svg',
	'./assets/images/profile/avatar20.svg',
	'./assets/images/profile/avatar21.svg',
	'./assets/images/profile/avatar22.svg',
	'./assets/images/profile/avatar23.svg',
	'./assets/images/profile/avatar24.svg',
	'./assets/images/profile/avatar25.svg',
	'./assets/images/profile/avatar26.svg',
	'./assets/images/profile/avatar27.svg',
	'./assets/images/profile/avatar28.svg',
	'./assets/images/profile/avatar29.svg',
	'./assets/images/profile/avatar30.svg',
	'./assets/images/profile/avatar31.svg',
	'./assets/images/profile/avatar32.svg',
	'./assets/images/profile/avatar33.svg',
	'./assets/images/profile/avatar34.svg',
	'./assets/images/profile/avatar35.svg',
	'./assets/images/profile/avatar36.svg',
	'./assets/images/profile/avatar37.svg',
	'./assets/images/profile/avatar38.svg',
	'./assets/images/profile/avatar39.svg',
	'./assets/images/profile/avatar40.svg',
	'./assets/images/profile/avatar41.svg',
	'./assets/images/profile/avatar42.svg',
	'./assets/images/profile/avatar43.svg',
	'./assets/images/profile/avatar44.svg',
	'./assets/images/profile/avatar45.svg',
	'./assets/images/profile/avatar46.svg'
];

var urlsToLoad = {
	'AchievementsPage' : [
		'./assets/images/home/small-games/cheezywords.png',
		'./assets/images/home/small-games/wordhunt.png',
		'./assets/images/home/small-games/smashyblockz.png',
		'./assets/images/home/small-games/merji.png',
		'./assets/images/home/small-games/angryvegan.png',
		'./assets/images/home/small-games/skullsland.png',
		'./assets/images/game-mode-icons/arcade_dark.png',
		'./assets/images/profile/avatar2.svg',
		'./assets/images/game-mode-icons/contest_dark.png',
		'./assets/images/game-mode-icons/head2head_dark.png',
		'./assets/images/game-mode-icons/replay_dark.png',
		'./assets/images/home/share.png',
		'./assets/images/contest/uk.png',
		'./assets/images/winners-screen-back.png'
	],
	'APP_HEADER' : [],
	'ArcadeGamePage' : [
		'./assets/images/arcade/ad-button.png',
		'./assets/images/arcade/blue-background.png',
		'./assets/images/arcade/game-background.jpg',
		'./assets/images/arcade/game-icon.png',
		'./assets/images/arcade/game-poster.png',
		'./assets/images/arcade/helper-bot.png',
		'./assets/images/arcade/ribbon.png',
		'./assets/images/arcade/star.png'
	],
	'ArcadeGameSettingsPage' : [
		'./assets/images/inbox/lost.png',
		'./assets/images/player-profile/male.png',
		'./assets/images/Pencil-edit.png',
		'./assets/images/flag/PNG(retina)/united_kingdom_circle_96x96.png'
	],
	'ARCADE_GAME_WINNERS' : [],
	'BATTLE_A_FRIEND' : [],
	'CASHOUT' : [],
	'ContestGamePage' : [
		'./assets/images/contest/angryvegan-big.png',
		'./assets/images/contest/angryvegan.png',
		'./assets/images/profile/avatar2.svg',
		'./assets/images/contest/game-background.png',
		'./assets/images/contest/uk.png',
		'./assets/images/arcade/blue-background.png',
		'./assets/images/arcade/ribbon.png',
		'./assets/images/arcade/star.png'
	],
	'CONVERT' : [],
	'DailyMissionPage' : [
		'./assets/images/player-profile/present-box.png',
		'./assets/images/store/blue_dot.png'
	],
	'DASHBORAD' : [],
	'DefaultAvatarListPage' : [
		...imagesAvatarPack
	],
	'FollowModelPage' : [
		'./assets/images/home/follow.png',
		'./assets/images/squadup/lightening.png',
		'./assets/images/squadup/user.png',
		'./assets/images/squadup/plus.png',
		'./assets/images/squadup/tick.png',
		...imagesAvatarPack
	],
	'GAME_ADVERTISE' : [],
	'GameHomePage' : [
		'./assets/images/dashboard/follow_background.png',
		'./assets/images/home/menu_background.png',
		'./assets/images/player-profile/fame.png',
		'./assets/images/player-profile/fighter.png',
		'./assets/images/dashboard/store.png',
		'./assets/images/dashboard/coin.png',
		'./assets/images/dashboard/golden-coins-one.png',
		'./assets/images/dashboard/golden-coins-two.png',
		'./assets/images/dashboard/mail.png',
		'./assets/images/dashboard/facebook.png',
		'./assets/images/dashboard/twitter.png',
		'./assets/images/dashboard/instagram.png',
		'./assets/images/dashboard/snapchat.png',
		'./assets/images/profile/avatar1.svg',
		'./assets/images/flag/gb.svg',
		'./assets/images/home/mission.png',
		'./assets/images/arcade/store-icon.png',
		'./assets/images/home/slider_image_1.png',
		'./assets/images/home/slider_image_2.png',
		'./assets/images/home/slider_image_3.png',
		'./assets/images/home/slider_image_4.png',
		'./assets/images/home/small-games/merji.png',
		'./assets/images/home/small-games/candystreak.png',
		'./assets/images/home/small-games/pop_slot.png',
		'./assets/images/home/small-games/megaspin.png',
		'./assets/images/home/small-games/neon_spin.png',
		'./assets/images/home/small-games/lifes_a_beach.png',
		'./assets/images/home/big-games/wordhunt.png',
		'./assets/images/home/big-games/smashyblockz.png',
		'./assets/images/home/big-games/skullsland.png',
		'./assets/images/home/big-games/merji.png',
		'./assets/images/home/big-games/cheezywords.png',
		'./assets/images/home/big-games/angryvegan.png',
		'./assets/images/home/big-games/candystreak.png',
		'./assets/images/home/small-games/wordhunt.png',
		'./assets/images/home/small-games/smashyblockz.png',
		'./assets/images/home/small-games/skullsland.png',
		'./assets/images/home/small-games/cheezywords.png',
		'./assets/images/home/small-games/angryvegan.png',
		'./assets/images/home/icons/money.png',
		'./assets/images/arcade/dart-icon.png',
		'./assets/images/arcade/token-blue.png',
		'./assets/images/game-mode-icons/replay.png',
		'./assets/images/arcade/token-red.png',
		'./assets/images/home/icons/clock.png',
		'./assets/images/game-mode-icons/head2head.png',
		'./assets/images/home/lock.png',
		'./assets/images/game-mode-icons/contest.png',
		'./assets/images/game-mode-icons/instant_win.png',
		'./assets/images/arcade/token-yellow.png',
		'./assets/images/game-mode-icons/arcade.png',
		'./assets/images/dashboard/follow_background.png',
		'./assets/images/home/menu_background.png'
	],
	'GAME_OVER' : [],
	'GAME_WEBVIEW' : [],
	'Head2headGamePage' : [
		'./assets/images/head2head/game-background.png',
		'./assets/images/head2head/game-icon.png',
		'./assets/images/head2head/game-poster.png',
		'./assets/images/arcade/ribbon.png',
		'./assets/images/arcade/star.png',
		'./assets/images/arcade/blue-background.png'
	],
	'HOME' : [],
	'HomeNavigationPage' : [],
	'HOW_TO_PLAY' : [],
	'InboxPage' : [
		'./assets/images/game-mode-icons/head2head_dark.png',
		'./assets/images/game-mode-icons/replay_dark.png',
		'./assets/images/game-mode-icons/contest_dark.png',
		'./assets/images/player-profile/background.png',
		'./assets/images/inbox/up.png',
		'./assets/images/inbox/lost.png',
		'./assets/images/inbox/won.png',
		'./assets/images/inbox/just_eat.png',
		'./assets/images/inbox/queen.png',
		'./assets/images/replay/squadup.png'
	],
	'InstantwinGamePage' : [
		'./assets/images/instantwin/1.png',
		'./assets/images/instantwin/2.png',
		'./assets/images/instantwin/3.png',
		'./assets/images/instantwin/4.png',
		'./assets/images/instantwin/5.png',
		'./assets/images/instantwin/6.png',
		'./assets/images/instantwin/7.png',
		'./assets/images/instantwin/8.png',
		'./assets/images/instantwin/game-background.png',
		'./assets/images/instantwin/lifesabeach-big.png',
		'./assets/images/instantwin/lifesabeach.png'
	],
	'LeaderboardPage' : [
		'./assets/images/flag/PNG(retina)/abkhazia_circle_96x96.png',
		'./assets/images/player-profile/background.png',
		'./assets/images/player-profile/calendar.png',
		'./assets/images/player-profile/mystry-box.png',
		'./assets/images/player-profile/present-box.png',
		...imagesAvatarPack
	],
	'LOGIN' : [],
	'NewHomePage' : [
		'./assets/images/home/header_background.png',
		'./assets/images/logo.png'
	],
	'NewHomeLoginPage' : [
		'./assets/images/signup/facebook.png',
		'./assets/images/signup-background.png'
	],
	'NewHomeSignupPage' : [
		'./assets/images/signup/female.png',
		'./assets/images/signup/male.png',
		'./assets/images/signup/unknown-default.png',
		'./assets/images/signup/unknown-profile.png'
	],
	'PLAYER_PROFILE' : [],
	'PLAYGROUND' : [],
	'PROFILE_AVATAR' : [],
	'RANKING_MODAL' : [],
	'ReplayGamePage' : [
		'./assets/images/profile/avatar2.svg',
		'./assets/images/arcade/blue-background.png',
		'./assets/images/replay/cheesyword.png',
		'./assets/images/replay/cheesywords.png',
		'./assets/images/replay/game-background.png',
		'./assets/images/replay/uk.png',
		'./assets/images/replay/up.png'
	],
	'RESET_PASSWORD' : [],
	'SIGNUP' : [],
	'SIGNUP_SUCCESS' : [],
	'SplashPage' : [
		'./assets/images/loading_layer_2.png',
		'./assets/images/loading_layer_1.png',
		'./assets/images/home/background.png'
	],
	'SQUADUP_MODAL' : [],
	'SQUADUP_REQUEST' : [],
	'STAGE' : [],
	'STAGE_RESULT' : [],
	'StorePage' : [
		'./assets/images/store/multiple_coins.png',
		'./assets/images/store/helper.png',
		'./assets/images/store/purple_dot.png',
		'./assets/images/store/store_roof_trimmed.png',
		'./assets/images/store/running-fast.png',
		'./assets/images/store/express.png',
		'./assets/images/store/timer.png',
		'./assets/images/store/offerwall.png',
		'./assets/images/store/survey.png',
		'./assets/images/store/adplay.png',
		'./assets/images/store/coins-small.png',
		'./assets/images/store/coins-medium.png',
		'./assets/images/store/coins-large.png',
		'./assets/images/store/coins-extra-large.png'
	],
	'VERIFICATION_DETAIL' : [],
	'WinnerPage' : [
		'./assets/images/player-profile/background.png',
		'./assets/images/flag/PNG(retina)/abkhazia_circle_96x96.png',
		...imagesAvatarPack
	],
	'WINNING_ANIMATION_SCREEN' : []
}; 

export function cache_prepare_for_navigation(arr){

	let imagesToCache = [];
	let imagesToRemove = [];

	for(let i = 0; i < arr.length ; i++){
		if((urlsToLoad as Object).hasOwnProperty(arr[i])){
			let images = urlsToLoad[arr[i]];
			for(let j=0; j < images.length; j++){
				imagesToCache.push(images[j]);
			}
		}
	}

	imagesToCache = imagesToCache.map(normalize_image_url);

	let objImagesToCache = {};
	let objImagesToRemove = {};

	for(let i = 0; i < imagesToCache.length ; i++){
		objImagesToCache[imagesToCache[i][0]] = {
			doAdd : true,
			url : imagesToCache[i][1]
		};
	}


	objImagesToRemove = caching_get_current_images_array();


	for(var key in objImagesToRemove){
		if(objImagesToCache.hasOwnProperty(key)){
			objImagesToRemove[key].doRemove = false;
			objImagesToCache[key].doAdd = false;
		}
	}

	for(var key in objImagesToRemove){
		if(objImagesToRemove[key].doRemove == true){
			(objImagesToRemove[key].element as HTMLElement).remove();
		}
	}

	for(var key in objImagesToCache){
		if(objImagesToCache[key].doAdd == true){



			let image = new Image();
			image.id = key;
			image.src = objImagesToCache[key].url;
			cacheHolder.appendChild(image);
		}
	}


}


function caching_get_current_images_array(){

	let cachedImageObject = {};
	let images = cacheHolder.getElementsByTagName('img');

	for(let i =0;i<images.length ; i++){
		let image : HTMLImageElement = images.item(i);

		cachedImageObject[image.id]  = { doRemove  : true, element : image };
	}

	return cachedImageObject;
}

function normalize_image_url(url : string){
	let originalUrl = url;
	url = url.substr(url.indexOf('.') + 1, url.lastIndexOf('.'));
	url = url.replace(/\./g,'');
	url = url.replace(/\//g,'_');
	url = 'cached_image' + url;
	return [url, originalUrl];
}