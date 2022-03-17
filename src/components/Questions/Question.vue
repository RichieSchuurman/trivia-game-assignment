<template>
<h4>Question header</h4>
<div class="container">
<div class="show-questions">
</div>
<button type="button" class="btn btn-primary"  @click="someFunction">next question</button>
</div>
</template>

<script>

import { reactive } from 'vue';
import { getUrl } from "../../utils/triviaApi.js";
import { onBeforeMount } from 'vue';
import Question from './Question.vue';   

const storedquestions = JSON.parse(localStorage.getItem("questions"));

loopTroughQuestions();

function someFunction() {
    console.log("show some text");
}

function loopTroughQuestions(){
    let currentQuestionNumber = parseInt(localStorage.getItem("questionNumber"));
    console.log(storedquestions[currentQuestionNumber]);
    currentQuestionNumber++;
    localStorage.setItem("questionNumber", String(currentQuestionNumber));
    console.log("something");
}
</script>