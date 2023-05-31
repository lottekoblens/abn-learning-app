<template>
    <div class="header d-flex pa-4 justify-space-between">
      <button class="back-button" v-on:click="goToHomepage"><img src="/arrow.png"></button>
    </div>
</template>

<script>
import usePersonStore from '../../stores/person';
import { mapActions } from 'pinia';

export default {
  name: 'Back-button',
  methods: {
    goToHomepage(){
            this.setState('home');
        },
        ...mapActions(usePersonStore, {
            setState: 'setState'
        }),
  }
}
</script>