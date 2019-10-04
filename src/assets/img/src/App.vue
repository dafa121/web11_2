<template>
  <div id="app">
    <!-- <my-header /> -->
    <home-header />
    <router-view/>
    <my-footer />
  </div>
</template>

<script>
import MyHeader from "./components/header"
import MyFooter from "./components/footer"
import HomeHeader from "./components/homeheader"
export default {
  name: 'App',
  components:{
    MyHeader,
    MyFooter,
    HomeHeader
  }
}
</script>

<style>
html,body,ul,li,ol,img,a,p,div,form,input,header,span,h3,h1,h2,span,nav{
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	list-style: none;
}

a{
	text-decoration: none;
	color:black;
	-webkit-tap-highlight-color: transparent;
}
.clearfix:after{
	content:"";
	clear: both;
	display: block;	
}

li:hover{
  cursor: pointer;
}
</style>
