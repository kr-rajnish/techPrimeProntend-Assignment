import React, { useEffect, useRef } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Highcharts from "highcharts";

import "./dashboard.css";
import headimg from "../image/Headerbg.svg";
import Logo from "../image/Logo.svg";

const Dashboard = () => {
  const chartContainer = useRef(null);

  const dummyData = [
    { _id: "STR", totalData: 19, totalClosed: 14 },
    { _id: "FIN", totalData: 7, totalClosed: 6 },
    { _id: "QLT", totalData: 9, totalClosed: 8 },
    { _id: "MAN", totalData: 15, totalClosed: 15 },
    { _id: "STO", totalData: 5, totalClosed: 5 },
    { _id: "HR", totalData: 10, totalClosed: 9 },
  ];

  useEffect(() => {
    Highcharts.setOptions({
      lang: {
        thousandsSep: ",",
      },
    });

    const chartOptions = {
      chart: {
        type: "column",
      },
      title: {
        text: "Department-wise Success Percentage of Projects",
      },
      xAxis: {
        categories: dummyData.map((item) => {
          const totalData = item.totalData;
          const totalClosed = item.totalClosed;
          const percentageData = ((totalClosed / totalData) * 100).toFixed(0);
          return `<div>${percentageData}%</div><div>${item._id}</div>`;
        }),
        labels: {
          useHTML: true,
        },
      },
      yAxis: {
        min: 0,
        max: 20,
        title: {
          text: "Data value",
        },
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: "</table>",
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: "{point.y}",
          },
        },
      },
      series: [
        {
          name: "Total Data",
          data: dummyData.map((item) => item.totalData),
        },
        {
          name: "Total Closed",
          data: dummyData.map((item) => item.totalClosed),
        },
      ],
    };

    Highcharts.chart(chartContainer.current, chartOptions);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: "6%",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <img
        className="back"
        src={headimg}
        alt="back"
        style={{ position: "relative" }}
      />
      <div className="main-container-main">
        <div
          className="main-container-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            transform: "translateY(-170%)",
          }}
        >
          <h2
            className="creatprojecttital"
            style={{ marginLeft: "5%", marginTop: "2%" }}
          >
            Dashboard
          </h2>
          <div style={{ marginRight: "45%" }}>
            <img className="logo" src={Logo} />
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{
          transform: "translateY(-70px)",
          display: "flex",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        <Row className="col-container" style={{ width: "100%" }}>
          <Col className="row-col col1">
            <div className="card">
              <div className="card-body">
                <p className="card-text text-muted">Total Project</p>
                <h1
                  className="card-title"
                  style={{ fontSize: "3rem", color: "#6c757d" }}
                >
                  8
                </h1>
              </div>
            </div>
          </Col>
          <Col className="row-col col2">
            <div className="card">
              <div className="card-body">
                <p className="card-text text-muted">Closed</p>
                <h1
                  className="card-title"
                  style={{ fontSize: "3rem", color: "#6c757d" }}
                >
                  2
                </h1>
              </div>
            </div>
          </Col>
          <Col className="row-col col3">
            <div className="card">
              <div className="card-body">
                <p className="card-text text-muted">Running</p>
                <h1
                  className="card-title"
                  style={{ fontSize: "3rem", color: "#6c757d" }}
                >
                  3
                </h1>
              </div>
            </div>
          </Col>
          <Col className="row-col col4">
            <div className="card">
              <div className="card-body">
                <p className="card-text text-muted">Closur Delay</p>
                <h1
                  className="card-title"
                  style={{ fontSize: "3rem", color: "#6c757d" }}
                >
                  2
                </h1>
              </div>
            </div>
          </Col>
          <Col className="row-col col6 ">
            <div className="card">
              <div className="card-body">
                <p className="card-text text-muted">Cancelled</p>
                <h1
                  className="card-title"
                  style={{ fontSize: "3rem", color: "#6c757d" }}
                >
                  3
                </h1>
              </div>
            </div>
          </Col>
        </Row>

        <div
          className="shadow p-3 mb-5 bg-white rounded"
          ref={chartContainer}
          style={{
            width: "50%",
            height: "100%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Dashboard;
