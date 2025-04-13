export const getMonthlyChartOptions = (average?: number) => {
  const categories = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

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
        columnWidth: '30%',
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
      borderColor: '#E2E8F0',
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
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
    annotations: average
      ? {
          yaxis: [
            {
              y: average,
              borderColor: '#4318FF',
              borderWidth: 1,
              borderDash: [5, 5],
              label: {
                text: `$${average}`,
                position: 'right',
                offsetX: 5,
                style: {
                  color: '#4318FF',
                  fontSize: '12px',
                  background: 'transparent',
                },
                borderWidth: 0,
                background: 'transparent',
              },
            },
          ],
        }
      : undefined,
  };
};
