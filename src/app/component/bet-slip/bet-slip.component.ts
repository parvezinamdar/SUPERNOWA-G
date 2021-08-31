import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.scss']
})
export class BetSlipComponent {

  @Input() player: any;
  @Input() odds: any = null;
  @Input() selected: any;
  @Input() stake = 2;

  constructor() { }

}
