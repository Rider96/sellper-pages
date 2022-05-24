import React, { Component } from "react";
import Chart from "react-apexcharts";

const AreaChart = (props) => {
  const options = {
    chart: {
      id: "basic-bar",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    annotations: {
      points: [
        {
          x: props.pointX,
          y: props.pointY,
          marker: {
            size: 6,
            fillColor: props.color ? props.color : "#0594D7",
            strokeColor: props.color ? props.color : "#0594D7",
            strokeWidth: 1,
            shape: "circle",
            radius: 2,
            OffsetX: 0,
            OffsetY: 0,
            cssClass: "",
          },
          label: {
            borderWidth: 0,
            text: props.text ? props.text : "1위",
            textAnchor: "middle",
            offsetX: 0,
            offsetY: 2,
            style: {
              fontFamily: "Pretendard-Bold",
              color: props.color ? props.color : "#0594D7",
              background: "#ffffff",
              fontSize: 14,
              fontWeight: "800",
            },
          },
        },
      ],
    },
    stroke: {
      curve: "smooth",
    },
    colors: [props.color ? props.color : "#0594D7"],
    xaxis: {
      categories: props.categories,
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return Number(value).toLocaleString();
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.6,
        opacityTo: 0.7,
        stops: [0, 100],
      },
    },
  };

  const series = [
    {
      name: "수치",
      data: props.data,
    },
  ];

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="area"
        width="1000"
        height={300}
      />
    </div>
  );
};

export default AreaChart;
