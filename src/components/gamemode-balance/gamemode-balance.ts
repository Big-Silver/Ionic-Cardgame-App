import { Component, Input } from '@angular/core';

@Component({
  selector: 'gamemode-balance',
  templateUrl: 'gamemode-balance.html'
})
export class GamemodeBalanceComponent {

  @Input() balance1 : number;
  @Input() balance2 : number;
  @Input() balance3 : number;

  private tokenRed = './assets/images/arcade/token-red.png';
  private tokenBlue = './assets/images/arcade/token-blue.png';
  private tokenYellow = './assets/images/arcade/token-yellow.png';

  constructor() {
  }

}
