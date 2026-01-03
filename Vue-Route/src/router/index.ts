// 引入路由
import { createRouter, createWebHistory } from "vue-router";

// 引入要呈现的组件
import Dog from "../views/Dog.vue";
import Cat from "../views/Cat.vue";
import Mouse from "../views/Mouse.vue";
import DogDetail from "../views/DogDetail.vue";

// 创建路由器
const router = createRouter({
  // 使用HTML5的History工作模式
  history: createWebHistory(),
  // 定义路由规则
  routes: [
    // 重定向到狗狗页面
    { path: "/",
      redirect: '/cat'
    },
    {
      name: "gou",
      path: "/dog",
      component: Dog,
      children: [
        // {
        //   name: "gou-detail",
        //   path: "detail",
        //   component: DogDetail,
        // },
        {
          // ?表示age参数可传可不传
          name: "gou-detail",
          path: "detail/:id/:name/:age?",
          component: DogDetail, // 类似于 <DogDetail />
          // props: true, // 开启props传参 仅适用params传参
          props: (route) => route.params // 使用函数形式 兼容params和query传参
        },
      ],
    },
    { path: "/cat", component: Cat },
    { path: "/mouse", component: Mouse },
  ],
});

// 导出路由器
export default router;
