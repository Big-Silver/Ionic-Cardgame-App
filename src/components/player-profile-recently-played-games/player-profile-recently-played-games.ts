import { Component, Input, AfterViewInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger, keyframes } from '@angular/animations';

@Component({
	selector: 'player-profile-recently-played-games',
	templateUrl: 'player-profile-recently-played-games.html'
})
export class PlayerProfileRecentlyPlayedGamesComponent implements AfterViewInit {

	@Input() games = [];

	constructor() {
	}

	ngAfterViewInit(){

	}

	animationStarted(ev){
	}

}