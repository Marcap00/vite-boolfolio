<script>
import { RouterLink } from 'vue-router';

export default {
    name: "NavbarRight",
    data() {
        return {
            links: [
                {
                    routeName: 'home',
                    text: 'Home'
                },
                {
                    routeName: 'projects',
                    text: 'Projects',
                },
                {
                    routeName: 'technologies',
                    text: 'Technologies',
                }
            ]
        }
    },
};
</script>

<template>
    <div id="navbarNav">
        <ul class="navbar-nav">
            <li v-for="(link, index) in links" :key="index" class="nav-item">
                <RouterLink :to="{ name: link.routeName }" activeClass="active">
                    {{ link.text }}
                </RouterLink>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.active {
    color: white;
    font-weight: 600;
}
</style>