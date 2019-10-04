<template>
<div>
  <div class="row">
        <div class="col-md-4 col-xs-12 col-md-offset-4">
            <div class="m-title">
                <div>{{titleData.name}}</div>
                <div>{{titleData.engname}}</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props:["titleData"]
}
</script>

<style>
.m-title {
	/*width: 29%;*/
	/*text-align: center;*/
	margin: 70px auto 53px;
	padding: 0 117px 0 122px;
	background: url(../assets/img/titlebgleft.png) no-repeat 0px 0px, url(../assets/img/titlebgright.png) no-repeat 100% 0px;
}

.m-title div:first-of-type {
	color: #1d1d1d;
	font-size: 22px;
	text-align: center;
	line-height: 25px;
	margin-top: -14px;
	padding: 0px 10px;
}

.m-title div:last-of-type {
	color: #666666;
	border-bottom: 1px solid #333333;
	font-size: 14px;
	text-align: center;
	margin-top: 20px;
	line-height: 25px;
	padding: 0px 16px;
	text-transform: uppercase;
}
</style>
