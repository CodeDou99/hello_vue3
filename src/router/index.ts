//创建一个路由器,并暴露出去

//第一步,引入crateRouter
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
//引入 一个可能要呈现的组件
import Home from '@/pages/Home.vue'
import News from "@/pages/News.vue";
import About from "@/pages/About.vue";
import Detail from "@/pages/Detail.vue";


//第二部:创建路由器
const router = createRouter({
    // history: createWebHashHistory(),//路由器工作模式,稍后讲解
    history:createWebHistory(),
    routes: [{
        name: 'daohang',
        path: '/home',
        component: Home
    },
    {
        path: '/news',
        component: News,
        children: [
            {
                name: 'xiangqing',
                // path: 'detail/:id/:title/:content',
                path: 'detail',
                component: Detail,
                // props:true
                props(route) {
                    return route.query
                }
            }
        ]
    },
    {
        path: '/about',
        component: About
    },
    {
        path:'/',
        redirect:'/home'
    }
    ]
})

export default router
