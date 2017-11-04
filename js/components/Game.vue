<template>
    <div class="game-panel">        
       <Dashboard></Dashboard>
       <Chessboard></Chessboard>       
    </div>
</template>

<script>

import Dashboard from './dashboard/Dashboard';
import Chessboard from './card/Chessboard';

import { mapActions } from 'vuex';


export default {    

    components: {Dashboard, Chessboard}
}
</script>

<style scoped>
.game-panel{
    width: 100%;
    height: 100vh;
    background-color: #ffffff;
    padding: 0px;
    display: flex;
    flex-direction: row;
}

@media screen and (max-width: 450px) {
    .game-panel{
        width: 100%;
        height: 100%;
        justify-content: space-around;
    }
}
</style>
