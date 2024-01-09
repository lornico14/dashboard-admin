import React from 'react';
import VideoCard from './VideoCard/VideoCard';
import { stockTable } from '../../../Data/data';


const Tarjetas = ({ filterValues }) => {
  const filteredStockTable = stockTable.filter((item) => {
    if (Object.keys(filterValues).length === 0) {
      return true; // No hay filtros, mostrar todos los elementos
    }
  
    // Convertir valores a minúsculas solo si son cadenas
    const lowerCaseFilterValues = Object.fromEntries(
      Object.entries(filterValues).map(([key, value]) => [
        key,
        typeof value === "string" ? value.toLowerCase() : value,
      ])
    );
  
    const lowerCaseItem = {
      marca: item.marca ? item.marca.toLowerCase() : item.marca,
      fabricante: item.fabricante ? item.fabricante.toLowerCase() : item.fabricante,
      vram: typeof item.vram === "string" ? item.vram.toLowerCase() : item.vram,
      stock: typeof item.stock === "string" ? item.stock.toLowerCase() : item.stock,
      img: typeof item.img === "string" ? item.img.toLowerCase() : item.img,
    };
  
    // Agrega verificaciones para evitar llamar a toLowerCase() en valores undefined
    const matchesMarca = lowerCaseFilterValues.marca
      ? lowerCaseItem.marca.includes(lowerCaseFilterValues.marca.toLowerCase())
      : true;
  
    const matchesFabricante = lowerCaseFilterValues.fabricante
      ? lowerCaseItem.fabricante.includes(lowerCaseFilterValues.fabricante.toLowerCase())
      : true;
  
    const matchesVram = lowerCaseFilterValues.vram
      ? lowerCaseItem.vram.includes(lowerCaseFilterValues.vram.toLowerCase())
      : true;
  
    const matchesStock = lowerCaseFilterValues.stock
      ? lowerCaseItem.stock.toString().includes(lowerCaseFilterValues.stock)
      : true;
  
    const matchesImg = lowerCaseFilterValues.img
      ? lowerCaseItem.img.includes(lowerCaseFilterValues.img.toLowerCase())
      : true;
  
    return matchesMarca && matchesFabricante && matchesVram && matchesStock && matchesImg;
  });
  console.log(filterValues)

  return (
    <div className="tarjetas">
      <h4 className="title">Stock</h4>
      {filteredStockTable.map((item) => (
        <VideoCard
          key={item.id}
          marca={item.marca}
          modelo={item.modelo}
          fabricante={item.fabricante}
          memoria={item.vram}
          stock={item.stock}
          img={item.img}
        />
      ))}
    </div>
  );
};

export default Tarjetas;