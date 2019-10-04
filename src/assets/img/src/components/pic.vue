<template>
<div class="container lbt3">
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item,index in imglist" :key="index">
        <div class="row">
            <div class="col-md-4 col-xs-12">
                <div class="thumbnail m-equipmentPic">
                    <span class="u-txt">{{item.title1}}</span>
                    <span class="u-img"><img :src="item.pic1" /></span>
                </div>
            </div>
            <div class="col-md-4 col-xs-12">
                <div class="thumbnail m-equipmentPic">
                    <span class="u-txt">{{item.title2}}</span>
                    <span class="u-img"><img :src="item.pic2" /></span>
                </div>
            </div>
            <div class="col-md-4 col-xs-12">
                <div class="thumbnail m-equipmentPic">
                    <span class="u-txt">{{item.title3}}</span>
                    <span class="u-img"><img :src="item.pic3" /></span>
                </div>
            </div>
        </div>
    </el-carousel-item>         
  </el-carousel>
  </div>
</template>

<script>
export default {
data(){
        return{
            imglist:[
            {id:1,title1:"立体等像素16层螺旋CT",title2:"联影uMR 560磁共振系统",title3:"内分泌及快速检测试剂分析仪",pic1:require("../assets/img/homepage/equipment1.jpg"),pic2:require("../assets/img/homepage/equipment2.jpg"),pic3:require("../assets/img/homepage/equipment3.jpg")},
            {id:2,title1:"尿液分析仪",title2:"全自动生化分析仪",title3:"多普勒超声诊断系统",pic1:require("../assets/img/homepage/equipment4.jpg"),pic2:require("../assets/img/homepage/equipment5.jpg"),pic3:require("../assets/img/homepage/equipment6.png")},
            {id:3,title1:"动物麻醉机",title2:"全自动血细胞分析仪",title3:"美国雅培手掌血气分析仪i",pic1:require("../assets/img/homepage/equipment7.jpg"),pic2:require("../assets/img/homepage/equipment8.jpg"),pic3:require("../assets/img/homepage/equipment9.jpg")},
            {id:4,title1:"全自动血细胞分析仪",title2:"美国雅培手掌血气分析仪i",title3:"奥林巴斯CX23显微镜",pic1:require("../assets/img/homepage/equipment8.jpg"),pic2:require("../assets/img/homepage/equipment9.jpg"),pic3:require("../assets/img/homepage/equipment10.jpg")},
              
               
            ],
        }
    }
}
</script>

<style>
.lbt3>.m-company .el-carousel--horizontal
{
         overflow-x: hidden;
}
.lbt3 .el-carousel__container{
    height: 380px;
}
  .m-equipmentPic {
	display: inline-block;
	/*width: 30%;*/
	height: 355px;
	position: relative;
	border: transparent solid 1px;
	border-radius: 0px;
	box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 20px;
	overflow: hidden;
	padding: 0px;
	margin: 0px 0px 44px 35px;
}

.m-equipmentPic .u-txt {
	display: block;
	width: 100%;
	font-size: 13px;
	color: #FFFFFF;
	text-align: center;
	line-height: 49px;
	background: rgba(17, 89, 148, 0.75);
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: 9;
}

.u-img img {
	width: 100%;
	cursor: pointer;
	transition: all 0.5s ease 0s;
}

 .u-img img:hover {
	transform: scale(1.1);
}

.m-pic .u-left,
 .m-pic .u-right {
	background: transparent;
}
</style>
