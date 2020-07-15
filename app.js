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
  overlay.setAttribute('style', 'display:none;');
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
    if (arr[i] !== ' ') {
      li.className = 'letter';
    } else {
      li.className = 'space';
    }
  phraseUl.appendChild(li);
  }  
}

// check to see if the letter is in the phrase
const checkLetter = button => {

}

// check if the game has been won or lost
const checkWin = () => {

}


// listen of the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {

});



