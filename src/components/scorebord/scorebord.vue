<template>
    <div class="scorebord">
        <div class="top-score">
            <h1>Scorebord</h1>
        </div>
    </div>
</template>

<script>
import usePersonStore from '../../stores/person';
import { mapState, mapActions } from 'pinia';
import useCounterStore from '../../stores/counter';

export default {
    name: 'Scorebord',
    computed: {
        ...mapState(usePersonStore, {
            storedName: 'getName',
        }),
    },
    methods: {
        ...mapActions(usePersonStore, {
            setState: 'setState'
        }),
        startQuestions(){
            this.setState('question');
            this.setQuestion(0);
        }
    }
}
</script>

<style>
    .scorebord {
        width: 100%;
        position: absolute;
        top: 0;
    }

    .scorebord h1 {
        text-align: center;
        text-transform: uppercase;
        color: #7FC7A0;
    }

    .top-score {
        padding-top: 1em;
        /* background: #237652; */
        height: 40vh;
        width: 100%;
        background: linear-gradient(45deg, transparent 20px, #237652 0);
    }
</style>