<script>
import { RouterLink } from 'vue-router';

export default {
    name: "NavbarRight",
};
</script>

<template>
    <div id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <RouterLink :to="{ name: 'home' }">Home</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink :to="{ name: 'projects' }">Projects</RouterLink>
            </li>
            <!-- <li class="nav-item">
                            <RouterLink :to="">Technologies</RouterLink>
                        </li> -->
        </ul>
    </div>
</template>

<style lang="scss" scoped></style>