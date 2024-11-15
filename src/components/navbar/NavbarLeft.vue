<script>
import { RouterLink } from 'vue-router';

export default {
    name: "NavbarLeft",
};
</script>

<template>
    <RouterLink :to="{ name: 'home' }">
        <img src="../../assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        Vite Boolfolio
    </RouterLink>
</template>

<style lang="scss" scoped>
a {
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    font-weight: 700;

    &:hover {
        text-decoration: none;
    }
}
</style>