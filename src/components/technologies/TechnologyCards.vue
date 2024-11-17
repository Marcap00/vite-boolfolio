<script>
import axios from 'axios';
import TechnologyCardsItem from './TechnologyCardsItem.vue';
import BaseLoader from '../general/BaseLoader.vue';

export default {
    name: "TechnologyCards",
    components: {
        TechnologyCardsItem,
        BaseLoader
    },
    data() {
        return {
            technologies: [],
            urlApi: 'http://127.0.0.1:8000/api/technologies'
        }
    },
    methods: {
        getDataProjects() {
            axios.get(this.urlApi)
                .then((response) => {
                    console.log('=======Inizio chiamata Api=======');
                    console.log(response.data.results);
                    this.technologies = response.data.results;
                    console.log('Dati dei progetti memorizzati in technologies:', this.technologies);
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
    <BaseLoader v-if="!this.technologies.length" />
    <div v-else class="row row-cols-4">
        <TechnologyCardsItem v-show="this.technologies.length" v-for="technology in technologies" :key="technology.id"
            :technology="technology" />
    </div>
</template>

<style lang="scss" scoped></style>
