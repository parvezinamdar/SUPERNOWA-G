import { Component, OnInit, Input } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-bet-dial',
  templateUrl: './bet-dial.component.html',
  styleUrls: ['./bet-dial.component.scss'],
})
export class BetDialComponent implements OnInit {

  @Input() selected: any;
  @Input() betState: any;

  quickBet = false;

  placeBet() {
    this.betState = "loading";
    this.selected = "false";
    setTimeout(() => { this.betState = "placed"; }, 1000);
  }

  constructor() {}

  ngOnInit(): void {
    var rotation = 0;

    $(document).on("change", "#flexSwitchCheckChecked", () => {
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
        }
      } else {
        $(".circle-container li.active").css({"opacity": "1"});
        $(".circle-container li").css({"pointer-events": "all"});
        $(".arrow-left").css({"opacity": "1", "pointer-events": "all"});
        $(".arrow-right").css({"opacity": "1", "pointer-events": "all"});
        $(this).css("background-color", "#ACACAC");
        this.quickBet = false;
      }
    });

    $(document).on("click", ".mobile.player-controls .button", () => {
      if (this.quickBet) {
        alert("Bet placed successfully!")
      } else {
        $(".mobile.player-controls").fadeOut();
        $(".tray").fadeOut();
        $(".mobile-dial").fadeIn();
      }
    });

    $(document).on("click", ".cancel", function() {
      $(".mobile.player-controls").fadeIn();
      $(".tray").fadeIn();
      $(".mobile-dial").fadeOut();
    });

    $(document).on("click", ".arrow-left", function() {
      var $first = $('.circle-container li:first');
      var $last = $('.circle-container li:last');
      rotation += 30;
      $(".circle-container").css({'transform' : 'scale(0.9) rotate('+ rotation +'deg)'});
      var $next;
      var $selected = $(".circle-container li.active");
      $next = $selected.prev('li').length ? $selected.prev('li') : $last;
      $selected.removeClass("active");
      $next.addClass('active');
    });

    $(document).on("click", ".arrow-right", function() {
      var $first = $('.circle-container li:first');
      var $last = $('.circle-container li:last');
      rotation -= 30;
      $(".circle-container").css({'transform' : 'scale(0.9) rotate('+ rotation +'deg)'});
      var $prev;
      var $selected = $(".circle-container li.active");
      $prev = $selected.next('li').length ? $selected.next('li') : $first;
      $selected.removeClass("active");
      $prev.addClass('active');
    });

    $(document).on("click", ".c10", function() {
      rotation = 0;
      $(".circle-container").css({'transform': 'scale(0.9) rotate(0deg)'});
      $(".circle-container li").removeClass("active");
      $(this).addClass("active");
    });

    $(document).on("click", ".c11", function() {
      rotation = -30;
      $(".circle-container").css({'transform': 'scale(0.9) rotate(-30deg)'});
      $(".circle-container li").removeClass("active");
      $(this).addClass("active");
    });

    $(document).on("click", ".c12", function() {
      rotation = -60;
      $(".circle-container").css({'transform': 'scale(0.9) rotate(-60deg)'});
      $(".circle-container li").removeClass("active");
      $(this).addClass("active");
    });

    $(document).on("click", ".c1", function() {
      rotation = -90;
      $(".circle-container").css({'transform': 'scale(0.9) rotate(-90deg)'});
      $(".circle-container li").removeClass("active");
      $(this).addClass("active");
    });

    $(document).on("click", ".c2", function() {
      rotation = -120;
      $(".circle-container").css({'transform': 'scale(0.9) rotate(-120deg)'});
      $(".circle-container li").removeClass("active");
      $(this).addClass("active");
    });

    $(document).on("click", ".c3", function() {
      $(".circle-container").css({'transform': 'scale(0.9) rotate(-150deg)'});
      $(".circle-container li").removeClass("active");
      $(this).addClass("active");
    });

    $(document).on("click", ".c4", function() {
      $(".circle-container").css({'transform': 'scale(0.9) rotate(-180deg)'});
      $(".circle-container li").removeClass("active");
      $(this).addClass("active");
    });

    $(document).on("click", ".c5", function() {
      $(".circle-container").css({'transform': 'scale(0.9) rotate(-210deg)'});
      $(".circle-container li").removeClass("active");
      $(this).addClass("active");
    });

    $(document).on("click", ".c6", function() {
      $(".circle-container").css({'transform': 'scale(0.9) rotate(-240deg)'});
      $(".circle-container li").removeClass("active");
      $(this).addClass("active");
    });

    $(document).on("click", ".c7", function() {
      $(".circle-container").css({'transform': 'scale(0.9) rotate(-270deg)'});
      $(".circle-container li").removeClass("active");
      $(this).addClass("active");
    });

    $(document).on("click", ".c8", function() {
      $(".circle-container").css({'transform': 'scale(0.9) rotate(-300deg)'});
      $(".circle-container li").removeClass("active");
      $(this).addClass("active");
    });

    $(document).on("click", ".c9", function() {
      $(".circle-container").css({'transform': 'scale(0.9) rotate(-330deg)'});
      $(".circle-container li").removeClass("active");
      $(this).addClass("active");
    });
  }

}
