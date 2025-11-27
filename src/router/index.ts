import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// 创建路由实例
const router = createRouter({
  // 使用HTML5历史模式
  history: createWebHistory(),
  // 路由配置数组
  routes: [
    {
      // 首页路由
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router