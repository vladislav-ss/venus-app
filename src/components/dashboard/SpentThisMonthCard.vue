<template>
  <div class="spent-this-month-card card">
    <div class="flex justify-between items-start mb-6">
      <div>
        <p class="label mb-1">Spent this month</p>
        <h1 class="amount">${{ spentThisMonth }}</h1>
        <div class="flex items-center gap-1">
          <div class="icon-container">
            <img src="@/assets/images/icons/checkmark.svg" alt="Check" class="w-[15px] h-[15px]" />
          </div>
          <span class="text-[14px] text-green font-medium">On track</span>
        </div>
      </div>

      <span class="text-green text-[14px] font-medium">+2.45%</span>
    </div>

    <div class="chart-container h-[200px]">
      <apexchart type="bar" height="200" :options="chartOptions" :series="chartSeries" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getExpensesCurrentUser } from '../../api/expensesApi';
import { getBarChartOptions } from '../../config/chartOptions';

const spentThisMonth = ref(0);
const chartOptions = getBarChartOptions('weekly');

const chartSeries = ref([
  {
    name: 'Spent',
    data: [150, 200, 100, 300], // Example weekly data
  },
]);

onMounted(async () => {
  try {
    const expenses = await getExpensesCurrentUser();
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Filter current month's expenses
    const currentMonthExpenses = expenses.filter((expense) => {
      const expenseDate = new Date(expense.date);
      return expenseDate.getMonth() === currentMonth && expenseDate.getFullYear() === currentYear;
    });

    // Calculate total spent this month
    spentThisMonth.value = currentMonthExpenses.reduce(
      (total, expense) => total + expense.amount,
      0,
    );

    // Group expenses by week and calculate weekly totals
    const weeklyTotals = Array(4).fill(0);
    currentMonthExpenses.forEach((expense) => {
      const expenseDate = new Date(expense.date);
      const weekIndex = Math.floor((expenseDate.getDate() - 1) / 7);
      if (weekIndex < 4) {
        weeklyTotals[weekIndex] += expense.amount;
      }
    });

    chartSeries.value = [
      {
        name: 'Spent',
        data: weeklyTotals,
      },
    ];
  } catch (error) {
    console.error('Error fetching expenses:', error);
  }
});
</script>

<style scoped>
.spent-this-month-card {
  @apply rounded-[20px] px-[30px] py-[30px];
}

.chart-container :deep(.apexcharts-bar-series) path {
  transition: fill 0.2s ease;
}
</style>
