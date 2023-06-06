<template>
    <div class="box">
        <div v-if="nameGiven">
            <h1> Welkom </h1>
            <hr>
            <h2> Hi, {{storedName}}. Laten we samen op zoek gaan naar jouw huis! </h2>
            <img class="image-big" src="/house-illustration.jpg">
            <button v-on:click="startQuestions">Begin zoektocht</button>
        </div>
        <div v-else>
            <h1> Welkom </h1>
            <hr>
            <h2> Hi, ik ben Lisa jouw persoonlijke assistent.</h2>
            <p> Geef hier je naam op en we kunnen beginnen!</p>
            <input type="text" class="openInput" v-model="name" placeholder="Voer hier je naam" />
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
        overflow-y: scroll;
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
        background: linear-gradient(-135deg, transparent 40px, white 0) left top;
        padding: 1em;
        margin: auto;
        display: flex;
        padding-bottom: 3em;
        flex-direction: column;
        min-width: 100%;
        /* box-shadow: 0 0 8px 0 rgba(34, 34, 34, .02), 0 8px 16px 0 rgba(34, 34, 34, .2); */
    }

    .box h1 {
        margin: 0;
        text-transform: uppercase;
        color: #7FCCAB;
        margin-top: -0.3em;
    }

    .openInput {
        border-radius: 2em;
        border: 1px solid black;
        padding: 0.5em;
        width: 100%;
        margin-top: 1em;
    }

    input[type="range"] {
        padding: 0;
    }

    .slider {
        background: #7FCCAB;
        color: #7FCCAB;
    }

    button {
        border-radius: 2em;
        background: #7FCCAB;
        padding: 0.75em;
        width: 100%;
        color: white;
        margin-top: 1em;
        font-weight: 500;
        /* box-shadow: 0 0 8px 0 rgba(34, 34, 34, .02), 0 8px 16px 0 rgba(34, 34, 34, .2); */
    }

    h2, p {
        font-weight: normal;
        font-size: 1em;
        margin-top: 1em;
    }

    .green {
        color: #7FCCAB;
    }

    .red {
        color: #FD0000;
    }
</style>