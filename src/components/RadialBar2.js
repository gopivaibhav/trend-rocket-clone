import React, { useEffect, useRef, useState } from "react";
import ApexCharts from "apexcharts";
import '../styles/chatStyles.css'

export default function RadialChart2() {
  const chartRef = useRef(null);
  const [isChartRendered, setChartRendered] = useState(false);

  useEffect(() => {
    if (!isChartRendered) {
      const options = {
        chart: {
          height: 280,
          type: "radialBar",
        },
        series: [16],
        colors: ["#F3734B"],
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#333",
              startAngle: -90,
              endAngle: 90,
            },
            dataLabels: {
              name: {
                show: false,
                offsetY: 55,
                formatter: function (val) {
                  return val;
                },
              },
              value: {
                fontSize: "25px",
                show: false,
              },
            },
          },
        },
        // fill: {
        //   type: "gradient",
        //   gradient: {
        //     shade: "dark",
        //     type: "horizontal",
        //     gradientToColors: ["#87D4F9"],
        //     stops: [0, 100],
        //   },
        // },
        stroke: {
          lineCap: "butt",
        },
        labels: ["low", "revenue"],
      };

      if (chartRef.current) {
        const chart = new ApexCharts(chartRef.current, options);
        chart.render();
        setChartRendered(true);
      }
    }
  }, [isChartRendered]);

  return (
    <div className="radial_container">
      <div id="chart2" ref={chartRef}></div>
      <ul id="listRadialBar">
        <li>16</li>
        <li>Low</li>
        <li>Scale</li>
      </ul>
    </div>
  );
}
