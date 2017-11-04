<template>
    <div class="c-board">
        <div class="board">
            <span>Pares restantes</span>
            <h2>{{ leftMatched }}</h2>
        </div>
        <div class="board">
            <span>Rodadas</span>
            <h2>{{ turns }}</h2>
        </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'leftMatched',
            'turns'
        ])
    }
}
</script>

<style scoped>
.c-board{
    width:95%;
}
.board{
    width: 100%;
    height: 100px;
    padding: 10px;
    background-color: #448AFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #212121;
    margin: 5px 0;
}

span{
    font-size: 19px;
    font-weight: bold;
    display: block;
    width: 100%;
    text-align: center;
}

h2{
    color: #212121;
}
@media screen and (max-width: 450px) {
    .board{
        width: 105px;
    }
    span{
        font-size: 17px;
    }
}

@media screen and (max-width: 380px) {
    .board{
        width: 95px;
    }
}

@media screen and (max-width: 360px) {
    .board{
        width: 90px;
    }
    span{
        font-size: 15px;
    }
}
</style>
