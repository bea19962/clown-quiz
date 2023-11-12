<template>
  <div class="survey" v-if="currentQuestion">
    <div :key="surveyStore.currentQuestion.id">
      {{ surveyStore.currentQuestion.id }} - {{ surveyStore.currentQuestion.question }}
      <Answers :answers="currentQuestion.answers" :questionId="currentQuestion.id"/>
    </div>
    <button @click="prevQuestion">Previous</button>
    <button @click="nextQuestion">Next</button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useSurveyStore } from '../stores/surveyStore'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import Answers from './Answers.vue';

const router = useRouter();

const surveyStore = useSurveyStore()
const { currentQuestion, isFirstQuestion, isLastQuestion } = storeToRefs(surveyStore)

function prevQuestion() {
  if (!isFirstQuestion.value) {
    surveyStore.prevQuestion()
  } else {
    router.push('/')
  }
}

function nextQuestion() {
  if (!isLastQuestion.value) {
    surveyStore.nextQuestion()
  } else {
    router.push('/result')
  }
}

onMounted(async () => {
  if (surveyStore.questions.length === 0) {
    // Only load questions if they haven't been loaded yet
    import('../questions.json')
      .then((module) => {
        surveyStore.loadQuestions(module.default)
      })
      .catch((error) => {
        console.error('Error importing questions.json:', error)
      })
  }
})
</script>
