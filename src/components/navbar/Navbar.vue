<script>
import NavbarLeft from './NavbarLeft.vue';
import NavbarRight from './NavbarRight.vue';

export default {
    name: "Navbar",
    components: {
        NavbarLeft,
        NavbarRight
    }
};
</script>

<template>
    <nav class="navbar navbar-expand bg-body-tertiary">
        <div class="container">
            <div class="w-100 d-flex justify-content-between align-items-center">
                <NavbarLeft />
                <NavbarRight />
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    height: 60px;
}
</style>