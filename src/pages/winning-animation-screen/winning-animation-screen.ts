import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { CurtainComponent } from '../../components/curtain/curtain';
import { WinningAnimationContentComponent } from '../../components/winning-animation-content/winning-animation-content';

@Component({
	selector: 'page-winning-animation-screen',
	templateUrl: 'winning-animation-screen.html',
})
export class WinningAnimationScreenPage {

	@ViewChild(WinningAnimationContentComponent) contentComponent : WinningAnimationContentComponent;
	@ViewChild(CurtainComponent) curtain :CurtainComponent;

	@ViewChild('wrapperScreen') wrapper : ElementRef; 

	private curtainActive = true;
	private showCloseButton = false;
	private isFirstTime = true;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private view : ViewController
	) {
	}

	ionViewDidLoad() {
	}

	ionViewDidEnter(){
		if(this.isFirstTime == true){
			this.isFirstTime = false;
			setTimeout(()=>{
				this.curtain.doRemoveCurtain();
			},2500);
		}
	}

	initChildComponents(){
		this.contentComponent.initChildComponents();
	}

	scrollToBottom(){
		(this.wrapper.nativeElement as HTMLElement).style.transform = 'translate3d(0px,-50%,0px)';
		setTimeout(()=>{
			this.showCloseButton = true;
		},3000);
	}

	dismissView(){
		this.view.dismiss();
	}

}
