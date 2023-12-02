import { createRouter, createWebHistory } from 'vue-router'; // Importe as funções do Vue Router
import HomeView from '../views/HomeView.vue'
import CarView from '../views/CarView.vue'




const routes = [
    {
     path:'/',
     name:'home',
     component: HomeView

    },
    {
      path:'/car',
      name:'car',
      component: CarView
 
     },
     {
      path:'/category/:cat',
      name:'category',
      component: HomeView,
      props:true
 
     }
    

  // Defina suas rotas aqui

]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router