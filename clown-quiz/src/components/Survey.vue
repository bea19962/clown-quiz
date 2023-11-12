<template>
  <div class="survey" v-if="surveyStore.currentQuestion">
    <div :key="surveyStore.currentQuestion.id">
      {{ surveyStore.currentQuestion.id }} - {{ surveyStore.currentQuestion.question }}
      <div v-for="answer in surveyStore.currentQuestion.answers" :key="answer.text" class="answers">
        {{ answer.text }}
      </div>
    </div>
    <button @click="surveyStore.prevQuestion" :disabled="isFirstQuestion">
      Previous
    </button>
    <button @click="surveyStore.nextQuestion" :disabled="isLastQuestion">
      Next
    </button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useSurveyStore } from '../stores/surveyStore';

const surveyStore = useSurveyStore();

onMounted(async () => {
  if (surveyStore.questions.length === 0) { // Only load questions if they haven't been loaded yet
    import('../questions.json')
      .then((module) => {
        surveyStore.loadQuestions(module.default);
      })
      .catch((error) => {
        console.error('Error importing questions.json:', error);
      });
  }
});
</script>
