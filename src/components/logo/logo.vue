<template>
    <div class="header d-flex pa-4 justify-space-between">
      <img class="white-logo" src="/logo-white.png">
      <button v-on:click="deleteSession" class="hide-button">Delete sessie</button>
    </div>
</template>
  
<script>
import usePersonStore from '../../stores/person';
import { mapActions } from 'pinia';

  export default {
    name: 'Logo',
    methods: {
      deleteSession() {
        sessionStorage.clear()
        location.reload()
      },
      ...mapActions(usePersonStore, {
            setState: 'setState'
    }),
    }
  }

 
</script>
  
<style>
  .white-logo {
    max-height: 7em;
    margin-top: 2em;
    margin-bottom: -7em;
  }

  .hide-button {
    opacity: 0;
  }
</style>