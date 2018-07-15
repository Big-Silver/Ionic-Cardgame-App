import { Component, Output, EventEmitter } from '@angular/core';
import { WheelSelector, DefaultItem } from '@ionic-native/wheel-selector';

@Component({
	selector: 'new-home-basic-information',
	templateUrl: 'new-home-basic-information.html'
})
export class NewHomeBasicInformationComponent {

	@Output() goBack : EventEmitter<any> = new EventEmitter(); 
	@Output() ageOrNameIsInvalid : EventEmitter<any> = new EventEmitter(); 
	@Output() ageOrNameIsValid : EventEmitter<any> = new EventEmitter(); 

	private selectedGender : string  = "MALE";
	private age : number = null;
	private isFading = false;
	private ages = [];
	private nickName = '';

	constructor(
		private wheelSelector : WheelSelector
	) {

		let i = 16;
		while(i < 90){
			let string  = ( i < 10 ) ? '0'+i : i+'';
			this.ages.push({value : i, description : string});
			i++;
		}
	}

	ageChanged(){
		if(parseInt(this.age+'') <= 17){
			this.startFading();
		}
	}

	startFading(){
		
		if(this.isFading == true) return;
		this.isFading = true;
		setTimeout(()=>{
			this.isFading = false;
		},2000);

	}

	ageFocused(){

		let item : DefaultItem  = {index : 0, value : '01'};

		if(this.age > 0){
			item = { index : 0, value : this.ages[this.age-1].description};
		}

		this.wheelSelector.show({
			title: "Select",
			items:[
				this.ages
			],
			defaultItems : [item],
			positiveButtonText: "Done",
			negativeButtonText: "Cancel"
		}).then((data)=>{

			this.age = null;

			if(!data) return;
			if(!Array.isArray(data)) return;
			if(data.length == 0) return;


			this.age = this.ages[data[0].index].value;
			this.ageChanged();
			this.checkForAgeAndName();

		},(err)=>{
		});

	}

	checkForAgeAndName(){
		if(!this.nickName || !this.age || this.age < 18){
			return this.ageOrNameIsInvalid.emit();
		}
		return this.ageOrNameIsValid.emit();
	}




}
