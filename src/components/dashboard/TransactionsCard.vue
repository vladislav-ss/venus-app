<template>
  <div class="transactions-card card">
    <h3 class="text-[18px] font-bold text-[#1B2559] mb-6">Your transactions</h3>

    <div class="transactions-list flex flex-col gap-4 mb-6">
      <div
        v-for="transaction in transactions"
        :key="transaction.id"
        class="transaction-item flex items-center gap-3"
      >
        <div
          class="icon-container bg-[#F6F8FD] rounded-full w-10 h-10 flex items-center justify-center"
        >
          <img
            :src="'/src/assets/images/icons/' + getTransactionType(transaction) + '.svg'"
            :alt="transaction.description"
            class="w-5 h-5"
          />
        </div>
        <div class="flex-1">
          <p class="text-[14px] font-medium text-[#1B2559]">{{ transaction.description }}</p>
          <p class="text-[12px] text-[#A3AED0]">{{ formatDate(transaction.date) }}</p>
        </div>
      </div>
    </div>

    <div class="flex justify-end">
      <button class="text-[#4318FF] text-sm font-medium flex items-center gap-2 hover:opacity-80">
        View all
        <img src="@/assets/images/icons/arrow-right.svg" alt="Arrow right" class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getExpensesCurrentUser } from '@/api/expensesApi';
import type { Expense } from '@/types/types';

const transactions = ref<Expense[]>([]);

function getTransactionType(transaction: Expense): string {
  // Map expense descriptions to icon types
  const description = transaction.description.toLowerCase();
  if (description.includes('transport') || description.includes('travel')) {
    return 'public-transport';
  }
  if (description.includes('subscription') || description.includes('software')) {
    return 'subscriptions';
  }
  return 'shopping';
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  return day + ' ' + month + ' ' + year;
}

onMounted(async () => {
  try {
    const expenses = await getExpensesCurrentUser();
    // Get the last 3 transactions
    transactions.value = expenses.slice(-3).reverse();
  } catch (error) {
    console.error('Error fetching transactions:', error);
  }
});
</script>

<style scoped></style>
