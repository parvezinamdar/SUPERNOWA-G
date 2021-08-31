import { Component, OnInit, Input } from '@angular/core';
import { ConstantService } from 'src/app/services/constant.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {

  public keepOriginalOrder = (a, b) => a.key

  constructor(private data: ConstantService) {}
  
  gameList: any;

  ngOnInit(): void {
    this.gameList = this.data.gameList;
  }

}
