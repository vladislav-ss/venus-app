<template>
  <div id="app" class="flex min-h-screen">
    <Menu />
    <div class="flex-1 lg:ml-[290px]">
      
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from './components/NavigationMenu.vue';
</script>

<style></style>
