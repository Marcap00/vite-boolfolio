<script>
export default {
    name: "ProjectsCardItem",
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="col py-3">
        <div class="card text-center p-3 border-0 bg-transparent">
            <div class="card-img-top">
                <img v-if="project.image" :src="project.image" :alt="project.title">
                <img v-else class="rounded-3 img-fluid" :src="`https://placehold.co/400x300?text=${project.title}`"
                    alt="Project's name">
            </div>
            <div class="card-body flex justify-content-center">
                <p class="card-text">Category: <span class="fw-semibold">{{ project.type.name }}</span></p>
                <p class="card-text">
                    <span v-for="technology in project.technologies" class="badge text-black"
                        :style="`background-color: ${technology.color}`">
                        #{{ technology.name }}
                    </span>
                </p>
                <h4 class="card-title mb-3">{{ project.author }}</h4>
                <h6 class="card-subtitle mb-2 text-body-secondary">{{ project.title }}</h6>
                <p v-if="project.description" class="card-text">{{ project.description }}</p>
                <a class="btn btn-secondary px-4" :href="project.url">
                    <i class="fa-brands fa-github"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
