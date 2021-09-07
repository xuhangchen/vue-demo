import Login from './pages/Login.vue';
import Home from './pages/Home.vue';
import ServeConfig from './pages/ServeConfig.vue';
import My from './pages/My.vue';
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';

const NotFound = { template: '<div>404</div>' };
export const routes = [
  // { path: '/', redirect: '/login' },
  {
    path: '/',
    component: Login,
    props: (route) => ({ code: route.query.code, state: route.query.state }),
  },
  { path: '/404', component: NotFound },
  { path: '/config', component: ServeConfig, childrens: [] },
  // { path: '/login', component: Login },
  { path: '/my', component: My },
  { path: '/home/:userName', component: Home, props: true, name: 'home' },
  { path: '/:pathMatch(.*)', redirect: '/home/默认用户' },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from) => {
//   let token = JSON.parse(window.localStorage.getItem('token'));
//   console.log({ token });
//   console.log(`to : ${to.fullPath} from : ${from.fullPath}`);
//   if (to.fullPath === '/login') {
//     return true;
//   } else {
//     if (!token) {
//       router.push('/code/state');
//     }
//   }

//   return token ? true : false;
// });
