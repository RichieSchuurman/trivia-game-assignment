<template>
    <header class="results-header">

      <h1>Trivia results</h1>
      <h2>your score: {{score}}</h2>

      <table class="table table-striped table-dark">
        <thead>
            <tr>
            <th scope="col">Question</th>
            <th scope="col">Right Answer</th>
            <th scope="col">your answer</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(answer, index) in userAnswersArray">
                <td> {{questionsArray[index]}}</td>
                <td>{{correctAnswersArray[index]}}</td>
                <td>{{answer}}</td>
            </tr>
        </tbody>
    </table>
    </header>
    <br>
</template>

<script setup>
    import { reactive } from "vue";

    const score = localStorage.getItem("score")

    const userAnswers = localStorage.getItem("userAnswers")
    const userAnswersArray = userAnswers.split(",");

    const correctAnswers = localStorage.getItem("correctAnswers")
    const correctAnswersArray = correctAnswers.split(",");

    const questions = localStorage.getItem("resultQuestions")
    const questionsArray = questions.split(",");

    console.log(localStorage.getItem("questionNumber"))


</script>

<style lang="scss" scoped>
    @import "../../utils/main.scss";
</style>