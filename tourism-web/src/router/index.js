import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';          
import Museums from '../pages/Museums.vue';    
import Restaurants from '../pages/Restaurants.vue'; 

const routes = [
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
