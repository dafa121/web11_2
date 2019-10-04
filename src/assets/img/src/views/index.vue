<template>
<div>
  <my-banner></my-banner>
  <my-title :title-data="titlist1"></my-title>
   <my-content></my-content> 
  <my-title :title-data="titlist2"></my-title>
   <!-- <my-pic></my-pic>  -->
  

</div>
</template>

<script>
import MyBanner from "../components/banner"
import MyContent from "../components/content"
import MyPic from "../components/pic"
import MyTitle from "../components/title"

export default {
    data(){
        return{
            titlist1:{name:"医院介绍",engname:"hospital introduced"},
            titlist2:{name:"医疗设备",engname:"MEDICAL EQUIPMENT"},
            titlist3:{name:"医疗团队",engname:"EXPERT TEAM"},
            titlist4:{name:"新闻动态",engname:"NEWS"},
            titlist5:{name:"经典案例",engname:"CLASSIC CASE"},
        }
    },
components:{
    MyBanner,
    MyContent,
    MyPic,
    MyTitle
  }
}
</script>

<style>

</style>
