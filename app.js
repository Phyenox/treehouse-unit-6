const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.getElementsByClassName('btn__reset');
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

btnReset.addEventListener('click', e => {

});

// get a random phrase from the phrases array
const getRandomPhrase = arr => {
   let randomPhrase = Math.floor(Math.random() *phrases.length);
   for(let value of arr) return arr[randomPhrase];
}

