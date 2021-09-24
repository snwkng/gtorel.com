import {createWebHistory, createRouter} from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/pages/Search.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
