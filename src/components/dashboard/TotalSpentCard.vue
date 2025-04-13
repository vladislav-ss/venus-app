<template>
  <div class="total-spent-card card">
    <div class="flex justify-between items-start mb-6">
      <div>
        <p class="label mb-1">Total Spent</p>
        <p class="amount">${{ totalSpent }}</p>
      </div>
      <div
        class="icon-container flex items-center justify-center bg-gray-100 rounded-[7px] w-[33px] h-[33px]"
      >
        <img
          src="@/assets/images/icons/chart-stats.svg"
          alt="Chart Stats"
          class="w-[20px] h-[20px]"
        />
      </div>
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

const totalSpent = ref(0);
const monthlyAverage = ref(0);
const chartOptions = ref(getBarChartOptions('monthly'));

const chartSeries = ref([
  {
    name: 'Spent',
    data: Array(12).fill(0),
  },
]);

onMounted(async () => {
  try {
    const expenses = await getExpensesCurrentUser();
    const monthlyTotals = Array(12).fill(0);

    expenses.forEach((expense) => {
      const date = new Date(expense.date);
      const month = date.getMonth();
      monthlyTotals[month] += expense.amount;
    });

    // Calculate monthly average (excluding months with zero spending)
    const nonZeroMonths = monthlyTotals.filter((amount) => amount > 0).length;
    monthlyAverage.value = Math.round(
      monthlyTotals.reduce((acc, curr) => acc + curr, 0) / (nonZeroMonths || 1),
    );

    // Update chart options with the average line
    chartOptions.value = getBarChartOptions('monthly', monthlyAverage.value);

    chartSeries.value = [
      {
        name: 'Spent',
        data: monthlyTotals,
      },
    ];

    // Calculate total spent
    totalSpent.value = monthlyTotals.reduce((acc, curr) => acc + curr, 0);
  } catch (error) {
    console.error('Error fetching expenses:', error);
  }
});
</script>

<style scoped>
.chart-container :deep(.apexcharts-bar-series) path {
  transition: fill 0.2s ease;
}
</style>
