import React from 'react'
import './Comentarios.css'
import Chart from 'react-apexcharts'

const Comentarios = () => {
    const data = {
      series: [
        {
          name: "Review",
          data: [10, 50, 30, 90, 40, 120, 100],
        },
      ],
      options: {
        chart: {
          type: "area",
          height: "200",
        },

        fill: {
          colors: ["#fff"],
          type: "gradient",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          colors: ["#ff929f"],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
        grid: {
          show: false,
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z",
          ],
        },
        yaxis: {
          show: false,
        },
        toolbar: {
          show: false,
        },
      },
    };

return <div className="chart">
        <Chart options={data.options} series={data.series} type="area"
        style={{overflow: 'hidden'}}/>
      </div>
}

export default Comentarios