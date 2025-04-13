<template>
  <main class="p-4 md:p-6 lg:p-8 flex-1 min-h-screen max-w-[100vw]">
    <div
      class="header flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 lg:mb-8 pt-12 lg:pt-0"
    >
      <GreetingCard />
      <SearchBar />
    </div>
    <div class="content">
      <div
        class="quick-stats grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8"
      >
        <QuickSpentCard class="min-h-[120px]" />
        <NewClientsCard class="min-h-[120px]" />
        <EarningsCard class="min-h-[120px]" />
        <ActivityCard class="min-h-[120px]" />
      </div>
      <div class="main-content flex flex-col md:flex-row gap-4 lg:gap-6 mb-6">
        <div class="w-full md:w-3/5 lg:w-2/3">
          <TotalSpentCard class="h-full" />
        </div>
        <div class="w-full md:w-2/5 lg:w-1/3">
          <UserCard class="h-full" />
        </div>
      </div>
      <div class="main-content grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
        <div class="w-full">
          <SpentThisMonthCard class="h-full" />
        </div>
        <div class="w-full">
          <TransactionsCard class="h-full" />
        </div>
        <div class="w-full sm:col-span-2 xl:col-span-1">
          <SchedulesCard class="h-full" />
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
import TransactionsCard from './dashboard/TransactionsCard.vue';
import SchedulesCard from './dashboard/SchedulesCard.vue';
</script>

<style scoped>
.main-content > div {
  display: flex;
  flex-direction: column;
}

.main-content > div > * {
  flex: 1;
  min-height: 200px;
}

@media (max-width: 640px) {
  .main-content > div > * {
    min-height: 180px;
  }
}
</style>
