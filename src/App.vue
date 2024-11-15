<script>
import AppHeader from './components/AppHeader.vue';
import AppHome from './pages/AppHome.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppHome
  }
};
</script>

<template>
  <div data-bs-theme="dark">
    <AppHeader />
    <AppHome />
  </div>
</template>

<style lang="scss">
@use "bootstrap/scss/bootstrap.scss" as *;
@use "./scss/main.scss" as *;
</style>