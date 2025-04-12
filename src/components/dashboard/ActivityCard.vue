<template>
  <div class="earnings-card card">
    <h3 class="font-bold">Activity</h3>
    <p class="client-count">${{ activity }}</p>
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
