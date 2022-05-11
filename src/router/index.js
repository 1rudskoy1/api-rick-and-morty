import { createRouter, createWebHistory } from 'vue-router'
import RickAndMortyList from '../views/RickAndMortyList.vue'
import RickAndMortyCharacters from '../views/RickAndMortyCharacters.vue'

const routes = [
  {
    path: '/',
    name: 'RickAndMortyList',
    component: RickAndMortyList
  },
  {
    path: '/character',
    name: 'RickAndMortyCharacters',
    component: RickAndMortyCharacters
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
