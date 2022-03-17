<template>
  <h4>Question header</h4>
  <div class="container">
    <div id="question" class="show-questions">
      {{ questionString.value }}

      <button
        type="button"
        class="btn btn-primary"
        @click="loopTroughQuestions"
      >
        Next question
      </button>
      {{ firstAnwserString.value }}
      {{ secondAnwserString.value }}
      {{ thirdAnwserString.value }}
      {{ fourthAnwserString.value }}
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { shuffle } from "../../utils/shuffle.js";
import {useRouter} from 'vue-router'

let questionString = reactive({});
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

    console.log(question[currentQuestionNumber]);
    questionString.value = String(question[currentQuestionNumber]);

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

    currentQuestionNumber++;

    localStorage.setItem("questionNumber", String(currentQuestionNumber));
  }
  catch(error){
        router.push('/results')
  }
  
}
</script>
