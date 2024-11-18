<script>
export default {
    name: "ProjectsDetailsCard",
    components: {},
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
        };
    },
    methods: {

    },
    computed: {
        imageUrl() {
            return `https://placehold.co/400x300?text=${this.project.title}`
        },
    },
};
</script>

<template>
    <div class="card text-center border-1 bg-transparent py-3">
        <div class="card-body flex justify-content-center p-0">
            <p class="card-text">Category: <span class="fw-semibold">{{ project.type.name }}</span></p>
            <div class="card-img-top mb-2">
                <img v-if="project.image" :src="project.image" :alt="project.title">
                <img v-else class="img-fluid" :src="imageUrl" :alt="project.title">
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
            <a class="btn btn-secondary px-4 me-2" :href="project.url">
                <i class="fa-brands fa-github"></i>
            </a>
        </div>
    </div>
</template>

<style scoped></style>