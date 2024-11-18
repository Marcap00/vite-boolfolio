<script>
import ProjectsDetailsCard from '@/components/projects/ProjectsDetailsCard.vue';
import axios from 'axios';

export default {
    name: "AppProjectsDetails",
    components: {
        ProjectsDetailsCard
    },
    props: {},
    data() {
        return {
            project: {},
            urlApi: 'http://127.0.0.1:8000/api/projects'
        };
    },
    methods: {
        getDataProject() {
            axios.get(`${this.urlApi}/${this.$route.params.id}`)
                .then((response) => {
                    console.log('=======Inizio chiamata Api single project=======');
                    console.log(response.data.results);
                    this.project = response.data.results;
                    console.log('Dati del progetto memorizzati in project:', this.project);
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    console.log('========Chiamata Api effettuata======');
                });
        }
    },
    computed: {},
    created() {
        this.getDataProject()
    }
};
</script>

<template>
    <main class="bg-body-tertiary py-3">
        <div class="container">
            <ProjectsDetailsCard :project="project" />
        </div>
    </main>
</template>

<style scoped></style>