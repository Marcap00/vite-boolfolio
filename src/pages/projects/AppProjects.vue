<script>
import ProjectsCards from './ProjectsCards.vue';

export default {
    name: "AppProjects",
    components: {
        ProjectsCards
    },
};
</script>

<template>
    <main class="bg-body-tertiary">
        <div class="container">
            <div class="row row-cols-4">
                <ProjectsCards />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped></style>