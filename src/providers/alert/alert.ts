import { Injectable,  } from '@angular/core';
import { AlertController, Alert, AlertOptions } from 'ionic-angular';

@Injectable()
export class AlertProvider {


	constructor(
		private alert : AlertController
	){
	}

	create(text, timeout = 0, options : AlertOptions = {}) : Alert{

		let alert = this.alert.create({
			cssClass : 'custom-alert',
			title : text,
			...options
		});

		if(timeout > 0){
			alert.present();
			setTimeout(()=>{
				if(alert){
					alert.dismiss();
				}
			},timeout);
		}

		return alert;
		
	}

}
