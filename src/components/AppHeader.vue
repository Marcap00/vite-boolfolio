<script>
export default {
    name: "AppHeader",
    data() {
        return {

        }
    }
};
</script>

<template>
    <header class="sticky-top">
        <nav class="navbar navbar-expand bg-body-tertiary">
            <div class="container">
                <div class="w-100 d-flex justify-content-between">
                    <a class="navbar-brand" href="#">
                        <img src="../assets/logo.svg" alt="Logo" width="30" height="24"
                            class="d-inline-block align-text-top">
                        Vite Boolfolio
                    </a>
                    <div id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Technologies</a>
                            </li>
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
}
</style>