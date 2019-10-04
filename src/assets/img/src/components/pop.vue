<template>
    <div class="u-pop">
        <ul>
            <li v-for="item in popData">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
props:["popData"]
}
</script>

<style>
.u-pop {
width: 100%;
height: 60px;
line-height: 60px;
text-align: center;
position: absolute;
left: 0;
top: 110px;
z-index: 99;
background: rgba(255, 0, 0, 0.5);
}

.u-pop a{
color: white;
font-size: 13px;
line-height: 60px;
margin-right: 30px;
text-decoration: none;
}
</style>
