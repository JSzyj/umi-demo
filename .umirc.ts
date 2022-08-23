import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/home', component: '@/pages/home/index' },
        // { path: '/admin', component: 'admin' },
      ],
    },
    //  {path:'/home',component: '@/pages/home/index'}
  ],
  fastRefresh: {},
});
