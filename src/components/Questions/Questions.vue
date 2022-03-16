<template>
<section id="questions">
    <div class="container">
        <h1>Question 1 - 10</h1>
        <Question :questionProp="currentQuestion.value"/>
        </div>
</section>
</template>


<script setup>
import { reactive } from 'vue';
import { getUrl } from "../../utils/triviaApi.js";
import { onBeforeMount } from 'vue';
import Question from './Question.vue';

const currentQuestion = reactive({})

onBeforeMount(()=> {
    fetch(localStorage.getItem('questionURL'))
    .then(response => response.json())
    .then(result => currentQuestion.value = result)
})
</script>