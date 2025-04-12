<template>
  <div class="new-clients-card card">
    <h3 class="font-bold">New Clients</h3>
    <p class="client-count">{{ newClientsCount }}</p>
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
