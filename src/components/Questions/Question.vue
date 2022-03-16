<template>
<h4>Single question: {{props.questionProp.question}} </h4>
</template>

<script setup>
const props = defineProps({ questionProp: Object });
</script>