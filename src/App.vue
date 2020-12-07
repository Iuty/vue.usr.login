<template>
  <div id="app">
    <vm_login></vm_login>
  </div>
</template>

<script>
import vm_login from './viewmodel/login.vue'

export default {
  name: 'app',
  components: {
    vm_login
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  margin:-8px;
}
html,body{
    height: 100%;
}

</style>
