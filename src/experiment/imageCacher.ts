import { cache_prepare_for_navigation } from './caching';

export  function ImageCacher(arr){

	return (target)=>{

		var originalIonViewWillEnter : Function = target.prototype.ionViewWillEnter;


		target.prototype.ionViewWillEnter = function(){

			setTimeout(()=>{
				cache_prepare_for_navigation(arr);
			},1000);
			
			if(originalIonViewWillEnter &&  typeof originalIonViewWillEnter == 'function'){
				originalIonViewWillEnter.apply(this,[]);
			}
				
		}
		
	}

}
