import React from "react"
import "./Table.css"
import Common from "../../common/Common"
import data from "../users/data2"
import "../users/users.css"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

function createData(id, ProjectName, StartDate, DueDate, Status, Assign) {
  return { id, ProjectName, StartDate, DueDate, Status, Assign }
}

const rows = [createData(1, "S. Humedad 076", "01/01/2024", "05:00", "Solucionado", "Ver más"),
createData(2, "S. Electricidad 044", "12/01/2024", "15:00", "Solucionado", "Ver más"),
createData(3, "S. Temperatura 001", "13/01/2024", "02:00", "Estado de error", "Ver más"),
createData(4, "S. Electricidad 099", "17/01/2024", "08:00", "Pendiente", "Ver más"),
createData(5, "S. de Iluminación 006", "17/01/2024", "20:00", "Pendiente", "Ver más")]

const TableData = () => {
  return (
    <>
      <section className='project'>
        <div className='user cardBox'>
          <Common title='Dispositivos Tecnológicos' />
          <div className='userBox'>
            {data.map((value) => {
              return (
                <div className='cardBox flexSB'>
                  <div className='img'>
                    <img className='imageCircle' src={value.cover} alt='' />
                  </div>
                  <div className='title'>
                    <h3>{value.title}</h3>
                    <p>{value.email}</p>
                  </div>
                  <div className='time'>
                    <span>{value.time}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className='table cardBox'>
          <Common title='Historial de Regulación' />
          <div className='tableBox'>
            <TableContainer component={Paper} sx={{ boxShadow: "none", borderRadius: "none" }}>
              <Table
                className='tableContainer'
                sx={{
                  minWidth: 650,
                  background: "#313844",
                  border: "none",
                  "& td ,th": {
                    color: "rgb(166, 171, 176)",
                    borderBottom: "1px solid rgb(86, 86, 86)",
                  },
                }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Dispositivo</TableCell>
                    <TableCell>Fecha</TableCell>
                    <TableCell>Hora</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell>Detalles</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell component='th' scope='row'>
                        {row.id}
                      </TableCell>
                      <TableCell>{row.ProjectName}</TableCell>
                      <TableCell>{row.StartDate}</TableCell>
                      <TableCell>{row.DueDate}</TableCell>
                      <TableCell className='status'>{row.Status}</TableCell>
                      <TableCell><button class="button seeMore">{row.Assign}</button></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </section>
    </>
  )
}

export default TableData
