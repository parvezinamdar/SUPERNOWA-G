import { Component, OnInit, Input } from '@angular/core';
import { ConstantService } from 'src/app/services/constant.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.scss']
})
export class BetSlipComponent {

  @Input() player: any;
  @Input() odds: any = null;
  @Input() selected: any;

  constructor(private data: ConstantService) {}

  stake: number;
  subscription: Subscription;

  ngOnInit(): void {
    this.subscription = this.data.currentStake.subscribe(stake => this.stake = stake)
  }

}
