class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // invoke the method whenever the game is loaded
    this.shuffleCard();
  }

  shuffleCards() {
         // ... write your code here
      if(!this.cards) return undefined;

      for(let i = this.cards.length - 1; i >= 0; i--) {
          let selectCardIndex = Math.floor(Math.random() * (i + 1));
          [this.cards[i], this.cards[selectCardIndex]] = [this.cards[selectCardIndex], this.cards[i]];

      }
  }


  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1;

    if (card1 === card2){
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
      if(this.cards.length / 2 > this.pairsGuessed){
      return false;
    } else {
      return true;
    }
  }
}
