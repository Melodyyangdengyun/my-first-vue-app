import { defineStore } from 'pinia'

// 定义一个Pinia store，用于管理计数器状态
export const useCounterStore = defineStore('counter', {
  // 状态定义
  state: () => ({
    count: 0,
    name: 'Pinia 计数器',
    // 加载状态，用于异步操作
    loading: false
  }),

  // 计算属性
  getters: {
    // 计算双倍计数
    doubleCount: (state) => state.count * 2,
    // 计算是否为偶数
    isEven: (state) => state.count % 2 === 0
  },

  // 方法
  actions: {
    // 增加计数
    increment() {
      this.count++
    },
    // 减少计数
    decrement() {
      this.count--
    },
    // 重置计数
    reset() {
      this.count = 0
    },
    // 异步增加计数
    async incrementAsync() {
      // 设置加载状态为true
      this.loading = true
      try {
        // 模拟异步操作
        await new Promise(resolve => setTimeout(resolve, 1000))
        // 增加计数
        this.count++
      } finally {
        // 无论成功失败，都设置加载状态为false
        this.loading = false
      }
    }
  }
})