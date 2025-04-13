<template>
  <main class="p-4 md:p-6 lg:p-8 flex-1 min-h-screen max-w-[100vw]">
    <div
      class="header flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 lg:mb-4 pt-12 lg:pt-0"
    >
      <GreetingCard />
      <SearchBar />
    </div>
    <div class="content">
      <div
        class="quick-stats grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-6"
      >
        <QuickSpentCard class="min-h-[97px]" />
        <NewClientsCard class="min-h-[97px]" />
        <EarningsCard class="min-h-[97px]" />
        <ActivityCard class="min-h-[97px]" />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-6">
        <div class="md:col-span-2 flex flex-col min-h-[180px] sm:min-h-[200px]">
          <TotalSpentCard class="h-full flex-1" />
        </div>
        <div class="flex flex-col min-h-[180px] sm:min-h-[200px]">
          <UserCard class="h-full flex-1" />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        <div class="flex flex-col min-h-[180px] sm:min-h-[200px]">
          <SpentThisMonthCard class="h-full flex-1" />
        </div>
        <div class="flex flex-col min-h-[180px] sm:min-h-[200px]">
          <TransactionsCard class="h-full flex-1" />
        </div>
        <div class="flex flex-col min-h-[180px] sm:min-h-[200px]">
          <SchedulesCard class="h-full flex-1" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import GreetingCard from './GreetingCard.vue';
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
