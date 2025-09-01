// componentes/formularios/RadioGrid.jsx
import {Table, TableBody, TableCell, TableHead, TableRow, Radio, RadioGroup, FormControlLabel} from "@mui/material";
import { TxtGenerico } from "../generales/txtGenerico";

export default function RadioGrid({ titulo, name, columnas, filas, value, onChange }) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <TxtGenerico size="15px" color="var(--colorSecundario)" uppercase margin="0 0 8px">{titulo}</TxtGenerico>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell />
            {columnas.map((col) => (
              <TableCell key={col} align="center"
              sx={{ fontFamily: "Montserrat, sans-serif", fontSize: "14px", fontWeight: 500 }}>{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {filas.map((fila) => (
            <TableRow key={fila}>
              <TableCell sx={{ fontFamily: "Montserrat, sans-serif", fontSize: "14px" }}>{fila}</TableCell>
              {columnas.map((col) => (
                <TableCell key={col} align="center">
                  <Radio
                    checked={value[fila] === col}
                    onChange={() => onChange(name, fila, col)}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
