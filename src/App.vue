<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppHeader,
    AppMain
  }
};
</script>

<template>
  <div data-bs-theme="dark">
    <AppHeader />
    <AppMain />
  </div>
</template>

<style lang="scss">
@use "bootstrap/scss/bootstrap.scss" as *;
@use "./scss/main.scss" as *;
</style>