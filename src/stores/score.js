import { defineStore } from 'pinia'
import {scores} from '../assets/scores';

const useScoreStore = defineStore('score', {
  state: () => ({
    scores: scores
  }),
  getters: {
    getScores: (state) => {
        return state.scores;
      }
  },
  actions: {
    
  },
})

export default useScoreStore;
