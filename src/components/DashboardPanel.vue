<template>
  <main>
    <div class="dashboard__header flex justify-around">
      <GreetingCard />
      <SearchBar />
    </div>
    <div class="content">
      <div class="quick-stats flex">
        <SpentThisMonthCard />
        <NewClientsCard />
        <EarningsCard />
        <ActivityCard />
      </div>
      <div class="main-content"></div>
      <div class="sidebar"></div>
    </div>
  </main>
</template>

<script setup lang="ts">
import GreetingCard from './dashboard/GreetingCard.vue';
import SearchBar from './SearchBar.vue';
import SpentThisMonthCard from './dashboard/SpentThisMonthCard.vue';
import NewClientsCard from './dashboard/NewClientsCard.vue';
import EarningsCard from './dashboard/EarningsCard.vue';
import ActivityCard from './dashboard/ActivityCard.vue';
</script>

<style></style>
