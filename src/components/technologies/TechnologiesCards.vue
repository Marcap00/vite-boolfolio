<script>
import axios from 'axios';
import TechnologiesCardsItem from './TechnologiesCardsItem.vue';
import BaseLoader from '../general/BaseLoader.vue';

export default {
    name: "TechnologiesCards",
    components: {
        TechnologiesCardsItem,
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
    computed: {
        isTechnologiesLength() {
            return this.technologies.length
        }
    },
    created() {
        this.getDataProjects()
    }
};
</script>

<template>
    <BaseLoader v-show="!isTechnologiesLength" />
    <div v-show="isTechnologiesLength" class="row row-cols-4">
        <TechnologiesCardsItem v-for="technology in technologies" :key="technology.id" :technology="technology" />
    </div>
</template>

<style lang="scss" scoped></style>
