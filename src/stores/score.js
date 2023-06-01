import { defineStore } from 'pinia'
import {scores} from '../assets/scores';

const useCounterStore = defineStore('counter', {
  state: () => ({
    scores: scores
  }),
  getters: {
  
  },
  actions: {
    
  },
})

export default useCounterStore;
