<template>
    <div class="status">
        <span v-if="status === READY">Pronto</span>
        <span v-if="status === PLAYING">Jogando</span>
        <a class="btn" v-if="status === PASS" v-on:click.prevent.stop="reset" href>Jogar Novamente</a>
        <br/><span class="elapsed">{{ elapsedMs }} s</span>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import { STATUS } from '../../vuex/store/statusEnum';

export default {

    data() {
        return STATUS;
    },

    computed: {
        ...mapGetters([
            'status',
            'elapsedMs'
        ])
    },

    methods: {
        ...mapActions([
            'reset'
        ])
    }

}
</script>

<style scoped>
.status{
    width: 95%;
    height: 100px;
    padding: 10px;
    background-color: #448AFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #212121;
}
span{
    font-size: 19px;
    font-weight: bold;
    display: block;
    width: 100%;
    text-align: center;
}
a{
    text-decoration: none;
}
.elapsed{
    font-size: 35px;
    font-weight: normal;
    color: #000;
}
.btn {
        border-radius:5px;
        background:#000000;
        color:#FFFFFF;
        padding:4px 10px 6px;
        text-decoration:none;
}
</style>
