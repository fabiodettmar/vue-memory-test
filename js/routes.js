import Game from './components/Game.vue';
import Home from './components/home/Home.vue';

export const routes = [
    { path: '', component: Home, titulo: 'Home' },
    { path: '/Game', component: Game, titulo: 'Jogo da Memória' }
]; 