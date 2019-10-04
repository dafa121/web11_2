<template>
    <div class="myshop">
        <h3 class="title">我的购物车</h3>
        <div class="empty" v-if="!cartData.length>0">
            <h3>购物车为空</h3>
            <p>您还没有选购任何商品，现在前往选购吧!</p>
            <p style="text-align:center;padding-top:20px;">
                <img src="../assets/img/shop/cart-empty.png" />
            </p>
        </div>
        <div class="content" v-else>
            <div class="item" style="height:40px;">
                <span>图&nbsp;&nbsp;片</span>
                <span>单价</span>
                <span>数量</span>
                <span>小计</span>
                <span>删除</span>
            </div> 
            <div class="item" v-for="item,index in cartData">
                <span><img :src="item.pic" /></span>
                <span>￥{{item.price}}</span>
                <span>
                    <input type="button" value="-" class="btn btn-info btn-xs" @click="subNum(index)"/>
                    <input type="text" v-model="item.count" style="width:20px;text-align:center;" />
                   <input type="button" value="+" class="btn btn-info btn-xs" @click="addNum(index)"/>
                </span>
                <span>{{item.count}}</span>
                <span>￥{{item.count*item.price}}</span>
                <span>X</span>
            </div>

        </div>
        <div class="my-footer">
           
                <span v-if="cartData.length>0">总数：{{totalCount}}</span>
                <span v-if="cartData.length>0">总价：{{totalPrice}}</span>
            
            <span　class="close-shop" @click="colsepane">关闭</span>

        </div>
    </div>
</template>

<script>
import goodsList from "../datas/goodsdata.js"
import "../assets/css/common.css"
import { mapState,mapGetters,mapActions} from "vuex"
export default {
    data() {
        return {
            goodsList
        }
    },
    computed: {
        ...mapState(["cartData"]),
        ...mapGetters(["totalCount","totalPrice"]),

    },
    methods: {
        colsepane() {
            this.$emit("closecart");
        },
        ...mapActions(
            {
                subNum:"subActions",
                addNum:"addActions"
            }
        )
        // addNum(idx){
        //     this.$store.dispatch("changeAction",{flag:2,index:idx});
        // },
        // subNum(idx){
        //     this.$store.dispatch("changeAction",{flag:1,index:idx});
        // },

        

}
}
</script>

<style>
.myshop {
    font-size: 14px;
    position: absolute;
    top: 60px;
    right: 120px;
    background: #f8f8f8;
    z-index: 100;
    border-radius: 20px;
    box-shadow: 2px 2px 2px #000;
    width: 500px;
    line-height: 30px;
}

.myshop .title {
    padding: 20px;
    font-size: 20px;
    color: #666;
}

.myshop .empty {
    padding-left: 20px;
    font-size: 16px;
}

.myshop .empty h3,
.myshop .empty p {
    font-size: 16px;
    margin: 0px;
    padding: 0px;
}

.myshop .content {
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 50px;
}

.myshop .content span:first-child {
    display: inline-block;
    width: 60px;
    height: 60px;
}

.myshop .content img {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
}

.myshop .content span {
    margin-left: 20px;
    padding: 6px;
}

.myshop .content .item {
    padding-bottom: 10px;
}

.myshop .my-footer {
    padding: 30px;
}

.myshop .close-shop {
    margin-left: 100px;
    cursor: pointer;
}
</style>
