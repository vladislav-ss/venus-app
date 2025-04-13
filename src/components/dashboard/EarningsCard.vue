<template>
  <div class="earnings-card quick-stat card">
    <div class="flex items-center gap-4">
      <div
        class="icon-container bg-gray-100 rounded-full w-[56px] h-[56px] flex items-center justify-center"
      >
        <img
          src="@/assets/images/icons/chart-stats.svg"
          class="w-[32px] h-[32px]"
          alt="Chart stats"
        />
      </div>

      <div class="info-container">
        <p class="label">Earnings</p>
        <p class="amount">${{ earnings }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getEarningsCurrentUser } from '../../api/earningsApi';

const earnings = ref(0);

onMounted(async () => {
  try {
    const earningsData = await getEarningsCurrentUser();
    const currentMonth = new Date().getMonth();
    earnings.value = earningsData
      .filter((earning) => new Date(earning.date).getMonth() === currentMonth)
      .reduce((total, earning) => total + earning.amount, 0);
  } catch (error) {
    console.error('Error fetching earnings:', error);
  }
});
</script>

<style scoped></style>
