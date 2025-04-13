<template>
  <div class="activity-card quick-stat card">
    <div class="flex justify-between">
      <div class="info-container">
        <p class="label">Activity</p>
        <p class="amount">${{ activity }}</p>
      </div>

      <div class="image-container flex items-end">
        <img src="@/assets/images/graphics/activity-chart.svg" alt="Activity graph" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getEarningsCurrentUser } from '../../api/earningsApi';

const activity = ref(0);

onMounted(async () => {
  try {
    const earningsData = await getEarningsCurrentUser();
    activity.value = earningsData.reduce((total, earning) => total + earning.amount, 0);
  } catch (error) {
    console.error('Error fetching earnings:', error);
  }
});
</script>

<style scoped></style>
