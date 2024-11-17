<script>
import TechnologyCards from '../components/technologies/TechnologyCards.vue';

export default {
    name: "AppTechnology",
    components: {
        TechnologyCards
    },
};
</script>

<template>
    <main class="bg-body-tertiary">
        <div class="container">

            <TechnologyCards />
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    height: calc(100vh - 60px);
    overflow-y: scroll;
}
</style>