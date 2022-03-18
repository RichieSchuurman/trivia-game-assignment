<template>
  <header class="results-header">
    <h1>Trivia results</h1>
    <h2>your score: {{ score }}</h2>
  </header>
  <div class="container">
    <div class="results-table-container">
      <table class="table results-table">
        <thead class="results-table-header">
          <tr>
            <th scope="col">Question</th>
            <th scope="col">Right Answer</th>
            <th scope="col">your answer</th>
          </tr>
        </thead>
        <tbody>
          <tr class="results-table-content" v-for="(answer, index) in userAnswersArray">
            <td class="questions-column">{{ questionsArray[index] }}</td>
            <td class="correct-answer-column">{{ correctAnswersArray[index] }}</td>
            <td class="user-answer-column" :class="
                {correctColor: answer == correctAnswersArray[index], incorrectColor: answer != correctAnswersArray[index]}">
                {{ answer }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row button-row">
        <div class="col-12 text-center result-buttons">
            <button type="button" class="btn btn-primary" @click="goToStart">Back to start</button>
            <button type="button" class="btn btn-primary">Play again</button>
        </div>
    </div>
  </div>
</template>

<script setup>

import { reactive } from "vue";
import {useRouter} from 'vue-router'
import { updateScore } from "../../utils/api.js";

// Get the results from the quiz out of localStorage so its reusable in the table
const score = localStorage.getItem("score");
updateScore(parseInt(score))
const userAnswers = localStorage.getItem("userAnswers");
const userAnswersArray = userAnswers.split(",");

const correctAnswers = localStorage.getItem("correctAnswers");
const correctAnswersArray = correctAnswers.split(",");

const questions = localStorage.getItem("resultQuestions");
const questionsArray = questions.split(",");

const router = useRouter();

function goToStart() {
    router.push('/')
}

</script>

<style lang="scss" scoped>
@import "../../utils/main.scss";
</style>
