<script>
import ProjectsCardsItemModal from './ProjectsCardsItemModal.vue';

export default {
    name: "ProjectsCardItem",
    components: {
        ProjectsCardsItemModal
    },
    data() {
        return {
            modal: false,
        }
    },
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    methods: {
        toggleModal() {
            return this.modal = !this.modal
        },
    },
    computed: {
        getImageUrl() {
            return `https://placehold.co/400x300?text=${this.project.title}`
        },
        showModal() {
            return this.modal
        },
        technologyBackground() {
            this.project.technologies.forEach(technology => {
                return `background-color: ${technology.color}`
            });
        }
    }
}
</script>

<template>
    <div class="col py-3">
        <div class="card text-center border-1 bg-transparent py-3">

            <div class="card-body flex justify-content-center p-0">
                <RouterLink :to="{ name: 'projects.details', params: { 'id': project.id } }"
                    class="m-0 text-decoration-none">
                    <p class="card-text">Category: <span class="fw-semibold">{{ project.type.name }}</span></p>
                    <div class="card-img-top mb-2">
                        <img v-if="project.image" :src="project.image" :alt="project.title">
                        <img v-else class="img-fluid" :src="getImageUrl" :alt="project.title">
                    </div>
                    <p class="card-text">
                        <span v-for="technology in project.technologies" class="badge text-black mx-2"
                            :style="`background-color: ${technology.color}`">
                            #{{ technology.name }}
                        </span>
                    </p>
                    <h4 class="card-title mb-3">{{ project.author }}</h4>
                    <h6 class="card-subtitle mb-2 text-body-secondary">{{ project.title }}</h6>
                    <p v-if="project.description" class="card-text">{{ project.description }}</p>
                </RouterLink>
                <a class="btn btn-secondary px-4 me-2" :href="project.url">
                    <i class="fa-brands fa-github"></i>
                </a>
                <button type="button" class="btn btn-success" @click="toggleModal()">
                    <i class="fas fa-eye px-2"></i>
                </button>
            </div>

        </div>
        <!-- Modal -->
        <ProjectsCardsItemModal v-if="showModal" :project="project" @closeModal="toggleModal()" />
    </div>
</template>

<style lang="scss" scoped></style>
