import { defineStore } from 'pinia'

export const useSurveyStore = defineStore('survey', {
  state: () => ({
    scores: {
      Classical: 0,
      Mime: 0,
      Jester: 0,
      SillyBilly: 0,
      Rodeo: 0
    },
    currentQuestionIndex: 0
  }),
  getters: {
    // Define any getters to compute derived state here
  },
  actions: {
    resetScores() {
      this.scores = { Classical: 0, Mime: 0, Jester: 0, SillyBilly: 0, Rodeo: 0 }
    },
    // Increment the score for a clown type
    incrementScore(clownType, value) {
      if (this.scores.hasOwnProperty(clownType)) {
        this.scores[clownType] += value
      }
    },
    nextQuestion() {
      this.currentQuestionIndex++
    },
    // get the highest scoring clown type
    determineClownType() {
      const clownTypes = Object.keys(this.scores)
      let maxScore = -Infinity
      let maxType = ''

      clownTypes.forEach((type) => {
        if (this.scores[type] > maxScore) {
          maxScore = this.scores[type]
          maxType = type
        }
      })

      return maxType
    }
  }
})
