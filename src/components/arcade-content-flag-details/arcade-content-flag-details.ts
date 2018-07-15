import { Component } from '@angular/core';
import {ViewController} from 'ionic-angular';

/**
 * Generated class for the ArcadeContentFlagDetailsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'arcade-content-flag-details',
  templateUrl: 'arcade-content-flag-details.html'
})
export class ArcadeContentFlagDetailsComponent {
  assetBaseUrl = "assets/images/flag/PNG(retina)/";
  popoverItemList = [
      {'name':'united_kingdom_circle_96x96','fullname':'English', 'src':(this.assetBaseUrl+'united_kingdom_circle_96x96.png')},
      {'name':'spain_circle_96x96','fullname':'Spanish', 'src':(this.assetBaseUrl+'spain_circle_96x96.png')},
      {'name':'france_circle_96x96','fullname':'French', 'src':(this.assetBaseUrl+'france_circle_96x96.png')},
      {'name':'germany_circle_96x96','fullname':'German', 'src':(this.assetBaseUrl+'germany_circle_96x96.png')},
      {'name':'china_circle_96x96','fullname':'Chinese', 'src':(this.assetBaseUrl+'china_circle_96x96.png')},
      {'name':'russia_circle_96x96','fullname':'Russian', 'src':(this.assetBaseUrl+'russia_circle_96x96.png')},
      {'name':'portugal_circle_96x96','fullname':'Portuguese', 'src':(this.assetBaseUrl+'portugal_circle_96x96.png')},
      {'name':'japan_circle_96x96','fullname':'Japanese', 'src':(this.assetBaseUrl+'japan_circle_96x96.png')}
  ];

  selectedTitle: string;
  constructor(private viewCtrl: ViewController) {
    this.selectedTitle = "united_kingdom_circle_96x96";
  }

   setSelectedTitle(selectedItem) {
    this.selectedTitle = selectedItem;
    this.viewCtrl.dismiss(this.selectedTitle);
  }

}
