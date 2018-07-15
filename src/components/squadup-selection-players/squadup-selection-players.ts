import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { VirtualScroll } from 'ionic-angular';
import { trigger, transition, style, animate, query, stagger, keyframes } from '@angular/animations';
import { clickSoundProvider } from '../../providers/click';

@Component({
	selector: 'squadup-selection-players',
	templateUrl: 'squadup-selection-players.html',
	animations: [
		trigger('listAnimation', [
			transition('* => *', [
				query('ion-col', style({ transform: 'scale3d(1, 1, 1)', opacity : 0 })),
				query('ion-col',
				stagger('100ms', [
					animate('500ms 1000ms ease-in', keyframes([
						style({ transform: 'scale3d(0.3, 0.3, 0.3)', opacity : 1}),
						style({ transform: 'scale3d(1.1, 1.1, 1.1)'}),
						style({ transform: 'scale3d(0.9, 0.9, 0.9)'}),
						style({ transform: 'scale3d(1.03, 1.03, 1.03)'}),
						style({ transform: 'scale3d(0.97, 0.97, 0.97)'}),
						style({ transform: 'scale3d(1, 1, 1)'})
					]))
				]))
			])
		])
	]
})

export class SquadupSelectionPlayersComponent {

	private playersList = [];
	private alreadySelectedPlayers = 0;
	private numberOfPlayers = 0;
	private showAvatars = false;

	@Output() selectionChanged: EventEmitter<any> = new EventEmitter();
	@Output() profileViewTapped: EventEmitter<any> = new EventEmitter();

	@Input() maxSelection = 0;
	@Input() mode = '';
	@Input() set players(value) {

		if (!(value && Array.isArray(value) && value.length > 0)) {
			return;
		}

		let itemsPerSlot = 5;
		let slots = value.length / itemsPerSlot;
		this.playersList = [];
		this.numberOfPlayers = value.length;
		for (let i = 0; i < slots; i++) {
			this.playersList.push(value.slice(i * itemsPerSlot, i * itemsPerSlot + itemsPerSlot));
		}
	}

	constructor(
		private soundProvider : clickSoundProvider
	) {
	}

	followPlayer(player) {

		let isAlreadySelected = (player.selected && player.selected == true) ? true : false;

		if (this.alreadySelectedPlayers >= this.maxSelection && isAlreadySelected == false)
			return;

		player.selected = isAlreadySelected ? false : true;
		this.alreadySelectedPlayers += isAlreadySelected ? -1 : 1;
		this.selectionChanged.emit(this.alreadySelectedPlayers);
	}

	tracker(index) {
		return index;
	}

	animationStarted(ev){
		let staggerDelay = 100;
		setTimeout(()=>{
			this.soundProvider.playBubbleSound(1, staggerDelay);
		},1000);

	}

	ionViewDidLoad(){
		this.showAvatars = true;
	}


}