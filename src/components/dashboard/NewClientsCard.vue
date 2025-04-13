<template>
  <div class="new-clients-card quick-stat card relative">
    <div class="flex items-center gap-4">
      <div
        class="icon-container rounded-full w-[56px] h-[56px] flex items-center justify-center"
        style="background: var(--gradient-primary)"
      >
        <img src="@/assets/images/icons/clients.svg" class="w-[28px] h-[28px]" alt="Clients" />
      </div>

      <div class="info-container">
        <p class="label">New Clients</p>
        <p class="amount">{{ newClientsCount }}</p>
      </div>

      <div class="image-container flex absolute right-6 translate-y-[-50%] top-1/2">
        <img src="@/assets/images/graphics/clients-chart.svg" alt="Activity graph" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getClientsCurrentUser } from '../../api/clientApi';
import type { Client } from '../../types/types';

const newClientsCount = ref(0);

onMounted(async () => {
  try {
    const clients: Client[] = await getClientsCurrentUser();
    const currentMonth = new Date().getMonth();
    newClientsCount.value = clients.filter(
      (client) => new Date(client.dateJoined).getMonth() === currentMonth,
    ).length;
  } catch (error) {
    console.error('Error fetching clients:', error);
  }
});
</script>

<style scoped></style>
