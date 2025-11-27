<template>
  <div class="home-container">
    <h1>Vue3 学习项目</h1>
    
    <!-- Vue3 技术列表 -->
    <el-card class="tech-card">
      <template #header>
        <div class="card-header">
          <span>Vue3 核心技术</span>
        </div>
      </template>
      <el-list>
        <el-list-item v-for="tech in vue3Techs" :key="tech.id">
          <template #main>
            <div class="tech-item">
              <h3>{{ tech.title }}</h3>
              <p>{{ tech.description }}</p>
            </div>
          </template>
        </el-list-item>
      </el-list>
    </el-card>

    <!-- 路由技术列表 -->
    <el-card class="tech-card">
      <template #header>
        <div class="card-header">
          <span>Vue Router 技术</span>
        </div>
      </template>
      <el-list>
        <el-list-item v-for="tech in routerTechs" :key="tech.id">
          <template #main>
            <div class="tech-item">
              <h3>{{ tech.title }}</h3>
              <p>{{ tech.description }}</p>
            </div>
          </template>
        </el-list-item>
      </el-list>
    </el-card>

    <!-- Element Plus 组件示例 -->
    <el-card class="tech-card">
      <template #header>
        <div class="card-header">
          <span>Element Plus 组件示例</span>
        </div>
      </template>
      <div class="demo-container">
        <!-- 按钮组件 -->
        <div class="demo-section">
          <h3>按钮组件</h3>
          <div class="button-group">
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
            <el-button type="info">信息按钮</el-button>
          </div>
        </div>

        <!-- 输入框组件 -->
        <div class="demo-section">
          <h3>输入框组件</h3>
          <el-input v-model="inputValue" placeholder="请输入内容" style="width: 300px;">
            <template #prefix>
              <el-icon><Search /></el-icon>
            </template>
          </el-input>
          <p class="input-result">输入内容：{{ inputValue }}</p>
        </div>

        <!-- 选择器组件 -->
        <div class="demo-section">
          <h3>选择器组件</h3>
          <el-select v-model="selectedOption" placeholder="请选择" style="width: 200px;">
            <el-option label="选项1" value="option1"></el-option>
            <el-option label="选项2" value="option2"></el-option>
            <el-option label="选项3" value="option3"></el-option>
          </el-select>
          <p class="select-result">选择结果：{{ selectedOption }}</p>
        </div>
      </div>
    </el-card>

    <!-- Pinia 状态管理示例 -->
    <el-card class="tech-card">
      <template #header>
        <div class="card-header">
          <span>Pinia 状态管理示例</span>
        </div>
      </template>
      <div class="demo-container">
        <h3>{{ counterStore.name }}</h3>
        <div class="counter-display">
          <p>当前计数：<span class="count-value">{{ counterStore.count }}</span></p>
          <p>双倍计数：<span class="count-value">{{ counterStore.doubleCount }}</span></p>
          <p>是否为偶数：<span :class="{ 'even': counterStore.isEven, 'odd': !counterStore.isEven }">{{ counterStore.isEven ? '是' : '否' }}</span></p>
        </div>
        <div class="counter-buttons">
          <el-button type="primary" @click="counterStore.increment">+1</el-button>
          <el-button type="danger" @click="counterStore.decrement">-1</el-button>
          <el-button type="warning" @click="counterStore.reset">重置</el-button>
          <el-button type="info" @click="counterStore.incrementAsync" :loading="counterStore.loading">异步+1</el-button>
        </div>
      </div>
    </el-card>

    <!-- Element Plus 所有组件列表 -->
    <el-card class="tech-card">
      <template #header>
        <div class="card-header">
          <span>Element Plus 所有组件</span>
        </div>
      </template>
      <div class="demo-container">
        <!-- 基础组件 -->
        <div class="demo-section">
          <h3>基础组件</h3>
          <el-tag v-for="component in basicComponents" :key="component" class="component-tag">{{ component }}</el-tag>
        </div>

        <!-- 表单组件 -->
        <div class="demo-section">
          <h3>表单组件</h3>
          <el-tag v-for="component in formComponents" :key="component" class="component-tag">{{ component }}</el-tag>
        </div>

        <!-- 数据组件 -->
        <div class="demo-section">
          <h3>数据组件</h3>
          <el-tag v-for="component in dataComponents" :key="component" class="component-tag">{{ component }}</el-tag>
        </div>

        <!-- 通知组件 -->
        <div class="demo-section">
          <h3>通知组件</h3>
          <el-tag v-for="component in notificationComponents" :key="component" class="component-tag">{{ component }}</el-tag>
        </div>

        <!-- 导航组件 -->
        <div class="demo-section">
          <h3>导航组件</h3>
          <el-tag v-for="component in navigationComponents" :key="component" class="component-tag">{{ component }}</el-tag>
        </div>

        <!-- 其他组件 -->
        <div class="demo-section">
          <h3>其他组件</h3>
          <el-tag v-for="component in otherComponents" :key="component" class="component-tag">{{ component }}</el-tag>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
// 导入Vue的ref函数，用于创建响应式数据
import { ref, watch } from 'vue'
// 导入Element Plus图标
import { Search } from '@element-plus/icons-vue'
// 导入Pinia store
import { useCounterStore } from '../stores/counter'

// Vue3核心技术列表数据
// ref函数可以让数据变成响应式的，当数据变化时，页面会自动更新
const vue3Techs = ref([
  {
    id: 1,
    title: '组合式API (Composition API)',
    description: 'Vue3的核心特性，允许我们使用函数式的方式组织组件逻辑，更好地复用代码。' +
                 '通过setup函数，我们可以在组件中使用各种API，如ref、computed、watch等。'
  },
  {
    id: 2,
    title: '响应式系统',
    description: 'Vue3使用Proxy实现的响应式系统，比Vue2的Object.defineProperty更加强大，' +
                 '可以监听对象属性的添加、删除，以及数组的索引和长度变化。'
  },
  {
    id: 3,
    title: '单文件组件 (SFC)',
    description: '使用.vue文件组织组件的模板、脚本和样式，让组件结构更加清晰。'
  },
  {
    id: 4,
    title: 'TypeScript支持',
    description: 'Vue3原生支持TypeScript，提供了更好的类型推断和IDE提示。'
  },
  {
    id: 5,
    title: 'Teleport',
    description: '允许我们将组件的内容渲染到DOM树中的任何位置，非常适合模态框、提示框等场景。'
  }
])

// Vue Router技术列表数据
const routerTechs = ref([
  {
    id: 1,
    title: '声明式路由配置',
    description: '通过routes数组配置路由规则，每个规则定义了路径、组件等信息。'
  },
  {
    id: 2,
    title: '嵌套路由',
    description: '支持路由的嵌套，实现复杂的页面结构。'
  },
  {
    id: 3,
    title: '编程式导航',
    description: '通过router.push()、router.replace()等方法实现页面跳转。'
  },
  {
    id: 4,
    title: '动态路由',
    description: '通过:param定义动态路径参数，可以匹配不同的URL。'
  },
  {
    id: 5,
    title: '路由守卫',
    description: '包括全局守卫、路由守卫和组件守卫，可以在路由跳转前后执行逻辑。'
  }
])

// Element Plus组件示例数据
// 输入框绑定的值
const inputValue = ref('')
// 选择器绑定的值
const selectedOption = ref('')

// Pinia状态管理示例
// 创建Pinia store实例
const counterStore = useCounterStore()

// Element Plus组件分类数据
// 基础组件
const basicComponents = ref([
  'Button 按钮',
  'Border 边框',
  'Color 色彩',
  'Container 布局容器',
  'Icon 图标',
  'Layout 布局',
  'Link 链接',
  'Text 文本',
  'Scrollbar 滚动条',
  'Space 间距',
  'Splitter 分隔面板',
  'Typography 排版'
])

// 表单组件
const formComponents = ref([
  'Autocomplete 自动补全输入框',
  'Cascader 级联选择器',
  'Checkbox 多选框',
  'ColorPicker 颜色选择器',
  'ColorPickerPanel 颜色选择器面板',
  'DatePicker 日期选择器',
  'DateTimePicker 日期时间选择器',
  'Form 表单',
  'Input 输入框',
  'InputNumber 数字输入框',
  'Radio 单选框',
  'Rate 评分',
  'Select 选择器',
  'Slider 滑块',
  'Switch 开关',
  'TimePicker 时间选择器',
  'Transfer 穿梭框',
  'TreeSelect 树形选择器',
  'Upload 上传'
])

// 数据组件
const dataComponents = ref([
  'Avatar 头像',
  'Badge 角标',
  'Calendar 日历',
  'Card 卡片',
  'Carousel 走马灯',
  'Collapse 折叠面板',
  'Descriptions 描述列表',
  'Empty 空状态',
  'Image 图片',
  'InfiniteScroll 无限滚动',
  'Progress 进度条',
  'Result 结果',
  'Skeleton 骨架屏',
  'Statistic 统计数值',
  'Table 表格',
  'Tag 标签',
  'Timeline 时间线',
  'Tooltip 文字提示',
  'Tree 树形控件',
  'VirtualList 虚拟列表'
])

// 通知组件
const notificationComponents = ref([
  'Alert 警告',
  'Drawer 抽屉',
  'Loading 加载',
  'Message 消息提示',
  'MessageBox 弹框',
  'Notification 通知',
  'Popconfirm 气泡确认框',
  'Popover 气泡卡片',
  'Dialog 对话框',
  'Tooltip 文字提示'
])

// 导航组件
const navigationComponents = ref([
  'Breadcrumb 面包屑',
  'Dropdown 下拉菜单',
  'Menu 菜单',
  'PageHeader 页头',
  'Pagination 分页',
  'Steps 步骤条',
  'Tabs 标签页',
  'Affix 固钉',
  'Backtop 回到顶部'
])

// 其他组件
const otherComponents = ref([
  'ConfigProvider 全局配置',
  'Divider 分割线',
  'Drawer 抽屉',
  'ImageViewer 图片查看器',
  'Popper 弹出定位',
  'Teleport 传送门',
  'Watermark 水印'
])
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

.tech-card {
  margin-bottom: 30px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tech-item {
  padding: 10px 0;
}

.tech-item h3 {
  color: #409eff;
  margin-bottom: 8px;
}

.tech-item p {
  color: #606266;
  line-height: 1.6;
}

/* Element Plus组件示例样式 */
.demo-container {
  padding: 20px 0;
}

.demo-section {
  margin-bottom: 30px;
}

.demo-section h3 {
  color: #409eff;
  margin-bottom: 15px;
  font-size: 18px;
}

.button-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.input-result,
.select-result {
  margin-top: 10px;
  color: #606266;
}

/* Pinia状态管理示例样式 */
.counter-display {
  margin-bottom: 20px;
}

.count-value {
  font-size: 24px;
  font-weight: bold;
  color: #409eff;
  margin: 0 10px;
}

.even {
  color: #67c23a;
  font-weight: bold;
}

.odd {
  color: #f56c6c;
  font-weight: bold;
}

.counter-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

/* Element Plus组件标签样式 */
.component-tag {
  margin: 5px;
  cursor: pointer;
  transition: all 0.3s;
}

.component-tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
</style>