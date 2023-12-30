import React, { useEffect, useRef, useState } from "react";
import ApexCharts from "apexcharts";

export default function FacebookLikes() {
  const chartRef = useRef(null);
  const [isChartRendered, setChartRendered] = useState(false);
  const series = {
    monthDataSeries1: {
      prices: [120, 140, 110, 135, 125, 130, 115],
      dates: [
        "2023-01-01",
        "2023-01-02",
        "2023-01-03",
        "2023-01-04",
        "2023-01-05",
        "2023-01-06",
        "2023-01-07",
      ],
    },
  };

  useEffect(() => {
    if (!isChartRendered) {
      const options = {
        series: [{
          name: "STOCK ABC",
          data: series.monthDataSeries1.prices,
        }],
        chart: {
          type: 'area',
          height: 350,
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        toolbar: {
          show: false,
          enabled: false,
        },
      };

      if (chartRef.current) {
        const chart = new ApexCharts(chartRef.current, options);
        chart.render();
        setChartRendered(true);
      }
    }
  }, [isChartRendered]);

  return (
    <div>
      <div id="chart" ref={chartRef}></div>
    </div>
  );
}
