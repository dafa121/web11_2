import Vue from "vue"
import Vuex from "vuex"
import { goodsList, imgList1 } from '../datas/goodsdata'
Vue.use(Vuex)
let store = new Vuex.Store({
    state: {
        goodsList,
        imgList1,
        cartData: [],
        isShowCart: false,
    },
    mutations: {
        addCart(state, data) {
            // console.log("data:", state.cartData);
            //如果商品在购物车 加数量 如果不在购物车 添加到cartData
            let boff = true;
            state.cartData.forEach((goods) => {
                if (goods.id == data.onegoods.id) {
                    goods.count+=data.num;
                    boff = false;
                }
            })
            if (boff) {
                let goodsData = data.onegoods;
                Vue.set(goodsData, "count", data.num);
                state.cartData.push(goodsData);
            }
        },
        //加减

        sub1(state, data) {
            state.cartData[data].count--;
            if (state.cartData[data].count < 1) {
                state.cartData.splice(data, 1)
            }

        },
        add(state, data) {
            console.log(data);
            state.cartData[data].count++;
        },
        // changeNum(state, data) {
        //     if (data.flag == 1) {
        //         state.cartData[data.index].count--;
        //         if (state.cartData[data.index].count < 1) {
        //             state.cartData.splice(data.index, 1)
        //         }
        //     } else {
        //         state.cartData[data.index].count++;
        //     }
        // },
        popShow(state) {
            state.isShowCart = !state.isShowCart;
        },
        closePop(state) {
            if (state.isShowCart) {
                state.isShowCart = false
            }
        }
        //加减结束
    },
    actions: {
        addAction(context, data) {
            context.commit("addCart", data)

        },
        //加减
        addActions(context, data) {
            context.commit("add", data)

        },
        subActions(context, data) {
            context.commit("sub1", data)

        },

        // changeAction(context, data) {
        //     context.commit("changeNum", data)

        // },
        changePop(context) {
            context.commit("popShow");
        },

        closePopAction(context) {
            context.commit("closePop")
        }


        //加减结束

    },
    getters: {
        totalCount(state) {
            let totalcount = 0;
            for (let i = 0; i < state.cartData.length; i++) {
                totalcount += state.cartData[i].count;
            }
            return totalcount;

        },
        totalPrice(state) {
            let totalprice = 0;
            for (let j = 0; j < state.cartData.length; j++) {
                totalprice += state.cartData[j].price * state.cartData[j].count;
            } return totalprice
        }
    }
})
export default store