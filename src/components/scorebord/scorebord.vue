<template>
    <div class="scorebord">
        <div class="top-score">
            <h1>Scorebord</h1>
            <ul class="topscore">
                <li v-for="person in scores.slice(0, 3)">
                    <img class="avatar" v-bind:src="person.avatar">
                        <h3>{{person.name}}</h3>
                        <img src="/coins.png">
                        <p>{{person.coins}}</p>
                </li>
            </ul>
        </div>
        <ul class="listscore">
                <li v-for="person in scores.slice(3,6)">
                        <img class="avatar" v-bind:src="person.avatar">
                        <h3>{{person.name}}</h3>
                        <img src="/coins.png">
                        <p>{{person.coins}}</p>
                </li>
            </ul>
    </div>
    <footer class="d-flex score-footer">
        <div class="d-flex">
            <button class="back-button" v-on:click="goToHomepage"><img src="/home-icon.png"></button>
            <button class="back-button" v-on:click="changeToPanic"><img src="/chat-icon.png"></button>
        </div>
    </footer>
</template>

<script>
import usePersonStore from '../../stores/person';
import { mapState, mapActions } from 'pinia';
import useScoreStore from '../../stores/score'
import useCounterStore from '../../stores/counter';

export default {
    name: 'Scorebord',
    computed: {
        ...mapState(usePersonStore, {
            storedName: 'getName',
        }),
        ...mapState(useScoreStore, {
            currentScores: 'getScores'
        }),
        scores(){
            const scores = this.currentScores
            scores.sort((a,b) => b.coins - a.coins);
            return scores;
        },
        goToHomepage(){
            this.setState('home');
        },
    },
    methods: {
        ...mapActions(usePersonStore, {
            setState: 'setState'
        }),
        ...mapActions(useScoreStore, {
            setScore: 'setScore',
        }),
        ...mapActions(useCounterStore, {incrementIndex: 'increment'}),
        showPanicQuestion() {
            timeout = setTimeout(changeToPanic, 3000)
        },
        changeToPanic() {
            this.setState('question');
            this.incrementIndex();
        }
    }
}


</script>

<style>
    .scorebord {
        width: 100%;
        position: absolute;
        top: 0;
        min-height: 100vh;
    }

    .scorebord h1 {
        text-align: center;
        text-transform: uppercase;
        color: #7FC7A0;
    }

    .top-score {
        padding-top: 1em;
        min-height: 45vh;
        width: 100%;
        background: linear-gradient(45deg, transparent 20px, #237652 0);
    }

    .avatar {
        border-radius: 50%;
        border: 3px solid white;
        width: 6em;
        height: 6em;
    }

    .topscore {
        display: flex;
        justify-content: center;
        gap: 1em;
        margin-top: 1em;
        padding-bottom: 1em;
        margin-bottom: 1em;
    }

    .topscore h3, .topscore p, .listscore h3, .listscore p {
        color: white;
    }

    .topscore li {
        list-style-type: none;
        text-align: center;
    }

    .topscore li:first-of-type {
        margin-top: 3em;
    }

    .topscore li:last-of-type {
        margin-top: 4em;
    }

    .listscore {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 1em;
        margin-bottom: 2em;
    }

    .listscore li {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        background: #237652;
        margin-bottom: 1em;
        padding: 0.5em;
    }

    .listscore li .avatar {
        width: 3em;
        height: 3em;
    }

    .listscore p {
        margin-top: 0;
    }

    .score-footer {
        position: fixed;
        bottom: 1em;
        width: 100%;
        padding: 1em;
    }

    .score-footer div {
        width: 100%;
        justify-content: space-between;
    }
</style>