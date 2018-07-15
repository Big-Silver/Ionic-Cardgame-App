import { Component, ContentChild, ElementRef, OnDestroy, ViewChild, Output, EventEmitter, HostListener } from '@angular/core';
import { animate, style, keyframes, animation } from '@angular/animations';
import { WinningAnimationStageComponent } from '../winning-animation-stage/winning-animation-stage';
import { WinningAnimationFooterComponent } from '../winning-animation-footer/winning-animation-footer';




@Component({
	selector: '[winning-animation-content]',
	templateUrl: 'winning-animation-content.html'
})
export class WinningAnimationContentComponent implements OnDestroy {

	@ContentChild(WinningAnimationStageComponent) stageComponent  : WinningAnimationStageComponent;
	@ContentChild(WinningAnimationFooterComponent) footerComponent : WinningAnimationFooterComponent;
	@ViewChild('nameWrapper') nameWrapperComponent : ElementRef;
	@ViewChild('nameWrapperGrid') nameGridWrapper : ElementRef;
	

	@Output() animationAborted : EventEmitter<any> = new EventEmitter();

	@HostListener('tap') tapListener(){
		this.isCancelled = true;
		this.animationAborted.emit();
	};

	private isCancelled = false;


	private nativeElement : HTMLElement = null;

	private playerImageElementWrapper : HTMLDivElement = null;
	private playerImageElement : HTMLImageElement = null;

	private playerFlagImageElementWrapper : HTMLDivElement = null;
	private playerFlagImageElement : HTMLImageElement = null;

	private playerNameWrapperElement : HTMLDivElement = null;
	private nameGridWrapperElement : HTMLDivElement = null;
	

	private playerRandomName = "Amari Jade";
	private playerRandomPrize = 300;


	
	constructor(
		private ele : ElementRef
	) {
		this.nativeElement = ele.nativeElement as HTMLElement;

	}

	initChildComponents(){
		let ownRect : any = this.getOwnBoundingRect();
		let yToReduce = ownRect.top;

		this.nameGridWrapperElement = this.nameGridWrapper.nativeElement as HTMLDivElement;
		
		this.addPlayerNameWrapper(yToReduce);
		this.addAndRotateThroughPlayerAndFlagImages(yToReduce);

	}

	private addPlayerNameWrapper(yToReduce){

		this.playerNameWrapperElement = this.nameWrapperComponent.nativeElement;

		let transformationData = this.getPlayerNameCoordsAndHeightAndWidth(yToReduce);
		this.applyTransformationToElement(this.playerNameWrapperElement, transformationData);

	}

	private addAndRotateThroughPlayerAndFlagImages(yToReduce){

		if(this.isCancelled == true){
			return;
		}

		let coords = null;
		let imageWithWrapper = this.createHiddenElement('img');

		this.playerImageElement = imageWithWrapper.element as HTMLImageElement;
		this.playerImageElementWrapper = imageWithWrapper.wrapper as HTMLDivElement;
		this.playerImageElement.classList.add('player-big-image');
		this.playerImageElementWrapper.classList.add('wrapper-player-big-image');

		coords = this.getPlayerImageCoordsAndHeightAndWidth(yToReduce);
		this.applyTransformationToElement(this.playerImageElementWrapper, coords);
		this.nativeElement.appendChild(this.playerImageElementWrapper);

		imageWithWrapper = this.createHiddenElement('img');

		this.playerFlagImageElement = imageWithWrapper.element as HTMLImageElement;
		this.playerFlagImageElementWrapper = imageWithWrapper.wrapper as HTMLDivElement;
		this.playerFlagImageElement.classList.add('player-flag-big-image');
		this.playerFlagImageElementWrapper.classList.add('wrapper-player-flag-big-image');

		coords = this.getPlayerFlagImageCoordsAndHeightAndWidth(yToReduce);
		this.applyTransformationToElement(this.playerFlagImageElementWrapper, coords);
		this.nativeElement.appendChild(this.playerFlagImageElementWrapper);
		this.playerFlagImageElementWrapper.style.zIndex = '8';

		this.rotateThroughImages();
	}


	private getOwnBoundingRect(){
		return this.nativeElement.getBoundingClientRect();
	}

	private createHiddenElement(elName){
		let wrapperElement = document.createElement('div') as HTMLElement;
		wrapperElement.style.position = 'absolute';
		wrapperElement.style.top = '0px';
		wrapperElement.style.bottom = '0px';
		wrapperElement.style.transformOrigin = 'top left';

		let element = document.createElement(elName) as HTMLElement;
		element.style.opacity = '0';

		wrapperElement.appendChild(element);
		return {
			element : element,
			wrapper : wrapperElement
		};
	}

	private applyTransformationToElement(wrapper, transformationData){
		wrapper.style.opacity = '1';
		wrapper.style.width  = transformationData.width+'px';
		wrapper.style.height = transformationData.height+'px';
		wrapper.style.transform = 'translate3d('+transformationData.x+'px, '+transformationData.y+'px, 0px)';
	}

	private getPlayerImageCoordsAndHeightAndWidth(heightToReduce : number = 0){

		let pos : any = this.stageComponent.getPlayerImagePosition();

		let playerImageHeight = pos.height - (16*2) - (2*2);
		let playerImageWidth = pos.width - (16*2) - (2*2);

		let playerX = pos.left + 16 + 2;
		let playerY = pos.top - heightToReduce + (16+2);

		return {
			x : playerX+0.5,
			y : playerY,
			height : playerImageHeight,
			width : playerImageWidth
		};

	}

	private getPlayerNameCoordsAndHeightAndWidth(heightToReduce : number = 0){

		let pos : any = this.stageComponent.getPlayerNamePosition(); 

		return {
			x : pos.left,
			y : pos.top - heightToReduce,
			height : pos.height,
			width : pos.width
		}

	}

	private getPlayerFlagImageCoordsAndHeightAndWidth(heightToReduce : number = 0){
		let pos : any = this.stageComponent.getPlayerFlagImagePosition();

		let playerImageHeight = pos.height - (3*2);
		let playerImageWidth = pos.width - (3*2);

		let playerX = pos.left + 3;
		let playerY = pos.top - heightToReduce + 3;

		return {
			x : playerX+0.5,
			y : playerY,
			height : playerImageHeight,
			width : playerImageWidth
		};
	}

	private rotateThroughImages(i = 10){

		if(this.footerComponent.isOver() == true){
			return;
		}

		if(this.isCancelled == true){
			return;
		}

		let imagesPath = [
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
			'./assets/images/profile/avatar17.svg'
		];

		let flagsPath = [
			'./assets/images/flag/PNG(retina)/abkhazia_circle_64x64.png',
			'./assets/images/flag/PNG(retina)/abkhazia_circle_64x64.png',
			'./assets/images/flag/PNG(retina)/aland_islands_circle_64x64.png',
			'./assets/images/flag/PNG(retina)/albania_circle_64x64.png',
			'./assets/images/flag/PNG(retina)/alderney_circle_64x64.png',
			'./assets/images/flag/PNG(retina)/algeria_circle_64x64.png',
			'./assets/images/flag/PNG(retina)/american_samoa_circle_64x64.png',
			'./assets/images/flag/PNG(retina)/andorra_circle_64x64.png',
			'./assets/images/flag/PNG(retina)/belarus_circle_64x64.png',
			'./assets/images/flag/PNG(retina)/bahamas_circle_64x64.png',
			'./assets/images/flag/PNG(retina)/barbados_circle_64x64.png',
			'./assets/images/flag/PNG(retina)/belgium_circle_64x64.png',
			'./assets/images/flag/PNG(retina)/belarus_circle_64x64.png',
			'./assets/images/flag/PNG(retina)/brazil_circle_64x64.png',
			'./assets/images/flag/PNG(retina)/burkina_faso_circle_64x64.png',
			'./assets/images/flag/PNG(retina)/turkmenistan_circle_64x64.png',
			'./assets/images/flag/PNG(retina)/ukraine_circle_64x64.png'
		];

		if(i !== null && i == 0){

			this.playerImageElement.classList.add('winning-big-pulse','animated');
			this.playerFlagImageElement.classList.add('winning-big-pulse','animated');
			this.nameGridWrapperElement.classList.add('winning-big-pulse','animated');
			this.stageComponent.pulsateImage();
			setTimeout(()=>{
				this.playerImageElement.classList.remove('winning-big-pulse','animated');
				this.playerFlagImageElement.classList.remove('winning-big-pulse','animated');
				this.nameGridWrapperElement.classList.remove('winning-big-pulse','animated');
				this.addUserToWinnerList({
					name : this.playerRandomName,
					playerImage : this.playerImageElement.src,
					flagImage : this.playerFlagImageElement.src
				});
			},2000);
			return;
		}
		

		if(i !== null && i > 0)
			i = i - 1;

		if(i===null){
			i = Math.floor(Math.random()*10);
		}

		let randomImagePath = imagesPath[Math.floor(imagesPath.length * Math.random())];
		let randomFlagImagePath = flagsPath[Math.floor(flagsPath.length * Math.random())];

		
		this.nameGridWrapperElement.style.opacity = '0';
		this.playerImageElement.style.opacity = '0';
		this.playerFlagImageElement.style.opacity = '0';
		this.playerImageElement.src = randomImagePath;
		this.playerFlagImageElement.src = randomFlagImagePath;

		this.playerImageElement.classList.add('fadeIn','fast-animated');
		this.playerImageElement.style.opacity = '1';

		this.playerFlagImageElement.classList.add('fadeIn','fast-animated');
		this.playerFlagImageElement.style.opacity = '1';

		if(i == 0){
			this.nameGridWrapperElement.classList.add('fadeIn','fast-animated');
			this.nameGridWrapperElement.style.opacity = '1';
		}

		setTimeout(()=>{
			requestAnimationFrame(()=>{
				this.playerImageElement.classList.remove('fadeIn','winning-big-pulse','fast-animated','animated');
				this.playerFlagImageElement.classList.remove('fadeIn','winning-big-pulse','fast-animated','animated');
				this.nameGridWrapperElement.classList.remove('fadeIn','winning-big-pulse','fast-animated','animated');
				requestAnimationFrame(()=>{
					this.rotateThroughImages(i);
				});
			});
		},300);
	}

	addUserToWinnerList(data){
		data.playerImage = '.'+data.playerImage.substr(data.playerImage.indexOf('assets') - 1);
		data.flagImage = '.'+data.flagImage.substr(data.flagImage.indexOf('assets') - 1);

		this.playerImageElement.classList.add('fadeOut','animated');
		this.playerFlagImageElement.classList.add('fadeOut','animated');
		this.nameGridWrapperElement.classList.add('fadeOut','animated');
		setTimeout(()=>{
			this.footerComponent.plyerAdded(data);
			setTimeout(()=>{
				if(this.footerComponent.isOver() == true){
					setTimeout(()=>{
						this.isCancelled = true;
						this.animationAborted.emit();
					},300);
					return;
				}
				this.playerImageElement.classList.remove('fadeOut','animated');
				this.playerFlagImageElement.classList.remove('fadeOut','animated');
				this.nameGridWrapperElement.classList.remove('fadeOut','animated');
				this.rotateThroughImages();
			},2000);
		},1000);
		
	}
	
	ngOnDestroy(){
		this.isCancelled = true;
	}

}
