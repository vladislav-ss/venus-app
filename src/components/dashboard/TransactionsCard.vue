<template>
  <div class="transactions-card card flex flex-col h-full">
    <h3 class="font-bold text-text-primary mb-6">Your transactions</h3>

    <div class="transactions-list flex flex-col gap-4 mb-6 flex-1">
      <div
        v-for="transaction in transactions"
        :key="transaction.id"
        class="transaction-item flex items-center gap-4 mb-4"
      >
        <div
          class="icon-container bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center"
        >
          <img
            :src="'/src/assets/images/icons/' + getTransactionType(transaction) + '.svg'"
            :alt="transaction.description"
            class="w-5 h-5"
          />
        </div>
        <div class="flex-1">
          <p class="description">{{ transaction.description }}</p>
          <p class="date">{{ formatDate(transaction.date) }}</p>
        </div>
      </div>
    </div>

    <div class="mt-auto flex justify-end">
      <button
        class="text-primary text-base font-bold flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        View all
        <img
          src="@/assets/images/icons/arrow-right.svg"
          alt="Arrow right"
          class="[24px] h-[24px]"
        />
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

  if (
    description.includes('transport') ||
    description.includes('travel') ||
    description.includes('train')
  ) {
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
    // Sort expenses by date in descending order and get the 3 most recent
    transactions.value = expenses
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  } catch (error) {
    console.error('Error fetching transactions:', error);
  }
});
</script>

<style scoped></style>
