<template>
    <div>
        <header>
            <img src="../assets/img/shop/head.png" />
        </header>
        <!--导航条  -->

        <div class="main">
            <ul class="clearfix">
                <li><img src="../assets/img/shop/logo.png" /></li>
                <li>
                    <router-link to="/" exact>首页</router-link>
                </li>
                <li @mouseover="isShow1=!isShow1" @mouseout="isShow1=!isShow1">
                    <router-link to="/" active-class="activeClass">黑莓系列</router-link>
                    <my-pop v-show="isShow1" :pop-data="popImg1"></my-pop>
                </li>
                <li @mouseover="isShow2=!isShow2" @mouseout="isShow2=!isShow2">
                    <router-link to="/" active-class="activeClass">蓝莓系列</router-link>
                    <my-pop v-show="isShow2" :pop-data="popImg2"></my-pop>
                </li>
                <!-- <li>
                        <router-link to="/detail">新闻资讯</router-link>
                    </li>
                    <li>
                        <router-link to="/card">资质证照</router-link>
                    </li> -->
                <li>
                    <router-link to="/center">个人中心</router-link>
                </li>
                <li>
                    <router-link to="/about">关于我们</router-link>
                </li>
                <li>
                    <router-link to="/order">我的订单</router-link>
                </li>
                <li>
                    <router-link to="/login">
                    <span v-show="!isLogin">登录</span>
                    <span v-show="isLogin">{{loginName}}<span @click="loginout">退出</span></span>
                    </router-link>
                </li>
                <li>
                    <span @click="popCart" style="cursor: pointer;">我的购物车</span>
                    <my-cart v-show="isShowCart" @closecart="popCart"></my-cart>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
import MyPop from "./pop"
import MyCart from "./cart"
import {mapState} from "vuex"
export default {
    data() {
        return {
            loginName: "",
            isLogin: false,
          
            isShow1: false,
            popImg1: [
                {
                    id: 1, pic: require("../assets/img/shop/product2.png"),
                    title: "随心购【金色纪念款-瓶装】 60瓶/箱*1箱", price: "￥1930"
                },
                {
                    id: 2, pic: require("../assets/img/shop/product3.png"),
                    title: "随心购【金色纪念款-瓶装】 60瓶/箱*1箱", price: "￥1930"
                },
                {
                    id: 3, pic: require("../assets/img/shop/product4.png"),
                    title: "畅心体验装【金色纪念款-瓶装】 60瓶/箱*2箱", price: "￥3120"
                },
                {
                    id: 4, pic: require("../assets/img/shop/product5.png"),
                    title: "随心购【金色纪念款-瓶装】 60瓶/箱*1箱", price: "￥1930"
                },
            ],
            isShow2: false,
            popImg2: [
                {
                    id: 1, pic: require("../assets/img/shop/product6.png"),
                    title: "蓝莓酒小饮套装 2瓶装", price: "￥796"
                },
                {
                    id: 2, pic: require("../assets/img/shop/product7.png"),
                    title: "蓝莓酒畅饮套装 6瓶装", price: "￥2388"
                }
            ]
           
        }
    },
    //组件创建后
    created() {
        if (this.$local.fetch("user").login) {
            this.isLogin = true;
            this.loginName = this.$local.fetch("user").userName;
        } else {
            this.isLogin = false;
        }
    },
    methods: {
        loginout() {
            this.$local.save("user", null);
            this.isLogin = false;
            this.$router.push("/")

        },
        popCart(){
            if(!this.$local.fetch("user").userName){
                alert("请先登录");
                this.$router.push("/login");
                return;
            }
            this.$store.dispatch("changePop");
        },
       
    },
    computed:{
        ...mapState(["isShowCart"])
    },
    watch:{
        $route(){
            this.isLogin=this.$local.fetch("user").login;
            this.loginName=this.$local.fetch("user").userName;
        }

    },
    components: {
        MyPop,
        MyCart,
      
        
    }
}
</script>

<style>
header {
    width: 100%;
}

header img {
    width: 100%;
}

.main {
    width: 100%;
    height: 80px;
    font-size: 14px;
    box-shadow: 0 3px 3px 0 rgba(180, 180, 180, 0.30);
    position: relative;
}

.main ul {
    width: 80%;
    margin: 0 auto;
}

.main ul li:first-child {
    width: 15%;
}

.main ul li {
    float: left;
    line-height: 80px;
    padding: 0px 2%;
}

.f-shop {
    width: 150px;
    text-align: center;
}

.f-shop img {
    display: none;
    width: 100%;
}

.is-active {
    color: green;
    text-decoration: none;
}

.activeClass {
    color: red;
    text-decoration: none;
}
</style>
