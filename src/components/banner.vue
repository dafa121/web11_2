<template>
  <div class="lbt1 ">
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item,index in imglist" :key="index">
        <h3><img :src="item.pic"/></h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imglist: [
        { id: 1, pic: require("../assets/img/homepage/banner.jpg") },
        { id: 2, pic: require("../assets/img/homepage/banner2.jpg") },
        { id: 3, pic: require("../assets/img/homepage/banner3.jpg") },
      ],
    }
  }
}
</script>

<style>
.lbt1 .el-carousel--horizontal {
  overflow-x: visible;
}

.lbt1 .el-carousel__container {
  height: 470px;
}

.lbt1 .el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.lbt1 .el-carousel__item h3 img {
  width: 100%;
}

.lbt1 .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.lbt1 .el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
