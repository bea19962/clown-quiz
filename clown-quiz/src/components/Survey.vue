<template>
  <div>
    <Question v-if="!isSurveyComplete" :question="currentQuestion" @answerSelected="handleAnswer" />
    <Result v-else :result="surveyResult" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useSurveyStore } from '@/stores/surveyStore'
import Question from './Question.vue'
import Result from './Result.vue'

const surveyStore = useSurveyStore()
const isSurveyComplete = computed(() => surveyStore.currentQuestionIndex >= questions.length)
const currentQuestion = computed(() => questions[surveyStore.currentQuestionIndex])

function handleAnswer(clownType, value) {
  surveyStore.incrementScore(clownType, value)
  if (!isSurveyComplete.value) {
    surveyStore.nextQuestion()
  }
}

const surveyResult = computed(() => surveyStore.determineClownType())
</script>
