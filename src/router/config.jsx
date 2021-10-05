import { lazy } from 'react'

const routes = [
  // {
  //   path: '/test',
  //   component: lazy(() => import('../pages/Test')),
  //   meta: {
  //     title: '测试页面',
  //   },
  //   // 若有子页面，此为参考
  //   routes: [
  //     {
  //       path: '/test/demo',
  //       component: lazy(() => import('../pages/Test/Demo')),
  //     },
  //     {
  //       path: '/test/demo2',
  //       component: lazy(() => import('../pages/Test/Demo2')),
  //     },
  //   ],
  // },

  // {
  //   path: '/login',
  //   component: lazy(() => import('../pages/Login')),
  //   meta: {
  //     title: '登录页面',
  //   },
  // },
  {
    path: '/index',
    component: lazy(() => import('../pages/Index')),
    // 如果要求严格路径
    isExact: true,
    meta: {
      title: '首页',
    },
  },
  {
    path: '/leader',
    component: lazy(() => import('../pages/Leader/leader.jsx')),
    isExact: true,
    meta: {
      title: '领导视察',
    },
  },
  {
    path: '/scaleteacher',
    component: lazy(() => import('../pages/Scaleteacher/scale')),
    isExact: true,
    meta: {
      title: '教师',
    },
  },
  {
    path: '/scalestuden',
    component: lazy(() => import('../pages/Scalestuden/scale')),
    isExact: true,
    meta: {
      title: '学生',
    },
  },
  {
    path: '/project',
    component: lazy(() => import('../pages/Project/project')),
    isExact: true,
    meta: {
      title: '团队项目',
    },
  },
  {
    path: '/honor',
    component: lazy(() => import('../pages/Honor/honor')),
    isExact: true,
    meta: {
      title: '团队荣誉',
    },
  },
  {
    path: '/active',
    component: lazy(() => import('../pages/Active/active')),
    isExact: true,
    meta: {
      title: '团队活动',
    },
  },
  {
    path: '/join',
    component: lazy(() => import('../pages/Join/join')),
    isExact: true,
    meta: {
      title: '加入我们',
    },
  },
]

export default routes
