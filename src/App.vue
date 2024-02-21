<script setup>
import { RouterView } from 'vue-router'
// import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <Sidebar />

  <RouterView />
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
