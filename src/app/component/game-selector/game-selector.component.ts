import { Component, OnInit } from '@angular/core';
import { ConstantService } from 'src/app/services/constant.service';

import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-game-selector',
  templateUrl: './game-selector.component.html',
  styleUrls: ['./game-selector.component.scss']
})

export class GameSelectorComponent implements OnInit {

  public keepOriginalOrder = (a, b) => a.key

  constructor(private data: ConstantService) {}

  games: any;

  gameList: any;

  public config: SwiperConfigInterface = {
    centeredSlides: true,
    loop: true,
    observer: true,
    spaceBetween: 10,
    slideToClickedSlide: true,
    slidesPerView: "auto",
    watchSlidesVisibility: true,
    loopedSlides: 9,
    navigation: true
  };

  ngOnInit(): void {
    this.gameList = this.data.gameList;
  }

}
