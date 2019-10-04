<template>
  <div @click="closeHandle">
    <!-- 轮播图 -->
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item,index in imgList1" :key="index">
        <h3><img :src="item.pic" /></h3>
      </el-carousel-item>
    </el-carousel>
    <!-- 产品展示 -->
    <div class="container g-piclist"  >
      <div class="row" >
        <div class="col-sm-6 col-md-4" v-for="idx in goodsList ">
          <div class="thumbnail">
           <router-link :to="'/detail/'+idx.id"> <img :src="idx.pic" alt="..."></router-link>
            <div class="caption u-first">
              <h3>{{idx.title}}</h3>
              <p>{{idx.price}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import goodsList from "../datas/goodsdata.js"
import {mapState,mapActions} from "vuex"
export default {
  computed:{
    ...mapState(["goodsList","imgList1"])
  },
  methods:{
    //如果这样写 就不用导入mapActions
    // closeHandle(){
    //   this.$store.dispatch("closePopAction")
    // }
    ...mapActions({"closeHandle":"closePopAction"})
  }

}
</script>

<style>
.el-carousel__container {
  height: 400px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 400px;
  margin: 0;
}

.el-carousel__item h3>img {
  width: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.g-piclist {
  margin-top: 50px;
  margin-bottom: 30px;
  padding-left: 100px;
  padding-right: 100px;
}

.g-piclist .thumbnail {
  padding: 0px;
  margin-bottom: 18px;
  margin-right: 18px;
  text-align: center;
  border: 1px solid #ddd;
  height: 400px;
}

.g-piclist .thumbnail .u-img {
  width: 100%;
}

.g-piclist .thumbnail .u-img img {
  background-color: #FAFAFA;
  width: 100%;
}

.g-piclist>.row>div:last-of-type .thumbnail {
  margin-right: 0px;
}

.g-piclist .thumbnail h3 {
  font-size: 14px;
}

.g-piclist .thumbnail p {
  font-size: 24px;
  color: #79C053;
}

.g-piclist .thumbnail:hover {
  box-shadow: 0px 4px 7px 0 rgba(180, 180, 180, 0.50);
}

.g-piclist .thumbnail:hover .caption {
  background-color: #79C053;
  color: #fff;
}

.g-piclist .thumbnail:hover .caption p {
  color: #fff;
}

.u-first {
  margin-top: 15px;
}
.col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {
     padding-right: 0px; 
     padding-left: 0px; 
}
</style>
