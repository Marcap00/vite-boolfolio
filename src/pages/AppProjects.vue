<script>
import ProjectsCards from '../components/projects/ProjectsCards.vue';

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
            <ProjectsCards />
        </div>
    </main>
</template>

<style lang="scss" scoped></style>