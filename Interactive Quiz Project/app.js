const questions = [
  {
      question: 'What is the baby of a moth known as?',
      choices: ['baby', 'infant', 'kit', 'larva'],
      correctAnswer: 3
  },
  {
      question: 'What is the adult of a kid called?',
      choices: ['calf', 'doe', 'goat', 'chick'],
      correctAnswer: 2
  },
  {
      question: 'What is the young of buffalo called?',
      choices: ['calf', 'baby', 'pup', 'cow'],
      correctAnswer: 0
  },
  {
      question: 'What is a baby alligator called?',
      choices: ['baby', 'gator', 'hatchling', 'calf'],
      correctAnswer: 1
  },
  {
      question: 'What is a baby goose called?',
      choices: ['gooser', 'gosling', 'gup', 'pup'],
      correctAnswer: 1
  }
];

let currentQuestion = 0;
let correctAnswers = 0;
let quizOver = false;

window.addEventListener('DOMContentLoaded', function(e){
  displayCurrentQuestion();

  var quizMessage = document.querySelector('.quizMessage');

      quizMessage.style.display = 'none';

  document.querySelector('.nextButton').addEventListener('click', function(){
      
      if(!quizOver){
          var radioBtnsChecked = document.querySelector('input[type=radio]:checked');

          if (radioBtnsChecked === null){
              quizMessage.innerText = 'Please select an answer';
              quizMessage.style.display = 'block';
          } else {
              console.log(radioBtnsChecked.value);
              quizMessage.style.display = 'none';
              if (parseInt(radioBtnsChecked.value) === questions[currentQuestion].correctAnswer){
                  correctAnswers++;
              }

              currentQuestion++;

              if (currentQuestion < questions.length){
                  displayCurrentQuestion();
              } else {
                  displayScore();
                  document.querySelector('.nextButton').innerText = 'Play Again?';
                  quizOver = true;
               }
              }   
      } else {
          quizOver = false;
          document.querySelector('.nextButton').innerText = 'Next Question';
          resetQuiz();
          displayCurrentQuestion();
          hideScore();
      }
  });
});