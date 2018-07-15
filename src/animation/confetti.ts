import { Injectable, ViewContainerRef, ElementRef, Inject } from '@angular/core';

declare var Confetti: any;
declare var confettis;
declare var p5;

@Injectable()
export class confettiAnimationService {

	public view: ElementRef;
	public parentView: HTMLElement;


	constructor() {
	}

	setView(view: ElementRef) {
		this.view = view;
		this.parentView = this.view.nativeElement as HTMLElement;
	}

	// __startAnimation() {

	// 	var element = document.createElement('canvas') as HTMLElement;
	// 	var p5Ref = new p5(confettis(this.parentView), this.parentView);

	// 	p5Ref.canvas.style.top = '0px';
	// 	p5Ref.canvas.style.bottom = '0px';
	// 	p5Ref.canvas.style.right = '0px';
	// 	p5Ref.canvas.style.left = '0px';
	// 	p5Ref.canvas.style.position = 'absolute';
	// 	p5Ref.canvas.style.width = this.parentView.clientWidth;
	// 	p5Ref.canvas.style.height = this.parentView.clientHeight;
	// 	p5Ref.canvas.style.zIndex = (parseInt(this.parentView.style.zIndex) + 1) + '';

	// 	setTimeout(function(){
	// 		p5Ref.remove();
	// 	},3000);

	// }

	startAnimation(){

		let elm = this.parentView;
		let	confetti = new Confetti({
			elm : elm,
			duration: 6000
		});

		confetti.start();

	}

}

