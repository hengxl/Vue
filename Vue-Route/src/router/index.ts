// 引入路由
import { createRouter, createWebHistory } from 'vue-router'

// 引入要呈现的组件
import Dog from '../components/Dog.vue'
import Cat from '../components/Cat.vue'
import Mouse from '../components/Mouse.vue'

// 创建路由器
const router = createRouter({
    // 使用HTML5的History工作模式
    history: createWebHistory(),
    // 定义路由规则
    routes: [
        { path: '/', component: Dog },
        { path: '/Dog', component: Dog },
        { path: '/cat', component: Cat },
        { path: '/mouse', component: Mouse }
    ]
})

// 导出路由器
export default router