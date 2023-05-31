<template>
    <div class="box">
        <div>
            <h1> Home </h1>
            <hr>
            <h2> Hi, {{storedName}}! Wat wil je doen? Wil je een nieuw verhaal beginnen? Of een samenvatting bekijken van je laatste verhaal? </h2>
            <button v-on:click="startQuestions">Nieuw verhaal beginnen</button>
            <button v-on:click="goToSummaryPage">Samenvatting bekijken</button>
        </div>
    </div>  
</template>

<script>
import usePersonStore from '../../stores/person';
import { mapState, mapActions } from 'pinia';
import useCounterStore from '../../stores/counter';

export default {
    name: 'Home',
    computed: {
        ...mapState(usePersonStore, {
        storedName: 'getName',
        }),
        nameGiven(){
            return !!this.storedName;
        }
    },
    methods: {
        ...mapActions(usePersonStore, {
            setState: 'setState'
        }),
        ...mapActions(useCounterStore, {
            setQuestion: 'setQuestion'
        }),
        startQuestions(){
            this.setState('question');
            this.setQuestion(0);
        },
        goToSummaryPage() {
            this.setState('summary');
        }
    }
}
</script>

<style>

</style>