import { Component, Input, ViewChild, ElementRef, AfterViewInit, NgZone, ChangeDetectorRef } from '@angular/core';

declare var TimelineMax;
declare var Linear;

@Component({
	selector: 'marquee-list',
	templateUrl: 'marquee-list.html'
})
export class MarqueeListComponent implements AfterViewInit {

	private _list : Array<any> = new Array<any>();
	private _label : string = '';
	private timelineMax : any;

	@ViewChild('list') originalList : ElementRef;
	@ViewChild('clonedList') clonedList : ElementRef;

	@Input() set list(value){
		this._list = value;
	}

	@Input() set label(value){
		this._label = value;
	}

	constructor(
		private zone : NgZone,
		private changeDetectorRef : ChangeDetectorRef
	) {
		this.zone.runOutsideAngular(()=>{
			this.timelineMax = new TimelineMax({force3D:true, repeat: -1, paused: false});
		});
	}

	ngAfterViewInit(){

		setTimeout(()=>{
			let time = 8;
			let originalList = this.originalList.nativeElement as HTMLElement;
			let originalListWidth = originalList.clientWidth;
			let clonedList = this.clonedList.nativeElement as HTMLElement;
			let clonedListWidth = clonedList.clientWidth;

			this.timelineMax.fromTo(originalList, time, {x:0}, {x: -originalListWidth, ease: Linear.easeNone}, 0);
			this.timelineMax.fromTo(clonedList, time, {x:originalListWidth}, {x:0, ease: Linear.easeNone}, 0);
			this.timelineMax.set(originalList, {x: originalListWidth});
			this.timelineMax.to(clonedList, time, {x: -originalListWidth, ease: Linear.easeNone}, time);
			this.timelineMax.to(originalList, time, {x: 0, ease: Linear.easeNone}, time);

			this.timelineMax.play();
		},0);

	}

	startPlay(){
		if(!this.timelineMax)
			return;

		this.timelineMax.play();
	}

	stopPlay(){
		if(!this.timelineMax)
			return;

		this.timelineMax.pause();
	}

}