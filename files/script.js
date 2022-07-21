let rendomNum = Math.trunc(Math.random() * 20 + 1);
let Score = document.querySelector('.score');
var highscore = 0;
// massage funtion
var disPlayMassage = Massage => {
  document.querySelector('.message').textContent = Massage;
};
// colour change  funtion
let colours = color => {
  document.querySelector('body').style.backgroundColor = color;
};
//  scores change  funtion
let scores = document.querySelector('.score');
scores.textContent = 20;
var scoreChange = 20;

//  check btn fuction
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    disPlayMassage('wrong number');
    colours('#F60000');
  } else if (scoreChange == 0) {
    colours('#F60000');
    disPlayMassage('Game over');
  } else if (guess > rendomNum) {
    disPlayMassage('To Large');
    console.log((scores.innerHTML = --scoreChange));
  } else if (guess < rendomNum) {
    disPlayMassage('To Small');
    scores.textContent = --scoreChange;
  } else if (guess == rendomNum) {
    disPlayMassage('You win');
    colours('#60b347');
    // highscore condition
    if (scoreChange > highscore) {
      highscore = scoreChange;
      document.querySelector('.highscore').textContent = highscore;
      document.querySelector('.number').textContent = rendomNum;
    }
  }
});
// reset butn
document.querySelector('.again').addEventListener('click', function () {
  scoreChange = 20;
  scores.textContent = scoreChange;
  rendomNum = Math.trunc(Math.random() * 20 + 1);
  colours('#603958');
  console.log('two', rendomNum);
  disPlayMassage('Start guessing..');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
