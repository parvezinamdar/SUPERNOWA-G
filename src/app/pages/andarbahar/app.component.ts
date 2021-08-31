import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantService } from 'src/app/services/constant.service';

@Component({
  selector: 'app-andarbahar',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../shared.scss']
})

export class AndarbaharComponent implements OnInit {
  state = "new";
  selected = "false";
  @Input() betState = null;

  player = "Bet for";
  odds = null;
  IsOneClick = false;

  timeLeft: number = 60;
  interval: any;

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.betState = null;
        this.selected = "false";
        this.state = "new";
        const buttons = document.querySelectorAll('.button');
        buttons.forEach(el => el.classList.remove("active"));
        this.timeLeft = 60;
      }

      // Sequence
      if (this.timeLeft <= 60) {
        this.state = "new";
      }
      if (this.timeLeft <= 50) {
        this.state = "bet";
      }
      if (this.timeLeft <= 20) {
        this.state = "open";
      }
    }, 1000)
  }

  constructor(
    public constant: ConstantService,
    public router: Router
  ) {}

  GameList: any;
  CurrentGame: string;
  GameCode: string;
  GameStatus: number = 1;

  AddBet(player, odds) {
    if (this.GameStatus === 1) {
      if (this.IsOneClick) {
        // this.ValidateBet();
      } else {
        this.player = player;
        this.odds = odds;
      }
    } else {
      // this.toastr.error('Betting closed. You can\'t bet right now.');
    }
  }

  ngOnInit() {
    this.GameList = this.constant.gameList;
    this.GameCode = this.router.url.replace('/','');
    this.CurrentGame = this.GameList[this.GameCode].name;
    
    this.startTimer();

    const buttons = document.querySelectorAll('.button');

    buttons.forEach(el => el.addEventListener('click', event => {
      buttons.forEach(el => el.classList.remove("active"));
      el.classList.add("active");
      this.selected = "true";
    }));
  }
}
