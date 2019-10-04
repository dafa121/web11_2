<template>
  <div id="app">
    <my-header v-show="this.$route.meta.showHeader" />
    <router-view/>
    <my-footer />
  </div>
</template>

<script>
import MyHeader from "./components/header"
import MyFooter from "./components/footer"
import "./assets/css/common.css"
export default {
  name: 'App',
  components:{
    MyHeader,
    MyFooter

  }
}
</script>

<style>

li.m-header:hover{
  cursor: pointer;
}
</style>
