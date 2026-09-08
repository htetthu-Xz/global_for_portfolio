import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ServicesView from './views/ServicesView.vue'
import MembersView from './views/MembersView.vue'
import ContactView from './views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/services', component: ServicesView },
    { path: '/members', component: MembersView },
    { path: '/contact', component: ContactView },
  ],
})

createApp(App).use(router).mount('#app')
