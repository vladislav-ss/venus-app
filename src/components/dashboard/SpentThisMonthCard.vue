<template>
  <div class="spent-this-month-card card">
    <div class="flex justify-between items-start">
      <div class="flex flex-col gap-2">
        <p class="label mb-1">Spent this month</p>
        <h1 class="amount">${{ spentThisMonth }}</h1>
        <div class="flex items-center gap-1">
          <div class="icon-container">
            <img
              :src="percentageChange < 0 ? checkmarkIcon : xMarkIcon"
              :alt="percentageChange < 0 ? 'Check' : 'X'"
              class="w-[15px] h-[15px]"
            />
          </div>
          <span
            :class="[percentageChange < 0 ? 'text-green' : 'text-red', 'text-[14px]', 'font-bold']"
          >
            {{ percentageChange < 0 ? 'On track' : 'Over budget' }}
          </span>
        </div>
      </div>

      <span :class="[percentageChange < 0 ? 'text-green' : 'text-red', 'text-[12px]', 'font-bold']">
        {{ percentageChange >= 0 ? '+' : '' }}{{ percentageChange.toFixed(2) }}%
      </span>
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
import checkmarkIcon from '@/assets/images/icons/checkmark.svg';
import xMarkIcon from '@/assets/images/icons/x-mark.svg';

const spentThisMonth = ref(0);
const spentLastMonth = ref(0);
const percentageChange = ref(0);
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
    const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const lastMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;

    // Filter current month's expenses
    const currentMonthExpenses = expenses.filter((expense) => {
      const expenseDate = new Date(expense.date);
      return expenseDate.getMonth() === currentMonth && expenseDate.getFullYear() === currentYear;
    });

    // Filter last month's expenses
    const lastMonthExpenses = expenses.filter((expense) => {
      const expenseDate = new Date(expense.date);
      return expenseDate.getMonth() === lastMonth && expenseDate.getFullYear() === lastMonthYear;
    });

    // Calculate totals
    spentThisMonth.value = currentMonthExpenses.reduce(
      (total, expense) => total + expense.amount,
      0,
    );
    spentLastMonth.value = lastMonthExpenses.reduce((total, expense) => total + expense.amount, 0);

    // Calculate percentage change
    percentageChange.value =
      spentLastMonth.value === 0
        ? 0
        : ((spentThisMonth.value - spentLastMonth.value) / spentLastMonth.value) * 100;

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
