<template>
  <div class="spent-this-month-card quick-stat card">
    <div class="amount-container">
      <p class="label">Spent this month</p>
      <p class="amount">${{ spentThisMonth }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getExpensesCurrentUser } from '../../api/expensesApi';

const spentThisMonth = ref(0);

onMounted(async () => {
  const expenses = await getExpensesCurrentUser();
  const currentMonth = new Date().getMonth();
  spentThisMonth.value = expenses
    .filter((expense) => new Date(expense.date).getMonth() === currentMonth)
    .reduce((total, expense) => total + expense.amount, 0);
});
</script>

<style scoped></style>
