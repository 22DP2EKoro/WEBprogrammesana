import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';         
import Museums from '../pages/Museums.vue';    
import Restaurants from '../pages/Restaurants.vue';
import Intro from '../pages/Intro.vue'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,  
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,  
  },
  {
    path: '/museums',
    name: 'Museums',
    component: Museums,  
  },
  {
    path: '/restaurants',
    name: 'Restaurants',
    component: Restaurants, 
  },
  {
    path: '/intro',
    name: 'Intro',
    component: Intro, 
  }
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
