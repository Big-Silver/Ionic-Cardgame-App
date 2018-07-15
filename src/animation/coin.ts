import { Injectable, ViewContainerRef, ElementRef, Inject } from '@angular/core';

declare var canvasCoinAnimator;

@Injectable()
export class coinAnimationService {

	public view: ElementRef;
	public parentView: HTMLElement;
	public canvasElement : HTMLCanvasElement;

	public instance = null;

	constructor() {
	}

	init(view: ElementRef) {
		this.view = view;
		this.parentView = this.view.nativeElement as HTMLElement;
		this.canvasElement = document.createElement('canvas') as HTMLCanvasElement;
		this.canvasElement.height = this.parentView.clientHeight;
		this.canvasElement.width = this.parentView.clientWidth;
		this.canvasElement.style.position = 'absolute';
		this.canvasElement.style.top = "0px";
		this.canvasElement.style.bottom = "0px";
		this.canvasElement.style.right = "0px";
		this.canvasElement.style.left = "0px";
		this.parentView.appendChild(this.canvasElement);
	}

	prepareBeforeAnimation(){
		if(!this.instance)
			this.instance = canvasCoinAnimator(this.canvasElement);
		this.instance.prepare();
	}

	startAnimation(){
		this.instance.start();
	}

	destroy(){
		delete this.instance;
		this.instance = null;
		this.canvasElement.remove();
		delete this.canvasElement;
	}

}

