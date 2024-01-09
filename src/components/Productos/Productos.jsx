import React, { useState }from 'react'
import Filtros from './Filtros/Filtros'
import Tarjetas from './Tarjetas/Tarjetas'
import './Productos.css'

const Productos = () => {

  const [filterValues, setFilterValues] = useState({});

  const handleFilterChange = (newFilterValues) => {
    setFilterValues(newFilterValues);
  };

  return (
    <>
    <h2 className="title">Control de Productos</h2>
      <div className="containerGeneral">
        
        <Filtros onFilterChange={handleFilterChange}/>
        <div className="productosMain">
          <div className="cards">
            <Tarjetas filterValues={filterValues}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Productos