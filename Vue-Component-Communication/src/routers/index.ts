// 从 'vue-router' 中导入创建路由器和历史记录模式的函数
import { createRouter, createWebHistory } from 'vue-router'

// 导入所有需要被路由管理的页面组件
import Props from '@/pages/01_props/Father.vue'
import Event from '@/pages/02_custom-event/Father.vue'
import Bus from '@/pages/03_mitt/Father.vue'
import Model from '@/pages/04_v-model/Father.vue'
import AttrsListeners from '@/pages/05_$attrs/Father.vue'
import RefChildrenParent from '@/pages/06_$refs-$parent/Father.vue'
import ProvideInject from '@/pages/07_provide-inject/Father.vue'
import Pinia from '@/pages/08_pinia/Father.vue'
import Slot from '@/pages/09_slot/Father.vue'

// 创建并导出路由器实例
export default createRouter({
    // 使用 HTML5 History 模式，URL 更美观，不带 #
    history: createWebHistory(),
    // 定义路由规则数组
    routes: [
        {
            path: '/props',
            component: Props
        },
        {
            path: '/event',
            component: Event
        },
        {
            path: '/bus',
            component: Bus
        },
        {
            path: '/model',
            component: Model
        },
        {
            path: '/attrs-listeners',
            component: AttrsListeners
        },
        {
            path: '/ref-parent',
            component: RefChildrenParent
        },
        {
            path: '/provide-inject',
            component: ProvideInject
        },
        {
            path: '/pinia',
            component: Pinia
        },
        {
            path: '/slot',
            component: Slot
        },
    ]
})