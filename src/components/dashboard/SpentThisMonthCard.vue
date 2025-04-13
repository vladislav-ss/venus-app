<template>
  <div class="spent-this-month-card card">
    <!-- Header with amount and status -->
    <div class="flex justify-between items-start mb-6">
      <div>
        <p class="text-[14px] text-[#A3AED0] font-medium mb-1">Spent this month</p>
        <p class="text-[24px] font-bold text-[#1B2559]">${{ spentThisMonth }}</p>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-[#05CD99] text-[14px] font-medium">+2.45%</span>
        <div class="flex items-center gap-1">
          <div class="w-2 h-2 rounded-full bg-[#05CD99]"></div>
          <span class="text-[14px] text-[#05CD99] font-medium">On track</span>
        </div>
      </div>
    </div>

    <!-- Weekly spending chart -->
    <div class="chart-container h-[200px]">
      <apexchart type="bar" height="200" :options="chartOptions" :series="chartSeries" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getExpensesCurrentUser } from '../../api/expensesApi';

const spentThisMonth = ref(0);

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
    categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
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
    show: true,
    borderColor: '#E9EDF7',
    strokeDashArray: 5,
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
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
      formatter: function (value: number) {
        return '$' + value;
      },
    },
  },
};

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
