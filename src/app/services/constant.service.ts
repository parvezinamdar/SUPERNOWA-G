import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  private stakeSource = new BehaviorSubject(123456);
  currentStake = this.stakeSource.asObservable();

  changeStake(stake: number) {
    this.stakeSource.next(stake)
  }

  // GameStatus: any = {
  //   0: 'New Game Starting',
  //   1: 'Rates',
  //   2: 'New Card Opening',
  //   3: 'Winner'
  // };

  // private gameStatus = new BehaviorSubject(0);
  // currentStatus = this.gameStatus.asObservable();

  // changeStatus(status: number) {
  //   this.gameStatus.next(status)
  // }

  constructor() { }

  gameList: any = {
    AB: {
      'name': 'Andar Bahar',
      'imagePath': '/assets/images/game.jpg'
    },
    TTC: {
      'name': '32 Cards',
      'imagePath': '/assets/images/game.jpg'
    },
    LS: {
      'name': 'Lucky 7',
      'imagePath': '/assets/images/game.jpg'
    },
    ARW: {
      'name': 'Akbar Romeo Walter',
      'imagePath': '/assets/images/game.jpg'
    },
    TP: {
      'name': 'Teen Patti',
      'imagePath': '/assets/images/game.jpg'
    },
    TP20: {
      'name': 'Teen Patti 2020',
      'imagePath': '/assets/images/game.jpg'
    },
    PP: {
      'name': '3 Patti 3 Player',
      'imagePath': '/assets/images/game.jpg'
    },
    BC: {
      'name': 'Baccarat',
      'imagePath': '/assets/images/game.jpg'
    },
    DT: {
      'name': 'Dragon Tiger',
      'imagePath': '/assets/images/game.jpg'
    },
    GAB: {
      'name': "Goa's Andar Bahar",
      'imagePath': '/assets/images/game.jpg'
    },
    JK: {
      'name': 'Joker',
      'imagePath': '/assets/images/game.jpg'
    },
    RPS: {
      'name': 'Rock Paper Scissors',
      'imagePath': '/assets/images/game.jpg'
    },
    WM: {
      'name': 'Worli Matka',
      'imagePath': '/assets/images/game.jpg'
    },
    KR: {
      'name': 'King Race',
      'imagePath': '/assets/images/game.jpg'
    },
    PK: {
      'name': 'Poker',
      'imagePath': '/assets/images/game.jpg'
    },
    CQ: {
      'name': 'Casino Queen',
      'imagePath': '/assets/images/game.jpg'
    },
    ABRNG: {
      'name': 'Andar Bahar (RNG)',
      'imagePath': '/assets/images/game.jpg'
    }
  };

  defaultChipsSetting = [
    { name: '500', value: '500' },
    { name: '1000', value: '1000' },
    { name: '5000', value: '5000' },
    { name: '10K', value: '10000' },
    { name: '50K', value: '50000' },
    { name: '100K', value: '100000' },
  ];

}
