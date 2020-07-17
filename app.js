const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const phraseUl = document.querySelector('#phrase ul');
const startGame = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
let missed = 0;

const phrases = [
    'giant coconut crab',
    'tufted deer',
    'red velvet ant',
    'pink fairy armadillo',
    'bird of paradise',
    'japanese spider crab',
    'goblin shark',
    'hummingbird hawk moth',
    'thorny dragon',
    'venezuelan poodle moth'
];

// listen for the start game button to be pressed then display random phrase
startGame.addEventListener('click', () => {
  overlay.setAttribute('style', 'display:none');
  addPhraseToDisplay(getRandomPhrase(phrases));         
});

// get a random phrase from the phrases array
const getRandomPhrase = arr => {
   let randomPhrase = Math.floor(Math.random() *phrases.length);
   for(let value of arr) return arr[randomPhrase];
}

// adds the letters of a string to the display
function addPhraseToDisplay(arr) {
  for( let i = 0; i < arr.length; i++) {
    let li = document.createElement('li');
    li.textContent = arr[i];
    if (arr[i] === ' ') {
      li.className = 'space';
    } else {
      li.className = 'letter';
    }
  phraseUl.appendChild(li);
  }  
}

// Checking for letter
function checkLetter(letter) {
  let checkLetter = document.getElementsByClassName('letter');
  let match = null;
  for( let i = 0; i < checkLetter.length; i++){
  if( letter.textContent.toLowerCase() === checkLetter[i].textContent.toLowerCase()) {
    checkLetter[i].classList.add('show');
    match = checkLetter[i];
  }
 }
 return match;
}

// listen of the onscreen keyboard to be clicked and remove hearts 
qwerty.addEventListener('click', (e) => {
   if(e.target.tagName === 'BUTTON') {
    const button = e.target;
    button.disabled = true;
    button.classList.add('chosen');
    const letterCheck = checkLetter(button);
    if(letterCheck === null) {
      missed += 1;
      heart = document.querySelector('.tries');
      let scoreboard = document.querySelector('#scoreboard ol');
      scoreboard.removeChild(heart);
      const lostHeart = document.createElement('li');
      lostHeart.innerHTML = '<img src="images/lostHeart.png" height="35px" width="30px">';
      lostHeart.style.marginRight = '4px';
      scoreboard.appendChild(lostHeart);
    } 
  }   
  checkWin();
});

// check if the game has been won or lost
const checkWin = () => {
  let total = document.getElementsByClassName('letter').length;
  let correctLetters = document.getElementsByClassName('show').length;
  if ( correctLetters === total) {
    overlay.classList.add('win');
    overlay.textContent = 'Congratulations, you won!';
    overlay.style.display = 'flex';
  } else if (missed > 4) {
    overlay.classList.add('lose');
    overlay.textContent = 'Sorry, you lost.'
    overlay.style.display = 'flex';
    startGame.style.display = 'show';

  }
}

function restart () {
  
}


