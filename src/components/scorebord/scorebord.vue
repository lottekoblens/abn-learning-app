<template>
    <div class="scorebord">
        <div class="top-score">
            <h1>Scorebord</h1>
            <ul class="topscore">
                <li>
                    <img class="avatar" src="/house1.png">
                    <h3>Name</h3>
                    <p><img src="/coins.png">Coins</p>
                </li>
                <li>
                    <img class="avatar" src="/house1.png">
                    <h3>Name</h3>
                    <p><img src="/coins.png">Coins</p>
                </li>
                <li>
                    <img class="avatar" src="/house1.png">
                    <h3>Name</h3>
                    <p><img src="/coins.png">Coins</p>
                </li>
            </ul>
        </div>
        <ul class="listscore">
                <li>
                    <p>4</p>
                    <img class="avatar" src="/house1.png">
                    <h3>Name</h3>
                    <img src="/coins.png">
                    <p>Coins</p>
                </li>
                <li>
                    <p>5</p>
                    <img class="avatar" src="/house1.png">
                    <h3>Name</h3>
                    <img src="/coins.png">
                    <p>Coins</p>
                </li>
                <li>
                    <p>6</p>
                    <img class="avatar" src="/house1.png">
                    <h3>Name</h3>
                    <img src="/coins.png">
                    <p>Coins</p>
                </li>
                <li>
                    <p>7</p>
                    <img class="avatar" src="/house1.png">
                    <h3>Name</h3>
                    <img src="/coins.png">
                    <p>Coins</p>
                </li>
            </ul>
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
        height: 45vh;
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
</style>