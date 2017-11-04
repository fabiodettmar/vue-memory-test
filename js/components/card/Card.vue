<template>
    <div class="container" v-on:click="flip">
        <div class="card" v-bind:class="{ flipped: option.flipped }">
            <img class="front" v-if="option.cardName === 'hulk'" src="../../../img/hulk.png"/>
            <img class="front" v-if="option.cardName === 'spiderman'" src="../../../img/spider.png"/>
            <img class="front" v-if="option.cardName === 'storm'" src="../../../img/storm.png"/>
            <img class="front" v-if="option.cardName === 'logan'" src="../../../img/logan.png"/>
            <img class="front" v-if="option.cardName === 'daredevil'" src="../../../img/daredevil.png"/>
            <img class="front" v-if="option.cardName === 'deadpool'" src="../../../img/deadpool.png"/>
            <img class="front" v-if="option.cardName === 'thor'" src="../../../img/thor.png"/>
            <img class="front" v-if="option.cardName === 'mystic'" src="../../../img/mystic.png"/>
            <img class="front" v-if="option.cardName === 'hawkeye'" src="../../../img/gaviao.png"/>
            <img class="front" v-if="option.cardName === 'ironfist'" src="../../../img/ironfist.png"/>

            <img class="back" src="../../../img/back.png"/>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {

    props: {
        option: {
            type: Object,
            default () {
                return {
                    flipped: false,
                    cardName: ''
                };
            }
        }
    },

    methods: {
        ...mapActions([
            'flipCard'
        ]),
        flip() {
            if(this.option.flipped){
                return;
            }
            this.flipCard(this.option);
            this.$emit('flipped', this.option);
        }
    },

    components: {}
}
</script>

<style scoped>
.container{
    width: 150px;
    height: 200px;
    margin-right: 3px;
    cursor: pointer;
    position: relative;
    perspective: 800px;
}

.card {
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
}

.card.flipped {
    transform: rotateY( 180deg );
}

.card img {
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    backface-visibility: hidden;
}

.card .back {
    background: blue;
    transform: rotateY( 0deg );
}

.card .front {
    background: blue;
    transform: rotateY( 180deg );
}

@media screen and (max-width: 450px) {
    .container{
        width: 92px;
        height: 111px;
        margin-right: 1px;
    }
}

@media screen and (max-width: 380px) {
    .container{
        width: 85px;
        height: 102px;
        margin-right: 1px;
    }
}

@media screen and (max-width: 360px) {
    .container{
        width: 70px;
        height: 84px;
        margin-right: 1px;
    }
}
</style>
