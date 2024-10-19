<script setup>
import DefaultLayoutWithVerticalNav from './components/DefaultLayoutWithVerticalNav.vue'
// import DefaultLayoutFrontPage from './components/DefaultLayoutFrontPage.vue';
import DefaultLayoutFrontPage from './components/form-k-iqra/DefaultLayoutFrontPage.vue';
</script>

<template>
  <!-- <DefaultLayoutWithVerticalNav> -->
    <DefaultLayoutFrontPage>
      <RouterView />
    </DefaultLayoutFrontPage>
  <!-- </DefaultLayoutWithVerticalNav> -->
</template>

<style lang="scss">
// As we are using `layouts` plugin we need its styles to be imported
@use "@layouts/styles/default-layout";
</style>
