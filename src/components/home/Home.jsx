import React from "react"
import Cards from "../cards/Cards"
import Charts from "../charts/Charts"
import TableData from "../table/TableData"
import User from "../users/User"

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container'>
          <div className='heading flexSB'>
            <h3>DashBoard</h3>
            <span>EcoSmartBuild / DashBoard</span>
          </div>
          <Cards />
          <Charts />
          </div>
          <div className='container'>
          <div className='heading flexSB'>
            <h3>Top Colaboradores</h3>
          </div>
          <User />
          <TableData />
        </div>
      </section>
    </>
  )
}

export default Home
