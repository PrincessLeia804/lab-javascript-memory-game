class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
         // ... write your code here
      if(!this.cards) return undefined;

      let shuffledDeck = [];

      for(let i = this.cards.length - 1; i >= 0; i--) {
          let selectCardIndex = Math.floor(Math.random() * i);
          shuffledDeck.unshift(this.cards[selectCardIndex]);
          this.cards.splice(selectCardIndex,1);
      }

      return this.cards = shuffledDeck;
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
    if (!this.pairsGuessed || this.pairsGuessed < this.cards.length / 2) {
      return false;
    } else {
      return true;
    }
  }

/* Shashika's code
  if (this.pairsGuessed === 0) {
    return false;
  } else if (this.pairsGuessed < this.cards.length / 2) {
    return false;
  } else {
    return true;
  } */

/* Nicola's code
  if(this.pairsGuessed<this.cards.length/2) return false 
    else return true
  }
  */


}
