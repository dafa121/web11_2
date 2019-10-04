<template>
  <div id="app">
    <table class="table">
        <tr class="text-title">
            <th class="text-center"><input type="checkbox"  @click="all" v-model="allCheck"/>全选</th>
            <th class="text-center">商品信息</th>
            <th class="text-center">单价</th>
            <th class="text-center">数量</th>
            <th class="text-center">金额</th>
            <th class="text-center">操作</th>
        </tr>
        <tr class="text-center" v-for="item,index in orderList">
            <td><input type="checkbox" v-model="item.flag"  @click="select(index)" /></td>
            <td><img :src=item.src>{{item.name}}</td>
            <td>￥{{item.price}}</td>
            <td>
                <input type="button" value="-" class="btn btn-info btn-xs" @click="subNum(index)"/>
                {{item.num}}
                <input type="button" value="+" class="btn btn-info btn-xs" @click="addNum(index)"/>
            </td>
            <td>{{item.price*item.num}}</td>
            <td>
                <button class="btn" @click="del(index)">删除</button>
            </td>
        </tr>
        <tr>
            <td>
                购买数量：{{totalNum}}
                商品总价：{{totalPrice}}
                <button class="btn" >结算</button>
            </td>
        </tr>
    </table>
  </div>
</template>

<script>
import orderList from "../datas/orderdata.js"
export default {
  data() {
    return {
      orderList,
      allCheck:false,
           num:0
    }
  },
  
    methods:{
           subNum(idx){
               this.orderList[idx].num--;
               if(this.orderList[idx].num<1){
                   this.orderList.splice(idx,1)
               }
           },
           addNum(idx){
               this.orderList[idx].num++;

           },
           del(idx){
               this.orderList.splice(idx,1)
           },
           all(){
               this.allCheck=!this.allCheck;
               for(let item of this.orderList){
                   item.flag=this.allCheck
               }
               this.num=this.orderList.filter(item=>item.flag==true).length;

           },
           select(index){
               this.orderList[index].flag=!this.orderList[index].flag;
               this.num=this.orderList.filter(item=>item.flag==true).length;
               if(this.num==this.orderList.length){
                   this.allCheck=true;
               }else{
                   this.allCheck=false;
               }
           }

       },
       computed:{
           totalNum(){
               let count=0;
               for(let i=0;i<this.orderList.length;i++){
                   count+=this.orderList[i].num;
               }
               return count;
//               return this.cartData.reduce((sum,item)=>sum+item.num,0);
           },
           totalPrice(){
//               let count=0;
//               for(let j=0;j<this.cartData.length;j++){
//                   count+=this.cartData[j].num*this.cartData[j].price
//               }
//               return count;
               return this.orderList.reduce((proTotal,item)=>proTotal+item.num*item.price,0);

           }
       }

}
</script>

<style>

</style>
