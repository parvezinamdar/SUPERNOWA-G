import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConstantService } from 'src/app/services/constant.service';
import { Subscription } from 'rxjs';
import $ from "jquery";

@Component({
  selector: 'app-bet-dial',
  templateUrl: './bet-dial.component.html',
  styleUrls: ['./bet-dial.component.scss'],
})
export class BetDialComponent implements OnInit {

  @Input() selected: any;
  @Input() betState: any;
  @Input() state: any;

  quickBet = false;

  stake: number;
  stakeSubscription: Subscription;

  constructor(private data: ConstantService) {}

  @Output() messageEvent = new EventEmitter<boolean>();

  sendMessage() {
    this.messageEvent.emit(this.quickBet);
  }

  placeBet() {
    this.betState = "loading";
    this.selected = "false";
    new window.bootstrap.Toast(document.getElementById('success')).show();
    setTimeout((el) => { this.betState = null; }, 1000);
  }

  ngOnInit(): void {

    this.stakeSubscription = this.data.currentStake.subscribe(stake => this.stake = stake)

    let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

    let device = isMobile ? 'mobile' : 'desktop';

    var rotation = 0;

    $(document).on("change", "#flexSwitchCheckChecked", (el) => {
      if (document.querySelector("#flexSwitchCheckChecked:checked")) {
        if (!sessionStorage.getItem("quickBet")) {
          new window.bootstrap.Modal(document.getElementById('popModalDesktop')).show();
          sessionStorage.setItem("quickBet", "1");
        } else {
          $(".circle-container li").css({"opacity": "0.5", "pointer-events": "none"});
         $(".arrow-left").css({"opacity": "0.5", "pointer-events": "none"});
         $(".arrow-right").css({"opacity": "0.5", "pointer-events": "none"});
         $(this).css("background-color", "#036BA6");
         this.quickBet = true;
         this.sendMessage();
        }
      } else {
        $(".circle-container li.active").css({"opacity": "1"});
        $(".circle-container li").css({"pointer-events": "all"});
        $(".arrow-left").css({"opacity": "1", "pointer-events": "all"});
        $(".arrow-right").css({"opacity": "1", "pointer-events": "all"});
        $(this).css("background-color", "#ACACAC");
        this.quickBet = false;
        this.sendMessage();
      }
    });

    $(document).on("click", ".mobile.player-controls .button", (el) => {
      if (this.quickBet) {
        alert("Bet placed successfully!")
      } else {
        $(".mobile.player-controls").fadeOut();
        $(".tray").fadeOut();
        $(".mobile-dial").fadeIn();
      }
    });

    $(document).on("click", ".cancel", (el) => {
      $(".mobile.player-controls").fadeIn();
      $(".tray").fadeIn();
      $(".mobile-dial").fadeOut();
    });

    let $first = $('.desktop.circle-container li:first');
    let $last = $('.desktop.circle-container li:last');

    $(document).on("click", ".arrow-left", (el) => {
      rotation += 30;
      $(".desktop.circle-container").css({'transform' : 'scale(0.9) rotate('+ rotation +'deg)'});
      var $next;
      var $selected = $(".desktop.circle-container li.active");
      $next = $selected.prev('li').length > 0 ? $selected.prev('li') : $last;
      $selected.removeClass("active");
      $next.addClass('active');
      this.data.changeStake(parseInt($next.attr("value")));
    });

    $(document).on("click", ".arrow-right", (el) => {
      rotation -= 30;
      $(".desktop.circle-container").css({'transform' : 'scale(0.9) rotate('+ rotation +'deg)'});
      var $prev;
      var $selected = $(".desktop.circle-container li.active");
      $prev = $selected.next('li').length ? $selected.next('li') : $first;
      $selected.removeClass("active");
      $prev.addClass('active');
      this.data.changeStake(parseInt($prev.attr("value")));
    });

    $(document).on("click", ".c10", (el) => {
      rotation = 0;
      $(`.${device}.circle-container`).css({'transform': 'scale(0.9) rotate(0deg)'});
      $(`.${device}.circle-container li`).removeClass("active");
      $(el.target).addClass("active");
      this.data.changeStake(parseInt($(el.target).attr("value")));
    });

    $(document).on("click", ".c11", (el) => {
      rotation = -30;
      $(`.${device}.circle-container`).css({'transform': 'scale(0.9) rotate(-30deg)'});
      $(`.${device}.circle-container li`).removeClass("active");
      $(el.target).addClass("active");
      this.data.changeStake(parseInt($(el.target).attr("value")));
    });

    $(document).on("click", ".c12", (el) => {
      rotation = -60;
      $(`.${device}.circle-container`).css({'transform': 'scale(0.9) rotate(-60deg)'});
      $(`.${device}.circle-container li`).removeClass("active");
      $(el.target).addClass("active");
      this.data.changeStake(parseInt($(el.target).attr("value")));
    });

    $(document).on("click", ".c1", (el) => {
      rotation = -90;
      $(`.${device}.circle-container`).css({'transform': 'scale(0.9) rotate(-90deg)'});
      $(`.${device}.circle-container li`).removeClass("active");
      $(el.target).addClass("active");
      this.data.changeStake(parseInt($(el.target).attr("value")));
    });

    $(document).on("click", ".c2", (el) => {
      rotation = -120;
      $(`.${device}.circle-container`).css({'transform': 'scale(0.9) rotate(-120deg)'});
      $(`.${device}.circle-container li`).removeClass("active");
      $(el.target).addClass("active");
      this.data.changeStake(parseInt($(el.target).attr("value")));
    });

    $(document).on("click", ".c3", (el) => {
      rotation = -150;
      $(`.${device}.circle-container`).css({'transform': 'scale(0.9) rotate(-150deg)'});
      $(`.${device}.circle-container li`).removeClass("active");
      $(el.target).addClass("active");
      this.data.changeStake(parseInt($(el.target).attr("value")));
    });

    $(document).on("click", ".c4", (el) => {
      rotation = -180;
      $(`.${device}.circle-container`).css({'transform': 'scale(0.9) rotate(-180deg)'});
      $(`.${device}.circle-container li`).removeClass("active");
      $(el.target).addClass("active");
      this.data.changeStake(parseInt($(el.target).attr("value")));
    });

    $(document).on("click", ".c5", (el) => {
      rotation = -210;
      $(`.${device}.circle-container`).css({'transform': 'scale(0.9) rotate(-210deg)'});
      $(`.${device}.circle-container li`).removeClass("active");
      $(el.target).addClass("active");
      this.data.changeStake(parseInt($(el.target).attr("value")));
    });

    $(document).on("click", ".c6", (el) => {
      rotation = -240;
      $(`.${device}.circle-container`).css({'transform': 'scale(0.9) rotate(-240deg)'});
      $(`.${device}.circle-container li`).removeClass("active");
      $(el.target).addClass("active");
      this.data.changeStake(parseInt($(el.target).attr("value")));
    });

    $(document).on("click", ".c7", (el) => {
      rotation = -270;
      $(`.${device}.circle-container`).css({'transform': 'scale(0.9) rotate(-270deg)'});
      $(`.${device}.circle-container li`).removeClass("active");
      $(el.target).addClass("active");
      this.data.changeStake(parseInt($(el.target).attr("value")));
    });

    $(document).on("click", ".c8", (el) => {
      rotation = -300;
      $(`.${device}.circle-container`).css({'transform': 'scale(0.9) rotate(-300deg)'});
      $(`.${device}.circle-container li`).removeClass("active");
      $(el.target).addClass("active");
      this.data.changeStake(parseInt($(el.target).attr("value")));
    });

    $(document).on("click", ".c9", (el) => {
      rotation = -330;
      $(`.${device}.circle-container`).css({'transform': 'scale(0.9) rotate(-330deg)'});
      $(`.${device}.circle-container li`).removeClass("active");
      $(el.target).addClass("active");
      this.data.changeStake(parseInt($(el.target).attr("value")));
    });
  }

}
