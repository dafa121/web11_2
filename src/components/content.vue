<template>
<div class="row m-company">
    <!--轮播图2开始-->
    <div class="col-md-6 col-xs-12 m-left">
        <el-carousel trigger="click" >
        <el-carousel-item v-for="item,index in imglist" :key="index">
            <h3 class="small"><img :src="item.pic" /></h3>
        </el-carousel-item>
        </el-carousel>
    </div>

    <!--轮播图2结束-->
    <div class="col-md-6 col-xs-12 m-right">
        <h4 class="media-heading">艾贝尔宠物医院</h4>
        <p>艾贝尔宠物医院是国内专业宠物全诊疗连锁机构，在全国各地分布几十家全资宠物医院,主要分布在江、浙、沪等长三角经济最活跃的大中城市。 每家医院营业面积都超过200平方米,多家医院已成为当地中心医院、转诊目的地医院。 公司年产总值每年都在高速增长。</p>
        <p>艾贝尔拥有上百位优秀的宠物医生团队，中心医院都配备有数码X光机、彩色B超、五分类血细胞分析仪、血液透析机等先进的诊疗设备。</p>
        <p>管理领先——艾贝尔宠物医院实行公司化运作、规范性收费，到任何一家艾贝尔医院都会让您的爱宠放心就诊.....</p><br />
        <p>Ai-bi pet hospital is a professional pet hospital with total subject diagnosis and treatment organization in China. It distributes dozens of wholly owned pet hospitals throughout the country, mainly in the large and medium-sized cities of Yangtze River Delta such as Shanghai ,Jiangsu and Zhejiang.The average operating areas of the hospital is more than 200 square meters, and many hospitals have became the local central hospitals and referral destination hospitals.The annual output value is increasing every year.....</p>
        <a href="#">
            <img src="../assets/img/homepage/icon_right.png" />
        </a>
    </div>
</div>

</template>

<script>
export default {
data(){
        return{
            imglist:[
                {id:1,pic:require("../assets/img/homepage/carousel1.jpg")},
                {id:2,pic:require("../assets/img/homepage/carousel2.jpg")},
                {id:3,pic:require("../assets/img/homepage/carousel3.jpg")},
                {id:4,pic:require("../assets/img/homepage/carousel4.jpg")},
                {id:5,pic:require("../assets/img/homepage/carousel5.jpg")},
                {id:6,pic:require("../assets/img/homepage/carousel6.jpg")},
            ],
        }
    }
}
</script>

<style>
.m-company .el-carousel--horizontal
{
     overflow-x:hidden; 
}
.m-company .el-carousel__container{
    height: 605px;
}

.m-company .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
.m-company .el-carousel__item h3 img{
      height:605px;
  }
.m-left {
	height: 605px;
	padding-right: 0px;
	padding-left: 0px;
}

.m-left img {
	width: 100%;
	height: 100%;
}

.pb-carouselWarp {
	position: relative;
	height: 100%;
	overflow: hidden;
}

.m-right {
	height: 605px;
	background: #1f62a1;
	padding: 0px 150px 20px 30px;
}

.m-right h4 {
	font-size: 17px;
	color: #FFFFFF;
	margin: 50px 0 20px 0;
}

.m-right p {
	font-size: 14px;
	color: #FFFFFF;
	line-height: 24px;
	margin: 0px;
}

.m-right a {
	display: inline-block;
	margin-top: 25px;
}
</style>
