<script>
import axios from 'axios';
import ProjectsCardsItem from './ProjectsCardsItem.vue';

export default {
    components: {
        ProjectsCardsItem
    },
    data() {
        return {
            projects: [],
            urlApi: 'http://127.0.0.1:8000/api/projects'
        }
    },
    methods: {
        getDataProjects() {
            axios.get(this.urlApi)
                .then((response) => {
                    console.log('=======Inizio chiamata Api=======');
                    console.log(response.data.results);
                    this.projects = response.data.results;
                    console.log('Dati dei progetti memorizzati in projects:', this.projects);
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    console.log('========Chiamata Api effettuata======');
                });
        }
    },
    created() {
        this.getDataProjects()
    }
};
</script>

<template>
    <div class="container">
        <div class="row row-cols-4">
            <ProjectsCardsItem v-for="project in projects" :key="project.id" :project="project" />
        </div>
    </div>
</template>

<style lang="scss"></style>
