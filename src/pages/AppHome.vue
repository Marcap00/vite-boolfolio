<script>
import { RouterLink } from 'vue-router';
export default {
    data() {
        return {}
    },
};
</script>

<template>
    <main class="bg-body-tertiary d-flex justify-content-center align-items-center">
        <RouterLink :to="{ name: 'projects' }">
            <h3>Vai al progetto <i class="fas fa-arrow-right"></i></h3>
        </RouterLink>
    </main>
</template>

<style lang="scss" scoped></style>