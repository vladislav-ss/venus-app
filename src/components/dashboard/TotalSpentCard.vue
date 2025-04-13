<template>
  <div class="total-spent-card card">
    <div class="flex justify-between items-start mb-6">
      <div>
        <p class="text-[14px] text-text-secondary font-medium mb-1">Total Spent</p>
        <p class="text-[24px] font-bold">${{ totalSpent }}</p>
      </div>
      <div class="chart-stats flex items-center">
        <img src="@/assets/images/icons/chart-stats.svg" alt="Chart Stats" class="w-4 h-4" />
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

const totalSpent = ref(0);

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const chartOptions = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      columnWidth: '40%',
      colors: {
        ranges: [
          {
            from: 0,
            to: Infinity,
            color: '#E9EDF7',
          },
        ],
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: months,
    labels: {
      style: {
        colors: '#A3AED0',
        fontSize: '12px',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  grid: {
    show: false,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  colors: ['#4318FF'],
  states: {
    hover: {
      filter: {
        type: 'darken',
        value: 0.8,
      },
    },
  },
  tooltip: {
    enabled: true,
    theme: 'light',
    y: {
      formatter: (value: number) => `$${value}`,
    },
  },
};

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
.total-spent-card {
}

.chart-container :deep(.apexcharts-bar-series) path {
  transition: fill 0.2s ease;
}
</style>
