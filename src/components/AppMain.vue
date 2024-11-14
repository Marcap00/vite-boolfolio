<script>
import axios from 'axios';

export default {
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

    <main class="bg-body-tertiary">
        <div class="container">
            <div class="row row-cols-4">
                <div v-for="project in projects" :key="project.id" class="col py-3">
                    <div class="card text-center p-3 border-0 bg-transparent">
                        <div class="card-img-top">
                            <img v-if="project.image" :src="project.image" :alt="project.title">
                            <img v-else class="rounded-3 img-fluid"
                                :src="`https://placehold.co/400x300?text=${project.title}`" alt="Project's name">
                        </div>
                        <div class="card-body flex justify-content-center">
                            <p class="card-text">Category: <span class="fw-semibold">{{ project.type.name }}</span></p>
                            <p class="card-text">

                                <span v-for="technology in project.technologies" class="badge text-black"
                                    :style="`background-color: ${technology.color}`">
                                    #{{ technology.name }}
                                </span>

                            </p>
                            <h4 class="card-title mb-3">{{ project.title }}</h4>
                            <h6 class="card-subtitle mb-2 text-body-secondary">{{ project.author }}</h6>
                            <p v-if="project.description" class="card-text">{{ project.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>


</template>

<style lang="scss"></style>