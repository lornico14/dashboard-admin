import * as React from "react";
import "./Table.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { tableData } from "../../Data/data";
import {
  UilEnvelopeCheck,
  UilEnvelopeDownloadAlt,
  UilEnvelopeExclamation,
} from "@iconscout/react-unicons";

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Compras recientes</h3>
      <TableContainer component={Paper}
      style={{boxShadow: '0px 13px 20px 0px #80808029'}}
      
      >
      <div className="table-bg">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Producto</TableCell>
              <TableCell align="left">Tracking ID</TableCell>
              <TableCell align="left">Fecha</TableCell>
              <TableCell align="left">Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <a className="link" href={row.link}>
                    {row.name}
                  </a>
                </TableCell>

                <TableCell align="left">
                  <a
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                    href={`https://www.andreani.com/#!/informacionEnvio/${row.tracking}`}
                  >
                    {row.tracking}
                  </a>
                </TableCell>

                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  {row.status === "Entregado" ? (
                    <UilEnvelopeCheck className="enviado" />
                  ) : row.status === "Pendiente" ? (
                    <UilEnvelopeDownloadAlt className="enCamino" />
                    ) : (
                      <UilEnvelopeExclamation className="cancelado" />
                      )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </TableContainer>
    </div>
  );
}
