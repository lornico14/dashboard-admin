import React, { useState } from 'react';
import Filtros from './Filtros/Filtros';
import Tarjetas from './Tarjetas/Tarjetas';
import './Productos.css';
import { stockTable } from "../../Data/data";

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

  return (
    <>
    <div className="productos">
      <h2 className="title">Control de Productos</h2>
      <div className="containerGeneral">
        <Filtros filteredStock={filteredStock} onFilterChange={handleFilterChange} />
        <div className="productosMain">
          <h4 className="title">Stock</h4>
            <div className="tarjetas">
              <Tarjetas filteredStockTable={filteredStock} />
            </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Productos;
