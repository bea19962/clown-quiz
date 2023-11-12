<template>
 <div class="answers">
   <div v-for="answer in props.answers" :key="answer.text" class="answer">
     <input type="radio" :id="answer.text" :value="answer.text" :name="`answer-${props.questionId}`" />
     <label :for="answer.text">{{ answer.text }}</label>
   </div>
 </div>
</template>

<script setup>
const props = defineProps({
 answers: Array,
 questionId: Number
});
</script>
