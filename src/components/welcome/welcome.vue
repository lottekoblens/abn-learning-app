<template>
    <div class="welcome">
        <div v-if="nameGiven">
            <h1> Welcome {{storedName}}! </h1>
            <h2> Leuk dat je er bent.</h2>
            <button v-on:click="startQuestions">Begin</button>
        </div>
        <div v-else>
            <h1> Welcome! </h1>
            <h2> Leuk dat je er bent.</h2>
            <p> Geef hier je naam op en we kunnen beginnen!</p>
            <input type="text" v-model="name" placeholder="Jouw naam" />
            <button v-on:click="submitName"> Go! </button>
        </div>
    </div>  
</template>

<script>
import usePersonStore from '../../stores/person';
import { mapState, mapActions } from 'pinia';

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
            console.log('Naam doorgegeven is :: ', this.name);
            this.setName(this.name);
        },
        ...mapActions(usePersonStore, {
            setName: 'setName',
            setState: 'setState'
        }),
        startQuestions(){
            this.setState('question')
        }
    }
}
</script>

<style>

</style>