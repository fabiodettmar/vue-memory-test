import '../css/main.css';
import Vue from 'vue';
import App from './App.vue'
import Game from './components/Game';
import Home from './components/home/Home';
import store from './vuex/store';

import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    el: '#application',
    router,
    render: h => h(App),
    store
});
