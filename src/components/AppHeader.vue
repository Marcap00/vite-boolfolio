<script>
import { RouterLink } from 'vue-router';
export default {
    name: "AppHeader",
    data() {
        return {

        }
    }
};
</script>

<template>
    <header class="sticky-top border-bottom">
        <nav class="navbar navbar-expand bg-body-tertiary">
            <div class="container">
                <div class="w-100 d-flex justify-content-between align-items-center">
                    <a class="navbar-brand" href="#">
                        <img src="../assets/logo.svg" alt="Logo" width="30" height="24"
                            class="d-inline-block align-text-top">
                        Vite Boolfolio
                    </a>
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
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
nav {
    height: 60px;

    a {
        text-decoration: none;
        color: #fff;
        margin-left: .5rem;
    }
}
</style>