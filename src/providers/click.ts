import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio';
import { Platform } from 'ionic-angular';
 
declare var cordova;

@Injectable()
export class clickSoundProvider {

	private soundDirectory = 'assets/sounds/';
	private defaultSoundLevel = 1;
	private isHomeScreenPlaying = false;

	constructor(
		private nativeAudio : NativeAudio,
		private platform : Platform
	){
		this.platform.ready().then(()=>{
			this.nativeAudio.preloadComplex('homescreen', this.soundDirectory+'homescreen.mp3', this.defaultSoundLevel, 1, 1.5);
			this.nativeAudio.preloadComplex('click', this.soundDirectory+'click.mp3', this.defaultSoundLevel, 1, 0);
			this.nativeAudio.preloadComplex('bubbles',this.soundDirectory+'bubbles.mp3', this.defaultSoundLevel, 1, 0);
			this.nativeAudio.preloadComplex('play_button',this.soundDirectory+'play_button_coins.mp3', this.defaultSoundLevel, 1, 0);
			this.nativeAudio.preloadComplex('point_awarded_arcade_tick_sound',this.soundDirectory+'point_awarded_arcade_tick_sound.wav', this.defaultSoundLevel, 1, 0);
			this.nativeAudio.preloadComplex('wrong_x_acrade',this.soundDirectory+'wrong_x_acrade.mp3', this.defaultSoundLevel, 1, 0);


			this.nativeAudio.preloadComplex('lose',this.soundDirectory+'lose.mp3', this.defaultSoundLevel, 1, 0);
			this.nativeAudio.preloadComplex('6_celebration_2',this.soundDirectory+'6_celebration_2.mp3', this.defaultSoundLevel, 1, 0);
			this.nativeAudio.preloadComplex('results_sound',this.soundDirectory+'results_sound.mp3', this.defaultSoundLevel/2, 1, 0);

			this.nativeAudio.preloadComplex('metal_wobble',this.soundDirectory+'metal_wobble.wav', this.defaultSoundLevel, 1, 0);
			this.nativeAudio.preloadComplex('position_triangle_counter',this.soundDirectory+'position_triangle_counter.wav', this.defaultSoundLevel, 1, 0);

			this.nativeAudio.preloadComplex('head2head_win',this.soundDirectory+'head2head_win.wav', this.defaultSoundLevel, 1, 0);
			this.nativeAudio.preloadComplex('coins_dropping',this.soundDirectory+'coins_dropping.mp3', this.defaultSoundLevel, 1, 0);

			this.nativeAudio.preloadComplex('war_snare',this.soundDirectory+'war_snare.wav', this.defaultSoundLevel, 1, 0);

			this.nativeAudio.preloadComplex('winning_sfx',this.soundDirectory+'winning-sfx.wav',this.defaultSoundLevel, 1, 0);


		});
	}

	playClick(){
		this.nativeAudio.play('click');
	}

	playHomeScreenSound(){

		if(this.isHomeScreenPlaying)
			return;

		this.nativeAudio.loop('homescreen');
		this.isHomeScreenPlaying = true;
	}

	stopHomeScreenSound(){

		if(!this.isHomeScreenPlaying)
			return;

		this.nativeAudio.stop('homescreen');
		this.isHomeScreenPlaying  = false;
	}

	playBubbleSound(totalTime, timeout){
		totalTime = totalTime - 1;
		this.nativeAudio.play('bubbles');
		if(totalTime <= 0)
			return;

		setTimeout(()=>{
			this.playBubbleSound(totalTime, timeout);
		},timeout);

	}

	playPlayButtonSound(){
		this.nativeAudio.play('play_button');
	}

	playArcadeAwardedSound(){
		this.nativeAudio.play('point_awarded_arcade_tick_sound');
	}

	playArcadeWrongSound(){
		this.nativeAudio.play('wrong_x_acrade');
	}

	playArcadeGameLoseSound(callback = ()=>{}){
		this.nativeAudio.play('lose',callback);
	}

	playArcadeGameWinSound(callback = ()=>{}){
		this.nativeAudio.play('6_celebration_2',callback);
	}

	playResultSound(){
		this.nativeAudio.play('results_sound');
	}

	stopResultSound(){
		this.nativeAudio.stop('results_sound');
	}

	startWobbleLoop(){
		this.nativeAudio.loop('metal_wobble');
	}

	stopWobbleLoop(){
		this.nativeAudio.stop('metal_wobble');
	}

	playTrianglePulseSound(){
		this.nativeAudio.play('position_triangle_counter');
	}

	playHead2HeadGameWinSound(callback = ()=>{}){
		this.nativeAudio.play('head2head_win',callback);
		this.nativeAudio.play('coins_dropping');
	}

	playWarSnareSound(){
		this.nativeAudio.play('war_snare');
	}

	playWinninSfx(){
		this.nativeAudio.play('winning_sfx');
	}


}
