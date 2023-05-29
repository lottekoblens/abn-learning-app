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

    }

    .top-score {
        background: #237652;
        height: 40vh;
        width: 100%;
    }
</style>