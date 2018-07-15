import { Injectable, ViewContainerRef, ElementRef, Inject, NgZone } from '@angular/core';


declare var burnAnimation : any;

@Injectable()
export class fireAnimationService {

	private view: ElementRef;
	private parentView: HTMLElement;
	private canvas : HTMLElement;
	private burnInstance : any;
	private hostElement = null;
	private inBackground = null;
	private state = 'REMOVED';


	constructor(
		private zone : NgZone
	) {
	}

	getFireInstanceForElement(hostElement : HTMLElement, inBackground = false){

		this.zone.runOutsideAngular(()=>{
			if(this.state == 'INIT')
				return;

			this.state = 'INIT';

			this.hostElement = hostElement;
			this.inBackground = inBackground;

			this.canvas = document.createElement('canvas') as HTMLCanvasElement;

			this.canvas.style.position = 'absolute';
			this.canvas.style.top = '0px';
			this.canvas.style.right = '0px';
			this.canvas.style.bottom = '0px';
			this.canvas.style.left = '0px';
			// this.canvas.style.width = '100%';
			// this.canvas.style.maxHeight = '100%';
			this.canvas.style.zIndex = '100';

			if(inBackground == true)
				this.canvas.style.zIndex = '-1';

			hostElement.appendChild(this.canvas);

			if(hostElement.style.position != 'absolute')
				hostElement.style.position = 'relative';

			this.burnInstance = burnAnimation(this.canvas, hostElement, inBackground);

			return this.burnInstance;
		});

	}

	removeFireInstance(){
		this.zone.runOutsideAngular(()=>{
			this.state = 'REMOVED';

			if(this.canvas){
				this.canvas.style.animationDirection = 'forwards';
				this.canvas.style.animationDuration = '1s';
				this.canvas.classList.add('fadeOut');
			}

			setTimeout(()=>{
				if(this.burnInstance){
					this.burnInstance.cancel();
					delete this.burnInstance;
				}
				if(this.canvas){
					this.canvas.remove();
				}
			},950);
		});
	}

	setup(){

		this.zone.runOutsideAngular(()=>{
			if(this.state == 'ANIMATING')
				return;

			this.state = 'ANIMATING';
			if(this.state == 'REMOVED'){
				setTimeout(()=>{
					this.getFireInstanceForElement(this.hostElement, this.inBackground);
					this.burnInstance.setup();
				},500);
			}else{
				this.burnInstance.setup();
			}
		});
	
	}

}

