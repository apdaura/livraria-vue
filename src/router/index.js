import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home/Home.vue';
import Categorias from '@/views/Categorias/Categorias.vue';
import Colecoes from '@/views/Colecoes/Colecoes.vue';
import Login from '@/views/Login/Login.vue';
import Dashboard from '@/views/Dashboard/Dashboard.vue';
import Results from '@/views/Results/Results.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/categorias', component: Categorias },
  { path: '/colecoes', component: Colecoes },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/results', name: 'Results', component: Results },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
