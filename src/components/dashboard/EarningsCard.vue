<template>
  <div class="earnings-card card">
    <h3 class="font-bold">Earnings</h3>
    <p class="client-count">${{ earnings }}</p>
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
