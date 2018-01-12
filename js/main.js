// Create array to store all card objects
var cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];
 
// Array to store cards in play
var cardsInPlay = [];

var checkForMatch = function() {
  // Check to see if two cards have been played
  if (cardsInPlay.length == 2){
    if (cardsInPlay[0] === cardsInPlay[1]){
      alert("You found a match!");
    } else {
      alert("Sorry, try again");
    } 
    cardsInPlay = [];
  }
};
 

// Function for when user flips a card
var flipCard = function() {
  // Get card that was just flipped and store it
  var cardId = this.getAttribute('data-id');
  console.log("User flipped " + (cards[cardId].rank));
  // Display card face
  this.src = cards[cardId].cardImage;
  // Add card to cards that are in play
  cardsInPlay.push(cards[cardId].rank);
  // If so, check for match function
  checkForMatch();
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
};

// Create board function
var createBoard = function() {
  // Loop through the cards array
  for (var i = 0; i < cards.length; i++) {
    // Create Element method for card display 
    var cardElement = document.createElement('img');
    // Set Attribute method to display back of card that was just clicked, which is stored in cardImage property of cards array
    cardElement.setAttribute('src', "images/back.png");
    // Set Attribute method again to set atrribute to be index of current element (data- stores data not tied to a style)
    cardElement.setAttribute('data-id', i);
    // Event Listener method for when user clicks, a card flip function triggers
    cardElement.addEventListener('click', flipCard);
    // Append Child method to append the current cardElement to gameboard
    document.getElementById('game-board').appendChild(cardElement);
  }
};

// Function to create board
createBoard();