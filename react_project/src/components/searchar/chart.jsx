import useCountryChart from './../../hooks/useCountryChart';
import { PropTypes } from 'prop-types';
import { Line } from 'react-chartjs-2';

const CountryChart = ({ countryCode }) => {
  let { data, isLoading, isError, error } = useCountryChart(countryCode);
  let config;
  let chartOptions;

  if (data) {
    let { x, y } = data.data;
    config = {
      type: 'line',
      labels: [x.toString()],
      datasets: [
        {
          label: 'Data',
          data: [y.toString()],
          fill: false,
          borderColor: 'rgba(75, 192, 192, 1)',
          tension: 0.1,
        },
      ],
    };

    chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'minute',
            displayFormats: {
              minute: 'HHMM',
            },
            tooltipFormat: 'HHMM',
          },
          title: {
            display: true,
            text: 'Time',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Value',
          },
        },
      },
    };
  }

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isError && <span>Error: {error.message}</span>}
      {config && <Line data={config} options={chartOptions} />}
    </div>
  );
};

CountryChart.propTypes = {
  countryCode: PropTypes.string.isRequired,
};

export default CountryChart;
