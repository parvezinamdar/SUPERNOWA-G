const STANDARD = 0;
const EUCHRE = 1;
const PINOCHLE = 2;

var cards = (function() {
  var opt = {
    cardSize: {
      width: 30,
      height: 45,
      padding: 1
    },
    animationSpeed: 500,
    table: 'body',
    cardback: 'red',
    acesHigh: false,
    cardsUrl: './assets/images/back.png',
    blackJoker: false,
    redJoker: false,
    type: STANDARD,
    loop: 1
  };
  var zIndexCounter = 1;
  var all = [];
  var start = 1;
  var end = start + 12;

  function mouseEvent(ev) {
    var card = $(this).data('card');
    if (card.container) {
      var handler = card.container._click;
      if (handler) {
        handler.func.call(handler.context || window, card, ev);
      }
    }
  }

  function init(options) {
    if (options) {
      for (var i in options) {
        if (opt.hasOwnProperty(i)) {
          opt[i] = options[i];
        }
      }
    }
    switch (opt.type) {
      case STANDARD:
        opt.acesHigh = false;
        start = opt.acesHigh ? 2 : 1;
        end = start + 12;
        break;
      case EUCHRE:
        start = 9;
        end = start + 5;
        break;
      case PINOCHLE:
        start = 9;
        end = start + 5;
        opt.loop = 2;
        break;
    }

    opt.table = $(opt.table)[0];
    for (let l = 0; l < opt.loop; l++)
      for (var i = start; i <= end; i++) {
        all.push(new Card('h', i, opt.table));
        all.push(new Card('s', i, opt.table));
        all.push(new Card('d', i, opt.table));
        all.push(new Card('c', i, opt.table));
      }
    if (opt.blackJoker) {
      all.push(new Card('bj', 0, opt.table));
    }
    if (opt.redJoker) {
      all.push(new Card('rj', 0, opt.table));
    }

    $('.card').click(mouseEvent);
  }

  function Card(suit, rank, table) {
    this.init(suit, rank, table);
  }

  Card.prototype = {
    init: function(suit, rank, table) {
      this.shortName = suit + rank;
      this.suit = suit;
      this.rank = rank;
      this.name = suit.toUpperCase() + rank;
      this.faceUp = false;
      this.el = $('<div/>').css({
        width: opt.cardSize.width,
        height: opt.cardSize.height,
        "background-image": 'url(' + opt.cardsUrl + ')',
        position: 'absolute',
        backgroundSize: 'cover'
      }).addClass('card').data('card', this).appendTo($(table));
      this.showCard();
      this.moveToFront();
    },

    toString: function() {
      return this.name;
    },

    moveTo: function(x, y, speed, callback) {
      var props = {
        top: y - (opt.cardSize.height / 2)+'%',
        left: x - (opt.cardSize.width / 2)+'%'
      };
      $(this.el).animate(props, speed || opt.animationSpeed, callback);
    },

    showCard: function(image) {
      if (image != undefined) {
        $(this.el).css('background-image', 'url(./assets/images/card.png)');
      }
    },

    hideCard: function(position) {
      var y = opt.cardback == 'red' ? 0 * opt.cardSize.height : -1 * opt.cardSize.height;
    },

    moveToFront: function() {
      $(this.el).css('z-index', zIndexCounter++);
    }
  };

  function Container() {

  }

  Container.prototype = new Array();
  Container.prototype.extend = function(obj) {
    for (var prop in obj) {
      this[prop] = obj[prop];
    }
  }
  Container.prototype.extend({
    addCard: function(card) {
      this.addCards([card]);
    },

    addCards: function(cards) {
      for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        if (card.container) {
          card.container.removeCard(card);
        }
        this.push(card);
        card.container = this;
      }
    },

    removeCard: function(card) {
      for (var i = 0; i < this.length; i++) {
        if (this[i] == card) {
          this.splice(i, 1);
          return true;
        }
      }
      return false;
    },

    init: function(options) {
      options = options || {};
      this.x = options.x || $(opt.table).width() / 2;
      this.y = options.y || $(opt.table).height() / 2;
      this.faceUp = options.faceUp;
    },

    click: function(func, context) {
      this._click = {
        func: func,
        context: context
      };
    },

    mousedown: function(func, context) {
      this._mousedown = {
        func: func,
        context: context
      };
    },

    mouseup: function(func, context) {
      this._mouseup = {
        func: func,
        context: context
      };
    },

    render: function(options) {
      options = options || {};
      var speed = options.speed || opt.animationSpeed;
      this.calcPosition(options);
      for (var i = 0; i < this.length; i++) {
        var card = this[i];
        zIndexCounter++;
        card.moveToFront();
        var top = parseInt($(card.el).css('top'));
        var left = parseInt($(card.el).css('left'));
        if (top != card.targetTop || left != card.targetLeft) {
          var props = {
            top: card.targetTop+'%',
            left: card.targetLeft+'%',
            queue: false
          };
          $(card.el).css(props);
        }
      }
      var me = this;
      var flip = function(image) {
        for (var i = 0; i < me.length; i++) {
          if (me.faceUp) {
            me[i].showCard(image);
          } else {
            me[i].hideCard(image);
          }
        }
      }
      flip(options?.image);

      if (options.callback) {
        setTimeout(options.callback, speed);
      }
    },

    topCard: function() {
      return this[this.length - 1];
    },

    toString: function() {
      return 'Container';
    }
  });

  function Deck(options) {
    this.init(options);
  }

  Deck.prototype = new Container();
  Deck.prototype.extend({
    calcPosition: function(options) {
      options = options || {};
      var left = Math.round(this.x - opt.cardSize.width / 2, 0);
      var top = Math.round(this.y - opt.cardSize.height / 2, 0);
      var condenseCount = 6;
      for (var i = 0; i < this.length; i++) {
        if (i > 0 && i % condenseCount == 0) {
          top -= 0.1;
          left -= 0.1;
        }
        this[i].targetTop = top;
        this[i].targetLeft = left;
      }
    },

    toString: function() {
      return 'Deck';
    },

    deal: function(count, hands, speed, callback) {
      var me = this;
      var i = 0;
      var totalCount = count * hands.length;

      function dealOne() {
        if (me.length == 0 || i == totalCount) {
          if (callback) {
            callback();
          }
          return;
        }
        hands[i % hands.length].addCard(me.topCard());
        hands[i % hands.length].render({
          callback: dealOne,
          speed: speed
        });
        i++;
      }
      dealOne();
    }
  });

  function Hand(options) {
    this.init(options);
  }
  Hand.prototype = new Container();
  Hand.prototype.extend({
    calcPosition: function(options) {
      options = options || {};
      var width = opt.cardSize.width + (this.length - 1) * opt.cardSize.padding;
      var left = Math.round(this.x);
      var top = Math.round(this.y - opt.cardSize.height / 2, 0);
      for (var i = 0; i < this.length; i++) {
        this[i].targetTop = top;
        this[i].targetLeft = left + i * opt.cardSize.padding;
      }

    },

    toString: function() {
      return 'Hand';
    }
  });

  function Pile(options) {
    this.init(options);
  }

  Pile.prototype = new Container();
  Pile.prototype.extend({
    calcPosition: function(options) {
      options = options || {};
    },

    toString: function() {
      return 'Pile';
    },

    deal: function(count, hands) {
      if (!this.dealCounter) {
        this.dealCounter = count * hands.length;
      }
    }
  });


  return {
    init: init,
    all: all,
    options: opt,
    SIZE: opt.cardSize,
    Card: Card,
    Container: Container,
    Deck: Deck,
    Hand: Hand,
    Pile: Pile
  };
})();

if (typeof module !== 'undefined') {
  module.exports = cards;
}