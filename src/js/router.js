import { createWebHistory, createRouter } from 'vue-router'

import AppHome from '@/pages/AppHome.vue'
import AppProjects from '@/pages/AppProjects.vue'
import AppTechnology from '@/pages/AppTechnology.vue'
import AppProjectsDetails from '@/pages/AppProjectsDetails.vue'

const routes = [
    { path: '/', component: AppHome, name: 'home' },
    { path: '/projects', component: AppProjects, name: 'projects' },
    { path: '/projects/:id', component: AppProjectsDetails, name: 'projects.details' },
    { path: '/technologies', component: AppTechnology, name: 'technologies' }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router