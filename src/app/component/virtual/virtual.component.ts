import { Component, OnInit } from '@angular/core';
declare const cards: any;
declare const STANDARD: any;

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.scss']
})

export class VirtualComponent implements OnInit {

  animation = 'breathe';

  setAnimation(animation) {
	  this.animation = animation;
	  setTimeout(() => {
		this.animation = 'breathe';
	  }, 3000);
  }

  constructor() { }

  ngOnInit(): void {
	cards.init({table:'#card-table', type:STANDARD});
	let deck = new cards.Deck();
	deck.x = 95;
	deck.y = 65;

	deck.addCards(cards.all);
	deck.render();

	let andar = new cards.Hand({faceUp:true,  x: 25, y:65});
	let bahar = new cards.Hand({faceUp:true,  x: 25, y:80});

	let n = 0;
	deck.click((card) => {
		this.setAnimation('gesture-A');
		if (card === deck.topCard()) {
			n += 1;
			if (n%2 == 0) {
				andar.addCard(deck.topCard());
				andar.render({image: './assets/images/card.png'});
			} else {
				bahar.addCard(deck.topCard());
				bahar.render({image: './assets/images/card.png'});
			}
		}
	});
  }

}