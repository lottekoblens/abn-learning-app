import { defineStore } from 'pinia'

const usePersonStore = defineStore('person', {
    state: () => ({
      name: '',
      age: 0,
      state: 'welcome'
    }),
    getters: {
      getName: (state) => state.name,
      getAge: (state) => state.age,
      getState: (state) => state.state
    },
    actions: {
      setStates(states) {
        Object.keys(states).forEach((key) => {
          this[key] = states[key];
        });
      },
      setAge(age){
        this.age = age;
      },
      setName(name){
        this.name = name;
      },
      setState(state){
        this.state = state;
      }
    },
    persist: {
      enabled: true,
      strategies: [
        {
          paths: ['name', 'age'],
        },
      ],
    },
})

export default usePersonStore;