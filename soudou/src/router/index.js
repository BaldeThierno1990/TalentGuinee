import { createRouter, createWebHistory } from 'vue-router'

import Add from '../components/Add.vue'
import Login from '../components/Login.vue'
import Registration from '../components/Registration.vue'
import Update from '../components/Update.vue'
import List from '../components/List.vue'



const routes = [
  {
    path: '/',
    name: 'list',
    component:List
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
 {
   path: '/login',
   name: 'Login',
   component: Login
 },
 {
   path: '/registration',
   name: 'Registration',
   component: Registration

 },
 

 {
   path: '/update/:id',
   name: 'Update',
   component: Update

 },
 
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
