import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ConstantService } from 'src/app/services/constant.service';
import Swiper, { Navigation } from 'swiper';

@Component({
  selector: 'app-game-selector',
  templateUrl: './game-selector.component.html',
  styleUrls: ['./game-selector.component.scss']
})
export class GameSelectorComponent implements AfterViewInit {

  public keepOriginalOrder = (a, b) => a.key

  constructor(private data: ConstantService) {}

  games: any;

  gameList: any;

  ngOnInit(): void {
    this.gameList = this.data.gameList;
  }

  ngAfterViewInit(): void {

    this.games = new Swiper('.swiper-container', {
        slidesPerView: 1.5,
        spaceBetween: 10,
        breakpoints: {
          768: {
            slidesPerView: 5,
          }
        }
      });
  }

}
