<template>
<header class="question-header">
  <h2>Question {{ questionNumberString.value +1 }}</h2>
  <p class="question-text"> {{ questionString.value }} </p>
</header>
  <div class="container">
    <div class="show-questions">
      <div class="d-grid gap-2 col-12 mx-auto question-buttons">
        <button type="button" class="btn btn-primary" @click="loopTroughQuestions"> {{ firstAnwserString.value }} </button>
        <button type="button" class="btn btn-primary" @click="loopTroughQuestions"> {{ secondAnwserString.value }} </button>
        <button type="button" class="btn btn-primary" @click="loopTroughQuestions"> {{ thirdAnwserString.value }} </button>
        <button type="button" class="btn btn-primary" @click="loopTroughQuestions"> {{ fourthAnwserString.value }} </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { shuffle } from "../../utils/shuffle.js";
import {useRouter} from 'vue-router'

let questionString = reactive({});
let questionNumberString = reactive({});
let firstAnwserString = reactive({});
let secondAnwserString = reactive({});
let thirdAnwserString = reactive({});
let fourthAnwserString = reactive({});

let question = JSON.parse(localStorage.getItem("questions"));
let correctAnswers = JSON.parse(localStorage.getItem("correctAnswer"));
let incorrectAnswers = JSON.parse(localStorage.getItem("incorrectAnswer"));

const router = useRouter()

loopTroughQuestions();

function loopTroughQuestions() {
  try{
    let currentQuestionNumber = parseInt(
      localStorage.getItem("questionNumber")
    );
    
    questionString.value = String(question[currentQuestionNumber]);
    questionNumberString.value = (currentQuestionNumber);

    let allAnswers = [];

    let currentCorrectAnswer = correctAnswers[currentQuestionNumber];
    let currentIncorrectAnswers = incorrectAnswers[currentQuestionNumber];

    allAnswers.push(currentCorrectAnswer);

    currentIncorrectAnswers.forEach((currentIncorrectAnswer) =>
      allAnswers.push(currentIncorrectAnswer)
    );
    allAnswers = shuffle(allAnswers);

    firstAnwserString.value = allAnswers[0];
    secondAnwserString.value = allAnswers[1];
    thirdAnwserString.value = allAnswers[2];
    fourthAnwserString.value = allAnswers[3];

    //Debug logs
    console.log(currentQuestionNumber);
    console.log(question[currentQuestionNumber]);
    console.log(currentCorrectAnswer); 
    console.log(currentIncorrectAnswers);

    currentQuestionNumber++;

    localStorage.setItem("questionNumber", String(currentQuestionNumber));
  }
  catch(error){
        router.push('/results')
  }
  
}
</script>

<style lang="scss" scoped>
@import "../../utils/main.scss";
</style>
