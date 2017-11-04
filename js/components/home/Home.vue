<template>
    <div class="screen">
        <div class="panel">
            <h1>Digite seu nome:</h1>
            <input type="text" v-model="nome" class="nome" v-on:input="set_data" placeholder="digite seu nome"/>        
            <router-link class="btn" :to="{ path: '/Game' }">Entrar</router-link>                
        </div>
    </div>
</template>
<script>

export default { 
  props: ['nome'],

  data() {
    return {
      nome: ''
    } 
  },  
  methods : {
  	set_data : function(){
    	console.log('set');
      localStorage.setItem( 'nome', this.nome );
      nome = get_data();
  	},
    get_data : function(){
    	console.log('get');
      return localStorage.getItem( 'nome' );
    }
  } 
}
</script>
<style scoped>
    .screen {
        height:100vh;
        background:url("../../../img/fundo.png");
        background-size: cover;
        background-position: 0 -50px;
        padding-top: 100px;
    }
    .panel{
      padding: 15px 20px;  
      background: rgba(0,0,0,0.3);
      position:relative;
    }
    .panel h1 {color:#FFFFFF;}
    .btn {
        border-radius:5px;
        background:#000000;
        color:#FFFFFF;
        padding:4px 10px 6px;
        text-decoration:none;
    }

</style>