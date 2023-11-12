<template>
  <div v-for="question in questions" :key="question.id" class="survey">
    {{ question.id }} - {{ question.question }}
    <div v-for="answer in question.answers" :key="answer.id" class="answers">
      {{ answer.text }}
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const questions = ref([])

    onMounted(async () => {
      import('../questions.json')
        .then((module) => {
          questions.value = module.default
        })
        .catch((error) => {
          console.error('Error importing questions.json:', error)
        })
    })

    return {
      questions
    }
  }
}
</script>
