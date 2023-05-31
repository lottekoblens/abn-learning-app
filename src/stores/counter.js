import { defineStore } from 'pinia'
import {vragen} from '../assets/questions';

const useCounterStore = defineStore('counter', {
  state: () => ({
    money: 100,
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
    incrementByTwo() {
      this.currentQuestion+=2;
    },
    diminishment() {
      if(this.currentQuestion > 0){
      this.currentQuestion--;
      }
    },
    addMoney(value){
      console.log(value, 'amount')
      if (typeof value == 'string'){
        this.money += eval(value);
        return
      } else if(value !== undefined) {
        this.money += value
        return
      }
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
