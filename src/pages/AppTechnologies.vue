<script>
import TechnologiesCards from '../components/technologies/TechnologiesCards.vue';

export default {
    name: "AppTechnologies",
    components: {
        TechnologiesCards
    },
};
</script>

<template>
    <main class="bg-body-tertiary">
        <div class="container">
            <TechnologiesCards />
        </div>
    </main>
</template>

<style lang="scss" scoped></style>