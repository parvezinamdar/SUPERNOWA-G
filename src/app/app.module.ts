import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GamesComponent } from './pages/games/games.component';
import { VideoplayerComponent } from './component/videoplayer/videoplayer.component';
import { GameSelectorComponent } from './component/game-selector/game-selector.component';
import { HeaderComponent } from './component/header/header.component';
import { ActionTrayComponent } from './component/action-tray/action-tray.component';
import { PopupComponent } from './component/popup/popup.component';
import { BetDialComponent } from './component/bet-dial/bet-dial.component';
import { BetSlipComponent } from './component/bet-slip/bet-slip.component';
import { RulesComponent } from './component/rules/rules.component';

import { AndarbaharComponent } from './pages/andarbahar/app.component';
import { TtcardsComponent } from './pages/ttcards/app.component';
import { Lucky7Component } from './pages/lucky7/app.component';
import { ArwComponent } from './pages/arw/app.component';
import { Teenpatti20Component } from './pages/teenpatti20/app.component';
import { TeenpattiComponent } from './pages/teenpatti/app.component';
import { BaccaratComponent } from './pages/baccarat/app.component';
import { GabComponent } from './pages/gab/app.component';
import { DragontigerComponent } from './pages/dragontiger/app.component';
import { JokerComponent } from './pages/joker/app.component';
import { RockpaperscissorsComponent } from './pages/rockpaperscissors/app.component';
import { WorlimatkaComponent } from './pages/worlimatka/app.component';
import { KingraceComponent } from './pages/kingrace/app.component';
import { PattiplayerComponent } from './pages/pattiplayer/app.component';
import { CasinoqueenComponent } from './pages/casinoqueen/app.component';
import { PokerComponent } from './pages/poker/app.component';

const routes: Routes = [
  {
    path: '',
    component: GamesComponent,
    pathMatch: 'full'
  },
  {
    path: 'TP20',
    component: Teenpatti20Component,
    pathMatch: 'full'
  },
  {
    path: 'TP',
    component: TeenpattiComponent,
    pathMatch: 'full'
  },
  {
    path: 'AB',
    component: AndarbaharComponent,
    pathMatch: 'full'
  },
  {
    path: 'TTC',
    component: TtcardsComponent,
    pathMatch: 'full'
  },
  {
    path: 'LS',
    component: Lucky7Component,
    pathMatch: 'full'
  },
  {
    path: 'ARW',
    component: ArwComponent,
    pathMatch: 'full'
  },
  {
    path: 'BC',
    component: BaccaratComponent,
    pathMatch: 'full'
  },
  {
    path: 'DT',
    component: DragontigerComponent,
    pathMatch: 'full'
  },
  {
    path: 'GAB',
    component: GabComponent,
    pathMatch: 'full'
  },
  {
    path: 'JK',
    component: JokerComponent,
    pathMatch: 'full'
  },
  {
    path: 'RPS',
    component: RockpaperscissorsComponent,
    pathMatch: 'full'
  },
  {
    path: 'WM',
    component: WorlimatkaComponent,
    pathMatch: 'full'
  },
  {
    path: 'KR',
    component: KingraceComponent,
    pathMatch: 'full'
  },
  {
    path: 'PP',
    component: PattiplayerComponent,
    pathMatch: 'full'
  },
  {
    path: 'CQ',
    component: CasinoqueenComponent,
    pathMatch: 'full'
  },
  {
    path: 'PK',
    component: PokerComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    VideoplayerComponent,
    GamesComponent,
    Teenpatti20Component,
    GameSelectorComponent,
    HeaderComponent,
    ActionTrayComponent,
    PopupComponent,
    BetDialComponent,
    BetSlipComponent,
    RulesComponent,
    AndarbaharComponent,
    TtcardsComponent,
    Lucky7Component,
    ArwComponent,
    TeenpattiComponent,
    BaccaratComponent,
    GabComponent,
    DragontigerComponent,
    JokerComponent,
    RockpaperscissorsComponent,
    WorlimatkaComponent,
    KingraceComponent,
    PattiplayerComponent,
    CasinoqueenComponent,
    PokerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }