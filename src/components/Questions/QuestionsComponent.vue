<template>
<header class="question-header">
  <h2>Question {{ questionNumberString.value +1 }}</h2>
  <p class="question-text"> {{ questionString.value }} </p>
</header>
  <div class="container">
    <div class="show-questions">
      <div v-if="questionType === 'multiple'" class="d-grid gap-2 col-12 mx-auto question-buttons">
        <button type="button" class="btn btn-primary" @click="checkAnswer(firstAnwserString.value)"> {{ firstAnwserString.value }} </button>
        <button type="button" class="btn btn-primary" @click="checkAnswer(secondAnwserString.value)"> {{ secondAnwserString.value }} </button>
        <button type="button" class="btn btn-primary" @click="checkAnswer(thirdAnwserString.value)"> {{ thirdAnwserString.value }} </button>
        <button type="button" class="btn btn-primary" @click="checkAnswer(fourthAnwserString.value)"> {{ fourthAnwserString.value }} </button>
      </div>

      <div v-if="questionType === 'boolean'" class="d-grid gap-2 col-12 mx-auto question-buttons">
        <button type="button" class="btn btn-primary" @click="checkAnswer(firstAnwserString.value)"> {{ firstAnwserString.value }} </button>
        <button type="button" class="btn btn-primary" @click="checkAnswer(secondAnwserString.value)"> {{ secondAnwserString.value }} </button>
      </div>

    </div>
  </div>
</template>

<script>
</script>

<script setup>
import { reactive } from "vue";
import { shuffle } from "../../utils/shuffle.js";
import { useRouter } from 'vue-router'

// Add reactive variables
let questionString = reactive({});
let questionNumberString = reactive({});
let firstAnwserString = reactive({});
let secondAnwserString = reactive({});
let thirdAnwserString = reactive({});
let fourthAnwserString = reactive({});

// Get the different variables out of localStorage to be reused
let question = JSON.parse(localStorage.getItem("questions"));
let questionType = localStorage.getItem("type");
let correctAnswers = JSON.parse(localStorage.getItem("correctAnswer"));
let incorrectAnswers = JSON.parse(localStorage.getItem("incorrectAnswer"));

let score = parseInt(localStorage.getItem("score"))
console.log( "undefined? " +localStorage.getItem("questions"))

let currentQuestionNumber = parseInt(localStorage.getItem("questionNumber"));

// Declare different empty arrays to later fill with localStorage
let userGivenAnswers= [];
let allcorrectAnswers = [];
let resultQuestions = [];

const router = useRouter()

loopTroughQuestions();

// As the quiz goes on you're looping through the amount of given questions
function loopTroughQuestions() {
  try{

    questionString.value = String(question[currentQuestionNumber]);
    questionNumberString.value = (currentQuestionNumber);

    let allAnswers = [];
    let currentCorrectAnswer = correctAnswers[(currentQuestionNumber)];
    let currentIncorrectAnswers = incorrectAnswers[currentQuestionNumber];

    allAnswers.push(currentCorrectAnswer);
    allcorrectAnswers.push(currentCorrectAnswer);
    resultQuestions.push(questionString.value);


    currentIncorrectAnswers.forEach((currentIncorrectAnswer) =>
      allAnswers.push(currentIncorrectAnswer)
    );
    allAnswers = shuffle(allAnswers);

    // After filling the AllAnswers array with the correct and incorrect answers and shuffling them
    // The different reactives are given a value to be reused for the buttons.
    firstAnwserString.value = allAnswers[0];
    secondAnwserString.value = allAnswers[1];
    thirdAnwserString.value = allAnswers[2];
    fourthAnwserString.value = allAnswers[3];

    currentQuestionNumber++;

    localStorage.setItem("questionNumber", String(currentQuestionNumber));
  }
  catch(error){
        // When you run out of questions you'll be redirected to the results page
        // Where the different questions and answers are set in localstorage
        localStorage.setItem("resultQuestions", resultQuestions)
    
        let givenAnswersArrayStringified = String(userGivenAnswers)
        localStorage.setItem("userAnswers", givenAnswersArrayStringified);

        let correctAnswersArrayStringified = String(allcorrectAnswers);
        localStorage.setItem("correctAnswers", correctAnswersArrayStringified);

        router.push('/results')
  }
  
}

// Check the user answers and add score
function checkAnswer(answer){
  userGivenAnswers.push(answer);
  console.log(correctAnswers[currentQuestionNumber - 1])
  if(answer == correctAnswers[currentQuestionNumber - 1]){
    score= score +10
    localStorage.setItem("score", score)
  }
  loopTroughQuestions();
}
</script>


<style lang="scss" scoped>
@import "../../utils/main.scss";
</style>
