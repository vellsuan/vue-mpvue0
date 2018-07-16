import Vue from 'vue'
import Router from 'vue-router'
import content from "./content";
// import customerManager from "./customerManager";
import Layout from "./../pages/layout/Index";
import Left from "./../pages/layout/LeftNav";
import login from "./login";
// import goodsManager from "./goodsManager";
// import orderManager from "./orderManager";
Vue.use(Router)
/* export default new Router({
  routes: [
    ...content,
    ...layout
  ]
}); */
const router = new Router({
  routes: [
    {
      path: "/",
      name: "layout",
      component: Layout,
      children: [
        // ...content,
        // ...goodsManager,
        // ...customerManager,
        // ...orderManager
        {
          path: "myPanel/:idx",
          name: "myPanel",
          components: {
            leftView: Left
          },
          children: [
            ...content
          ]
        },
        {
          path: "product/:idx",
          name: "product",
          components: {
            leftView: Left
          },
          children: [
            ...content
          ]
        },
        {
          path: "order/:idx",
          name: "order",
          components: {
            leftView: Left
          },
          children: [
            ...content
          ]
        }
      ]
    },
    ...login
  ]
});
// 路由监控如果路由没有配置则跳转上一页面
router.beforeEach((to, from, next) => {
  // 不需要进行授权验证的直接通过
  if(to.matched.length && to["matched"][0]["meta"].authed) {
    next();
    return;
  }
  if(!localStorage.userInfo) {
    next('/login');
    return;
  }
  if (to.matched.length === 0) {
    from.path ? next({ path: from.path }) : next('/');
  } else {
    next();// 如果匹配到正确跳转
  }
});
export default router;
