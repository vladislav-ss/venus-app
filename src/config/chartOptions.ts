export type ChartDataType = 'weekly' | 'monthly';

export const getBarChartOptions = (type: ChartDataType, average?: number) => {
  const categories =
    type === 'weekly'
      ? ['Week 1', 'Week 2', 'Week 3', 'Week 4']
      : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return {
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
        columnWidth: type === 'weekly' ? '40%' : '30%',
        colors: {
          ranges: [
            {
              from: 0,
              to: Infinity,
              color: '#4318ff',
            },
          ],
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
    annotations: average
      ? {
          yaxis: [
            {
              y: average,
              borderColor: '#4318FF',
              borderWidth: 1,
              borderDash: [15, 8],
              label: {
                text: `$${average}`,
                position: 'right',
                offsetX: 5,
                style: {
                  color: '#4318FF',
                  fontSize: '12px',
                  fontWeight: '500',
                  background: 'transparent',
                },
                borderWidth: 0,
                background: 'transparent',
              },
            },
          ],
        }
      : undefined,
    grid: {
      show: true,
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
};
