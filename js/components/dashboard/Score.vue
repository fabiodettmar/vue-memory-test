<template>
    <div class="score">
        <span>Recorde</span>
        <h2>{{ nome }} {{ highestSpeed }} s</h2>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'highestSpeed', 'name'
        ])
    }
}
</script>

<style scoped>
.score{
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

h2{
    color: #212121;
}
@media screen and (max-width: 450px) {
    .score{
        width: 105px;
    }
    span{
        font-size: 17px;
    }
}
@media screen and (max-width: 380px) {
    .score{
        width: 95px;
    }
}

@media screen and (max-width: 360px) {
    .score{
        width: 90px;
    }
    span{
        font-size: 15px;
    }
}
</style>
