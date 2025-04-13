<template>
  <div id="app" class="flex min-h-screen">
    <Menu />
    <div class="flex-1 lg:ml-[290px]">
      <Dashboard />
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from './components/MenuDesktop.vue';
import Dashboard from './components/DashboardPanel.vue';
</script>

<style></style>
