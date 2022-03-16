<template>
<h1>Will show question</h1>
<Question :questionProp="currentQuestion.value"/>
</template>


<script setup>
import { reactive } from 'vue';
import { onBeforeMount } from 'vue';
import Question from './Question.vue';

const currentQuestion = reactive({})

onBeforeMount(()=> {
    fetch("https://opentdb.com/api.php?amount=1&category=15&difficulty=easy&type=multiple")
    .then(response => response.json())
    .then(result => currentQuestion.value = result)
})
</script>