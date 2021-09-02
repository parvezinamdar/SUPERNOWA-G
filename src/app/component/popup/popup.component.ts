import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantService } from 'src/app/services/constant.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input() GameHistoryList: any;
  @Input() GameHistoryDetails: any = [];
  @Input() GameDetails: any;

  GameList: any;
  CurrentGame: string;
  GameCode: string;
  GameStatus: number = 1;

  state = "closed";

  SetHistoryCards(item) {
    this.state = "open";
    this.GameHistoryDetails = item;
  }

  constructor(
    public constant: ConstantService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.GameList = this.constant.gameList;
    this.GameCode = this.router.url.replace('/','');
    this.CurrentGame = this.GameList[this.GameCode].name;

    if (this.GameCode=='TP' || this.GameCode=='TP20') {
      this.GameHistoryDetails = { Winner: '', WinningHand: ''};
      this.GameHistoryList = [
        {
          'Winner': 'Player A',
          'WinningHand': 'Pair'
        },
        {
          'Winner': 'Player A',
          'WinningHand': 'Pair'
        },
        {
          'Winner': 'Player A',
          'WinningHand': 'Pair'
        },
        {
          'Winner': 'Player A',
          'WinningHand': 'Pair'
        },
        {
          'Winner': 'Player A',
          'WinningHand': 'Pair'
        }
      ];
    } 

    if (this.GameCode=='AB' || this.GameCode=='GAB') {
      this.GameHistoryDetails = { Winner: '', WinningHand: ''};
      this.GameHistoryList = [
        {
          'Winner': 'Andar',
          'WinningHand': 'Pair'
        },
        {
          'Winner': 'Andar',
          'WinningHand': 'Pair'
        },
        {
          'Winner': 'Andar',
          'WinningHand': 'Pair'
        },
        {
          'Winner': 'Bahar',
          'WinningHand': 'Pair'
        },
        {
          'Winner': 'Bahar',
          'WinningHand': 'Pair'
        }
      ];
    }

    if (this.GameCode=='DT') {
      this.GameHistoryDetails = { Winner: '', WinningHand: { Dragon: '', Tiger: '', DragonSuite: '', TigerSuite: ''} };
      this.GameHistoryList = [
        {
          'Winner': 'Tiger',
          'WinningHand': {
            'Dragon': 'Odd',
            'Tiger': 'Even',
            'DragonSuite': 'Black',
            'TigerSuite': 'Black'
          }
        }
      ];
    }

    if (this.GameCode=='RPS') {
      this.GameHistoryDetails = { Winner: '', WinningHand: {Silver: '', Gold: ''}};
      this.GameHistoryList = [
        {
          'Winner': 'Gold',
          'WinningHand': {
            'Silver': 'Rock',
            'Gold': 'Paper'
          }
        }
      ];
    }

    if (this.GameCode=='WM') {
      this.GameHistoryDetails = { Winner: '', WinningHand: ''};
      this.GameHistoryList = [
        {
          'Winner': '6',
          'WinningHand': 'DP'
        }
      ];
    }

    if (this.GameCode=='PP') {
      this.GameHistoryDetails = { Winner: '', WinningHand: ''};
      this.GameHistoryList = [
        {
          'Winner': 'Player C',
          'WinningHand': 'High Card'
        }
      ];
    }

    if (this.GameCode=='ARW') {
      this.GameHistoryDetails = { Winner: '', WinningHand: { Hand: '', Suite: '', Seven: ''}};
      this.GameHistoryList = [
        {
          'Winner': 'Akbar',
          'WinningHand': {
            'Hand': 'Even',
            'Suite': 'Red',
            'Seven': 'Below 7'
          }
        }
      ];
    }

    if (this.GameCode=='LS') {
      this.GameHistoryDetails = { Winner: '', WinningHand: ''};
      this.GameHistoryList = [
        {
          'Winner': '7UP',
          'WinningHand': 'Odd'
        }
      ];
    }

    if (this.GameCode=='TTC') {
      this.GameHistoryDetails = { Winner: '', WinningHand: ''};
      this.GameHistoryList = [
        {
          'Winner': 'Player 10',
          'WinningHand': 'Odd'
        }
      ];
    }

    if (this.GameCode=='PK') {
      this.GameHistoryDetails = { Winner: '', WinningHand: ''};
      this.GameHistoryList = [
        {
          'Winner': 'Player A',
          'WinningHand': 'Pair'
        }
      ];
    }

    if (this.GameCode=='JK') {
      this.GameHistoryDetails = { Winner: '', WinningHand: { Type: '', Color: '', Suite: ''}};
      this.GameHistoryList = [
        {
          'Winner': '7',
          'WinningHand': {
            'Type': 'Number',
            'Color': 'Black',
            'Suite': 'Spade'
          }
        }
      ];
    }

    if (this.GameCode=='BC') {
      this.GameHistoryDetails = { Winner: '', WinningHand: '', PlayerAScore: '', PlayerBScore: ''};
      this.GameHistoryList = [
        {
          'Winner': 'Player',
          'WinningHand': 'Score 8',
          'PlayerAScore': 10,
          'PlayerBScore': 7
        }
      ];
    }

    if (this.GameCode=='KR') {
      this.GameHistoryDetails = { Winner: '', WinningHand: { Hand: '', Color: ''}};
      this.GameHistoryList = [
        {
          'Winner': 'Diamond',
          'WinningHand': {
            'Hand': 'Odd',
            'Color': 'Black'
          }
        }
      ];
    }

    if (this.GameCode=='CQ') {
      this.GameHistoryDetails = { Winner: ''};
      this.GameHistoryList = [
        {
          'Winner': 'Player 1'
        }
      ];
    }

  }
}
