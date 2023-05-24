import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
  state: () => ({
    money: 0,
  }),
  getters: {
    getMoney: (state) => state.money,
  },
  actions: {
    setStates(states) {
      Object.keys(states).forEach((key) => {
        this[key] = states[key];
      });
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
        paths: ['money'],
      },
    ],
  },
})

export default useCounterStore;
