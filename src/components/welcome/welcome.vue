<template>
    <div class="box">
        <div v-if="nameGiven">
            <h1> Welkom </h1>
            <hr>
            <h2> Hi, {{storedName}}. Laten we samen op zoek gaan naar jouw huis! </h2>
            <button v-on:click="startQuestions">Begin zoektocht</button>
        </div>
        <div v-else>
            <h1> Welkom </h1>
            <hr>
            <h2> Hi, ik ben Lisa jouw persoonlijke assistent.</h2>
            <p> Geef hier je naam op en we kunnen beginnen!</p>
            <input type="text" v-model="name" placeholder="Voer hier je naam" />
            <button v-on:click="submitName"> Opslaan </button>
        </div>
    </div>  
</template>

<script>
import usePersonStore from '../../stores/person';
import { mapState, mapActions } from 'pinia';
import useCounterStore from '../../stores/counter';

export default {
    name: 'Welcome',
    computed: {
        ...mapState(usePersonStore, {
        storedName: 'getName',
        }),
        nameGiven(){
            return !!this.storedName;
        }
    },
    emits: [
        'start'
    ],
    methods: {
        submitName(){
            this.setName(this.name);
        },
        ...mapActions(usePersonStore, {
            setName: 'setName',
            setState: 'setState'
        }),
        ...mapActions(useCounterStore, {
            setQuestion: 'setQuestion'
        }),
        startQuestions(){
            this.setState('question');
            this.setQuestion(0);
        }
    }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&display=swap');

    body{
        font-family: 'Roboto', sans-serif;
    }

    .main { 
      display: flex;
    }

    hr {
        width: calc(100% + 2em);
        margin-left: -1em;
        background-color:#7FCCAB;
        border: none;
        height: 0.2em;
    }

    .box { 
        background: white;
        padding: 1em;
        margin: auto;
        display: flex;
        padding-bottom: 3em;
    }

    .box h1 {
        margin: 0;
        text-transform: uppercase;
        color: #7FCCAB;
        margin-top: -0.3em;
    }

    input {
        border-radius: 2em;
        border: 1px solid black;
        padding: 0.5em;
        width: 100%;
        margin-top: 1em;
    }

    button {
        border-radius: 2em;
        background: #7FCCAB;
        padding: 0.5em;
        width: 100%;
        color: white;
        margin-top: 1em;
        font-weight: 500;
    }

    h2 {
        font-weight: normal;
        font-size: 1em;
        margin-top: 1em;
    }
</style>