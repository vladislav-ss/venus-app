export const getWeeklyChartOptions = () => {
  const categories = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];

  return {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
      background: 'transparent',
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: '45%',
        colors: {
          backgroundBarColors: ['#E2E8F0'],
          backgroundBarRadius: 4,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories,
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
};
