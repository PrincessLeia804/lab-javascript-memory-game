const cards = [
    { name: 'aquaman', img: 'aquaman.jpg' },
    { name: 'batman', img: 'batman.jpg' },
    { name: 'captain america', img: 'captain-america.jpg' },
    { name: 'fantastic four', img: 'fantastic-four.jpg' },
    { name: 'flash', img: 'flash.jpg' },
    { name: 'green arrow', img: 'green-arrow.jpg' },
    { name: 'green lantern', img: 'green-lantern.jpg' },
    { name: 'ironman', img: 'ironman.jpg' },
    { name: 'spiderman', img: 'spiderman.jpg' },
    { name: 'superman', img: 'superman.jpg' },
    { name: 'the avengers', img: 'the-avengers.jpg' },
    { name: 'thor', img: 'thor.jpg' },
    { name: 'aquaman', img: 'aquaman.jpg' },
    { name: 'batman', img: 'batman.jpg' },
    { name: 'captain america', img: 'captain-america.jpg' },
    { name: 'fantastic four', img: 'fantastic-four.jpg' },
    { name: 'flash', img: 'flash.jpg' },
    { name: 'green arrow', img: 'green-arrow.jpg' },
    { name: 'green lantern', img: 'green-lantern.jpg' },
    { name: 'ironman', img: 'ironman.jpg' },
    { name: 'spiderman', img: 'spiderman.jpg' },
    { name: 'superman', img: 'superman.jpg' },
    { name: 'the avengers', img: 'the-avengers.jpg' },
    { name: 'thor', img: 'thor.jpg' }
  ];


  class MemoryGame {
    constructor(cards) {
      this.cards = cards;
      // add the rest of the class properties here
      this.pickedCards = [];
      this.pairsClicked = 0;
      this.pairsGuessed = 0;
    }

    shuffle(deck) {
        if(!deck) return undefined;

        let shuffledDeck = []

        for(let i = deck.length - 1; i >= 0; i--) {
            let selectCardIndex = Math.floor(Math.random() * i)
            shuffledDeck.unshift(deck[selectCardIndex])
            deck.splice(selectCardIndex,1)
        }
        console.log(shuffledDeck.length);
        return shuffledDeck
    }


    shuffleCards(cardsArr) {
      // ... write your code here
      // fisher yates: shuffle - random pick - shuffle - random pick
      if(!cardsArr) return undefined;
  
      // new card-order
      let newlyShuffled = [];
  
        for (let i = cardsArr.length; i > 0; i--){
          // select random pick, reduce max after each round
          let randomPick = Math.floor(Math.random() * i);
  
          // move random card to the end of the newlyShuffled array
        //   newlyShuffled.unshift(cardsArr.splice(randomPick, 1)); // copies the object inside of an array, not just the object
          newlyShuffled.unshift(cardsArr[randomPick])



          // move last card to randomPicks place
          let lastCardInDeck = cardsArr.pop();
          cardsArr.splice(randomPick, 0, lastCardInDeck);
  
  
        }
      return newlyShuffled;
    }

checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1;

    if (card1["name"] === card2["name"]){
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }
  }

let myGame = new MemoryGame(cards);
// console.log(myGame.shuffleCards(cards));
console.log(myGame.checkIfPair(cards[0], cards[2]));