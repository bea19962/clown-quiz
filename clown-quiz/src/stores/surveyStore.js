import { defineStore } from 'pinia'

export const useSurveyStore = defineStore('survey', {
  state: () => ({
    questions: [],
    currentQuestionIndex:0,
}),
getters: {
  currentQuestion: (state) => state.questions[state.currentQuestionIndex] || null,
},
actions: {
  loadQuestions(questionData){
    this.questions = questionData;
  },
  nextQuestion(){
    if(this.currentQuestionIndex < this.questions.length-1){
      this.currentQuestionIndex++;
    }
  },
  prevQuestion(){
    if(this.currentQuestionIndex > 0){
      this.currentQuestionIndex--;
    }
  },
  setQuestionIndex(index) {
    if(index >= 0 && index < this.questions.length){
      this.currentQuestionIndex = index
    }
  }
}
})
