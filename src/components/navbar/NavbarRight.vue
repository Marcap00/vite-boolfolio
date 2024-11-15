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
                <RouterLink :to="{ name: 'home' }" activeClass="active">Home</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink :to="{ name: 'projects' }" activeClass="active">Projects</RouterLink>
            </li>
            <!-- <li class="nav-item">
                            <RouterLink :to="">Technologies</RouterLink>
                        </li> -->
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.active {
    color: white;
    font-weight: 600;
}
</style>