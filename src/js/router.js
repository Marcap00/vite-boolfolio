import { createWebHistory, createRouter } from 'vue-router'

import AppHome from '@/pages/AppHome.vue'
import AppProjects from '@/pages/AppProjects.vue'
import AppTechnologies from '@/pages/AppTechnologies.vue'
import AppProjectsDetails from '@/pages/AppProjectsDetails.vue'

const routes = [
    { path: '/', component: AppHome, name: 'home' },
    { path: '/projects', component: AppProjects, name: 'projects' },
    { path: '/projects/:id', component: AppProjectsDetails, name: 'projects.details' },
    { path: '/technologies', component: AppTechnologies, name: 'technologies' }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router