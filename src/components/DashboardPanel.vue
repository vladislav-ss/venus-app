<template>
  <main class="p-8 flex-1 min-h-screen">
    <div class="header flex justify-between items-center mb-8">
      <GreetingCard />
      <SearchBar />
    </div>
    <div class="content">
      <div class="quick-stats grid grid-cols-4 gap-6 mb-8">
        <QuickSpentCard />
        <NewClientsCard />
        <EarningsCard />
        <ActivityCard />
      </div>
      <div class="main-content flex gap-6 mb-6">
        <div class="w-2/3">
          <TotalSpentCard />
        </div>
        <div class="w-1/3">
          <UserCard />
        </div>
      </div>
      <div class="main-content flex gap-6">
        <div class="w-1/3">
          <SpentThisMonthCard />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import GreetingCard from './dashboard/GreetingCard.vue';
import SearchBar from './SearchBar.vue';
import QuickSpentCard from './dashboard/QuickSpentCard.vue';
import NewClientsCard from './dashboard/NewClientsCard.vue';
import EarningsCard from './dashboard/EarningsCard.vue';
import ActivityCard from './dashboard/ActivityCard.vue';
import TotalSpentCard from './dashboard/TotalSpentCard.vue';
import UserCard from './dashboard/UserCard.vue';
import SpentThisMonthCard from './dashboard/SpentThisMonthCard.vue';
</script>

<style scoped></style>
