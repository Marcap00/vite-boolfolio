<script>
import Navbar from './navbar/Navbar.vue';
export default {
    name: "AppHeader",
    components: {
        Navbar
    }
};
</script>

<template>
    <header class="sticky-top border-bottom">
        <Navbar />
    </header>
</template>

<style lang="scss" scoped></style>