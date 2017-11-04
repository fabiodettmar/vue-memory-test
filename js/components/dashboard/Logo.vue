<template>
    <h1 class="logo">Olá, {{ nome }}</h1>
</template>
 
<script>
export default {
  data: {
      nome:''
  },
  created () {
  	this.nome = localStorage.getItem('nome')
  }
}
</script>

<style scoped>
.logo{   
    height: 100px;
    line-height: 90px;
    padding: 5px;
    color: #FFF;
    text-align: left;
}
a {
    text-decoration: none;
    color: #fff;
}

@media screen and (max-width: 450px) {
    .logo{
        width: 150px;
    }
}

@media screen and (max-width: 380px) {
    .logo{
        width: 140px;
    }
}

@media screen and (max-width: 360px) {
    .logo{
        width: 110px;
    }
    a{
        font-size: 18px;
    }
}
</style>
