<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    computed: {
        UpperCaseTitle() {
            const firstLetter = this.project.title.charAt(0).toUpperCase();
            return firstLetter + this.project.title.substring(1);
        }
    },
    methods: {
        emitCloseModal() {
            this.$emit('closeModal')
        }
    }
};
</script>

<template>
    <div class="d-block modal text-white" id="exampleModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">{{ UpperCaseTitle }} details</h1>
                    <button type="button" class="btn-close" @click="emitCloseModal()"></button>
                </div>
                <div class="modal-body text-center">
                    <p class="card-text">Category: <span class="fw-semibold">{{ project.type.name }}</span></p>
                    <img v-if="project.image" :src="project.image" :alt="project.title">
                    <img v-else class="img-fluid rounded mb-2"
                        :src="`https://placehold.co/400x300?text=${project.title}`" alt="Project's name">
                    <p class="card-text">
                        <span v-for="technology in project.technologies" class="badge text-black"
                            :style="`background-color: ${technology.color}`">
                            #{{ technology.name }}
                        </span>
                    </p>
                    <div class="project-details text-start">
                        <h3>Author: <span class="fw-semibold">{{ project.author }}</span> </h3>
                        <p>Title: <span class="fw-semibold">{{ project.title }}</span> </p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-warning" @click="emitCloseModal()">Back <i
                            class="fas fa-arrow-left"></i></button>
                    <a class="btn btn-secondary px-4 me-2" :href="project.url">
                        <i class="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>