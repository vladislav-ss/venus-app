<template>
  <div class="greeting-card">
    <h3 class="text-sm font-bold">Hi {{ username }},</h3>
    <h1 class="font-bold">Welcome to Venus!</h1>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getCurrentUser } from '../../api/userApi';

const username = ref('Username');

onMounted(async () => {
  try {
    const currentUser = await getCurrentUser();

    if (currentUser) {
      username.value = currentUser.firstName;
    }
  } catch (error) {
    console.error('Error fetching current user:', error);
  }
});
</script>

<style scoped></style>
