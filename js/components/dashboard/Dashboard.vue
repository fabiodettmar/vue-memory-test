<template>
    <div class="status-bar">
       <Logo></Logo>
       <Status></Status>
       <Match-info></Match-info>
       <Score></Score>
    </div>
</template>

<script>

import Logo from './Logo';
import MatchInfo from './MatchInfo';
import Score from './Score';
import Status from './PlayStatus';
import { STATUS } from '../../vuex/store/statusEnum';

import { mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions([
            'updateStatus',
            'reset'
        ])
    },

    created() {
        this.updateStatus(STATUS.READY);
        this.reset();
    },    
    components: {Logo, MatchInfo, Score, Status}
}
</script>

<style scoped>
.status-bar{
    width: 20%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: #303F9F;
    box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.3);
    padding:5px;
}
</style>
