// 路由懒加载 vue-loader v13.0.0后增加的 需要请查看链接
// https://github.com/vuejs/vue-loader/releases/tag/v13.0.0
const Index = () => import("../pages/content/index/Index").then(m => m.default);

const content = [
  {
    path: 'index',
    name: 'index',
    component: Index
  }
]

export default content;
