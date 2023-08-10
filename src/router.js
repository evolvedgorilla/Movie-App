// import Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HomeComponent.vue';
// import Cart from './components/CartComponent.vue';

// Vue.use(VueRouter);

const routes = [
  { path: '/home', component: Home },
//   { path: '/cart', component: Cart }
];


const router = createRouter({
    history: createWebHistory(),
    routes
  });

export default router;
