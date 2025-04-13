<template>
  <div id="app" class="flex min-h-screen">
    <Menu class="fixed w-[290px]" />
    <div class="flex-1 ml-[290px]">
      <Dashboard />
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from './components/MenuDesktop.vue';
import Dashboard from './components/DashboardPanel.vue';
</script>

<style></style>
