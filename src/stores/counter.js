import { defineStore } from 'pinia'
import {vragen} from '../assets/questions';

const useCounterStore = defineStore('counter', {
  state: () => ({
    money: 0,
    currentQuestion: null,
    questions: vragen
  }),
  getters: {
    getMoney: (state) => state.money,
    getQuestion: (state) => {
      const index = state.currentQuestion || 0;
      return state.questions[index];
    }
  },
  actions: {
    setStates(states) {
      Object.keys(states).forEach((key) => {
        this[key] = states[key];
      });
    },
    setQuestion(index){
      this.currentQuestion = index;
    },
    increment() {
      this.currentQuestion++;
    },
    diminishment() {
      if(this.currentQuestion > 0){
      this.currentQuestion--;
      }
    },
    addMoney(amount){
      this.money += amount;
    },
    loseMoney(amount){
      this.money -= amount;
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        paths: ['money', 'currentQuestion'],
      },
    ],
  },
})

export default useCounterStore;
