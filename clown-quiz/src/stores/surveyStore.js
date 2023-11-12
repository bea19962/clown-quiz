import { defineStore } from 'pinia'

export const useSurveyStore = defineStore('survey', {
  state: () => ({
    questions: [],
    currentQuestionIndex: 0,
    scores: {
      Classical: 0,
      Mime: 0,
      Jester: 0,
      SillyBilly: 0,
      Rodeo: 0
    }
  }),
  getters: {
    currentQuestion: (state) => state.questions[state.currentQuestionIndex] || null,
    isFirstQuestion: (state) => state.currentQuestionIndex === 0,
    isLastQuestion: (state) => state.currentQuestionIndex === state.questions.length - 1
  },
  actions: {
    loadQuestions(questionData) {
      this.questions = questionData
    },
    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++
      }
    },
    prevQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--
      }
    },
    setQuestionIndex(index) {
      if (index >= 0 && index < this.questions.length) {
        this.currentQuestionIndex = index
      }
    },
    resetScores() {
      this.scores = { Classical: 0, Mime: 0, Jester: 0, SillyBilly: 0, Rodeo: 0 }
    },
    incrementScore(clownType, value) {
      if (this.scores.hasOwn(clownType)) {
        this.scores[clownType] += value
      }
    }
  }
})
