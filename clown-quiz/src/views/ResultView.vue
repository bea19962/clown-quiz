<template>
 <div class="results">
  YOU ARE A CLOWN
  <button @click=retryQuiz()>Retry</button>
 </div>
</template>

<script setup>
import { useSurveyStore } from '../stores/surveyStore'
import { useRouter } from 'vue-router'

const router = useRouter()

const surveyStore = useSurveyStore()

function retryQuiz() {
 surveyStore.resetScores()
  router.push('/')
}
</script>