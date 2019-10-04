<template>
    <div>
        <!--导航条  -->
        <div class="main container">
            <ul class="clearfix">
                <li><img src="../assets/logo.png" /></li>
                <li class="m-navdown">
                     <router-link to="/" exact><span>首页</span>
                    <span>HOME</span></router-link>
                </li>
                <li class="m-navdown" @mouseover="isShow1=!isShow1" @mouseout="isShow1=!isShow1">
                    <router-link to="/" active-class="activeClass"><span>宏物医疗</span>
                    <span>PET CART</span></router-link>
                    <my-pop v-show="isShow1" :pop-data="popList1"></my-pop>
                </li>
                <li class="m-navdown">
                    <span class="">分院布局</span>
                    <span class="">BRANCH LAYOUT</span>
                </li>
                <li class="m-navdown" @mouseover="isShow2=!isShow2" @mouseout="isShow2=!isShow2">
                    <span class="">艾贝尔兽医学院</span>
                    <span class="">AI-BI VETERINARY COLLEGE</span>
                    <my-pop v-show="isShow2" :pop-data="popList2"></my-pop>
                </li>
                <li class="m-navdown" @mouseover="isShow3=!isShow3" @mouseout="isShow3=!isShow3">
                    <span class="">关于我们</span>
                    <span class="">ABOUT US</span>
                    <my-pop v-show="isShow3" :pop-data="popList3"></my-pop>
                </li>
                <li class="m-navdown" @mouseover="isShow4=!isShow4" @mouseout="isShow4=!isShow4">
                    <span class="">加入我们</span>
                    <span class="">JOIN US</span>
                    <my-pop v-show="isShow4" :pop-data="popList4"></my-pop>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import MyPop from "./pop"
export default {
     data() {
        return {
            isShow1: false,
            popList1: [
                {id: 1, name:"医疗服务" },
                {id: 2, name:"医疗团队" },
                {id: 3, name:"医疗设备" },
                {id: 4, name:"经典案例" },

                
            ],
            isShow2: false,
            popList2: [
                {id: 1, name:"兽医学院" },
                {id: 2, name:"E-Learing" },
            ],
            isShow3: false,
            popList3: [
                {id: 1, name:"公司简介" },
                {id: 2, name:"我们的优势" },
                {id: 3, name:"企业文化" },
                {id: 4, name:"联系我们" },
                {id: 5, name:"新闻动态" },

            ],
            isShow4: false,
            popList4: [
                {id: 1, name:"用人理念" },
                {id: 2, name:"院校招聘" },
                {id: 3, name:"社会招聘" }

            ]
        }
    },
components: {
        MyPop
    }
}
</script>

<style>
body {
margin: 0px;
padding: 0px;
}

.main {
width: 100%;
    height: 110px;
    position: relative;
    background-color: transparent;
    border-bottom: 1px solid #FF0004;
}

.main ul {
width: 86%;
height: 110px;
line-height: 110px;
margin: 0 auto;
}

.main ul li:first-child {
width: 26%;
}

.main ul li {
height: 110px;
float: left;
list-style-type: none;
padding: 0px 2%;
}

.main span {
display: block;
height: 20px;
}
.activeClass {
    color: red;
    text-decoration: none;
}

</style>
