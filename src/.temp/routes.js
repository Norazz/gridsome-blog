const c1 = () => import(/* webpackChunkName: "page--src--templates--project-post-vue" */ "/Users/zhangziru/font-end/Gridsome-demo/my-gridsome-site/src/templates/ProjectPost.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--journal-post-vue" */ "/Users/zhangziru/font-end/Gridsome-demo/my-gridsome-site/src/templates/JournalPost.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--journal-vue" */ "/Users/zhangziru/font-end/Gridsome-demo/my-gridsome-site/src/pages/Journal.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/zhangziru/font-end/Gridsome-demo/my-gridsome-site/src/pages/Contact.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/zhangziru/font-end/Gridsome-demo/my-gridsome-site/src/pages/About.vue")
const c6 = () => import(/* webpackChunkName: "page--node-modules--gridsome-0-7-23-gridsome--app--pages--404-vue" */ "/Users/zhangziru/font-end/Gridsome-demo/my-gridsome-site/node_modules/_gridsome@0.7.23@gridsome/app/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/zhangziru/font-end/Gridsome-demo/my-gridsome-site/src/pages/Index.vue")

export default [
  {
    path: "/projects/sunk/",
    component: c1
  },
  {
    path: "/journal/use-gridsome-vuejs/",
    component: c2
  },
  {
    path: "/projects/ios-concept/",
    component: c1
  },
  {
    path: "/journal/macos-development-environment/",
    component: c2
  },
  {
    path: "/projects/chelsea-landmark/",
    component: c1
  },
  {
    path: "/journal/gridsome-forestry-cms/",
    component: c2
  },
  {
    path: "/journal/a-journal-entry/",
    component: c2
  },
  {
    path: "/projects/3d-graff/",
    component: c1
  },
  {
    path: "/journal/",
    component: c3
  },
  {
    path: "/contact/",
    component: c4
  },
  {
    path: "/about/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
