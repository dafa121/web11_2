import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/index'
import Detail from '@/views/detail'
import FileNot from '@/components/filenofound'
import About from '@/views/about'
import Login from '@/views/login'
import About1 from '@/components/about/about1'
import About2 from '@/components/about/about2'
import About3 from '@/components/about/about3'
import Center from '@/views/center'
import Order from '@/views/order'

Vue.use(Router)

let router=  new Router({
  mode: "history",
 scrollBehavior(to,from,savePosition){
    return{x:0,y:0}
  },
  linkActiveClass: "is-active",
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      alias: "/doc",
      meta:{
           showHeader:true
          }
    },
        
     {
       path: '/center',
        name: 'Center',
        component: Center,
        meta:{ 
          showHeader:true,
            login:true,
           
          }
      },
        
      {
        path: '/order',
        name: 'Order',
        component: Order,
        meta:{
            showHeader:true,
            login:true,
          }
      },
      
    
    {
      path: '/login',
      name: 'Login',
      component: Login,
       meta:{
           showHeader:false
          }
     
    },
    {
      path: '/detail/:gid',
      name: 'Detail',
      component: Detail,
       meta:{
           showHeader:true
          }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
       meta:{
           showHeader:true
          },
      children: [
        {
          path: '',
          component: About1,
          meta:{
            index:0,
            showHeader:true
          }
        },
        {
          path: 'two',
          component: About2,
          meta:{
            index:1,
            showHeader:true
          }
        },
        {
          path: 'three',
          component: About3,
          meta:{
            index:2,
            showHeader:true
          }
        }

      ]
    },

    // {
    //   path: '*',
    //   // component:FileNot
    //   // redirect:{path:"/"}
    //   redirect: (to) => {
    //     if (to.path == "/aaa") {
    //       return "/"
    //     } else if (to.path == "/bbb") {
    //       return "/about"
    //     } else {
    //       return { name: "About" }
    //     }
    //   }
    // }
  ]
})
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};
//进入d导航之前
router.beforeEach((to,from,next)=>{
  if(to.meta.login){
    let info=router.app.$local.fetch("user").userName;
    if(info){
      next();
    }else{
      alert("请先登录")
      router.push("/login");
    }
  }else{
    next();
  }
})

export default router
