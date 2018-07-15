import { Component } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';


@Component({
  selector: 'page-how-to-play',
  templateUrl: 'how-to-play.html',
})
export class HowToPlayPage {

  shownGroup = null;

  diseases = [
    { title: "How to play current game?", description: "We have a tier and badging system to ensure that you are playing those of the same skill level as you." },
    { title: "What prizes can i get?", description: "We have a tier and badging system to ensure that you are playing those of the same skill level as you." },
    { title: "Fun and Fair?", description: "We have a tier and badging system to ensure that you are playing those of the same skill level as you." },
    { title: "What prizes can i get?", description: "We have a tier and badging system to ensure that you are playing those of the same skill level as you." },
  ];

  params:any = {
    title: "",
    description: "",
    class: 'arcade'
  }


  constructor(public navCtrl: NavController, 
    public viewCtrl: ViewController,
    public navParams: NavParams) {

      this.params = this.navParams.get('data');
  }

  ionViewDidLoad() {
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  };
  isGroupShown(group) {
    return this.shownGroup === group;
  };

}
