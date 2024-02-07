import React from "react"
import ReactApexChart from "react-apexcharts"
import "./cards.css"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import Common from "../../common/Common"


const Cards = () => {
  const data = {
    series: [26],
    options: {
      chart: {
        height: 150,
        type: "radialBar",
        foreColor: "grey",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "58%",
          },
          dataLabels: {
            value: {
              show: false,
            },
          },
        },
      },
      labels: ["26 °C"],
      colors: ["#ff5b5b"],
    },
  }
  const data1 = {
    series: [64],
    options: {
      chart: {
        height: 150,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "58%",
          },
          //add it
          dataLabels: {
            value: {
              show: false,
            },
          },
        },
      },
      labels: ["64 KWh"],
      colors: ["#E9B251"],
    },
  }
  const Progress = ({ done }) => {
    return (
      <div className='progress' style={{ width: '100%' }}>
        <div
          className='progress-done'
          style={{
            opacity: 1,
            width: `${done}%`,
          }}
        ></div>
      </div>
    )
  }
  const Progress2 = ({ done }) => {
    return (
      <div className='progress'style={{ backgroundColor: '#793A6D', width: '100%' }}>
        <div
          className='progress-done'
          style={{
            opacity: 1,
            width: `${done}%`,
            backgroundColor: '#fb8bca',
          }}
        ></div>
      </div>
    )
  }

  return (
    <>
      <section className='cards grid'>
        <div className='cardBox'>
          <Common title='Temperatura en tiempo real' />
          <div className='circle'>
            <div className='row'>
              <ReactApexChart options={data.options} series={data.series} type='radialBar' height={150} />
            </div>
            <div className='title row'>
              <h1>256</h1>
              <p>Temperatura Promedio del día</p>
            </div>
          </div>
        </div>
        <div className='cardBox'>
          <Common title='Nivel de iluminación' />
          <div className='circle'>
            <div className='batch row'>
              <span>82%</span>
              <TrendingUpIcon className='batchIcon' />
            </div>
            <div className='title row'>
              <h1>Alto</h1>
              <p>Intensidad</p>
            </div>
          </div>
          <Progress done='82' />
        </div>
        <div className='cardBox'>
          <Common title='Energía Eléctrica' />
          <div className='circle'>
            <div className='row'>
              <ReactApexChart options={data1.options} series={data1.series} type='radialBar' height={150} />
            </div>
            <div className='title row'>
              <h1>391 KW</h1>
              <p>Consumo Total</p>
            </div>
          </div>
        </div>
        <div className='cardBox'>
          <Common title='Humedad' />
          <div className='circle'>
            <div className='batch batch1 row'>
              <span>21%</span>
              <TrendingUpIcon className='batchIcon' />
            </div>
            <div className='title row'>
              <h1>Adecuado</h1>
              <p>Ambiente</p>
            </div>
          </div>
          <Progress2 done='21' />
        </div>
      </section>
    </>
  )
}

export default Cards
