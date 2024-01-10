import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import Filtros from './Filtros/Filtros';
import Tarjetas from './Tarjetas/Tarjetas';
import './Productos.css';
import { stockTable } from "../../Data/data";
import DataGridTable from './DataGrid/DataGridTable';

const Productos = () => {
  const [filteredStock, setFilteredStock] = useState(stockTable);

  const handleFilterChange = (filters) => {
    // Combina y aplica los diferentes filtros
    let filteredData = stockTable;

    Object.keys(filters).forEach((filterLabel) => {
      const filterValue = filters[filterLabel];

      if (filterValue && filterLabel === 'checkbox') {
        // Filtra por la categoría seleccionada en el checkbox
        filteredData = filteredData.filter(({ marca, modelo, fabricante, vram, stock, precio }) =>
          marca === filterValue ||
          modelo === filterValue ||
          fabricante === filterValue ||
          vram === filterValue ||
          stock === filterValue ||
          precio === filterValue
        );
      }
    });

    setFilteredStock(filteredData);
  };

  const handleAddClick = () => {
    setIsAdding(true);
    setSelectedProduct(null);
  };

  const handleEditClick = () => {
    // Puedes implementar lógica para obtener el producto seleccionado
    // y luego establecer setSelectedProduct con ese producto.
    setIsAdding(false);
  };

  const handleDeleteClick = () => {
    // Implementa la lógica para eliminar productos aquí.
  };

  const handleSaveProduct = (product) => {
    // Implementa la lógica para guardar/agregar/editar el producto aquí.
    // Actualiza el estado y cierra el formulario.
    setIsAdding(false);
    setSelectedProduct(null);
    // Actualiza el estado de filteredStock si es necesario.
  };

  return (
    <>
      <div className="productos">
        <div className="containerGeneral">
          <Filtros filteredStock={filteredStock} onFilterChange={handleFilterChange} />
          <div className="productosMain">
              <div className="toprow">
                <h4 className="title">Stock</h4>
                <Stack
                sx={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '50%',
                }}
                >
                  <Button
                  onClick={handleAddClick}
                  variant="contained"
                  color="success"
                  startIcon={<SaveIcon />}
                  >Agregar
                  </Button>
                  <Button
                  onClick={handleEditClick}
                  variant="contained"
                  color="secondary"
                  >Editar
                  </Button>
                  <Button
                  onClick={handleDeleteClick}
                  variant="contained"
                  color="error" startIcon={<DeleteIcon />}
                  >Eliminar
                  </Button>
                </Stack>
              </div>
              <div className="tarjetas">
                <Tarjetas filteredStockTable={filteredStock} />
              </div>
          </div>
        </div>
          <div className="dataGrid">
            <DataGridTable />
          </div>
      </div>
    </>
  );
};

export default Productos;
