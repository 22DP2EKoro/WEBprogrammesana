import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';          
import Museums from '../components/Museums.vue';    
import Restaurants from '../components/Restaurants.vue'; 

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
