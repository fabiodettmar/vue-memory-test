<template>
  <div class="corpo">
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import { routes } from './routes';

export default {
  data() {
    return {
      routes
    }
  }

}
</script>
<style>
.corpo {
  font-family: helvetica, sans-serif;
  width:100%;
  margin: 0 auto;
  }
.pagina-enter, .pagina-leave-active {
  opacity:0;
}
.pagina-enter-active, .pagina-leave-active {
  transition:opacity 0.2s;
}
</style>