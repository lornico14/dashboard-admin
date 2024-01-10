import React from 'react';
import VideoCard from './VideoCard/VideoCard';



const Tarjetas = ({filteredStockTable}) => {

  return (
    <>
          {filteredStockTable.map((item) => (
            <VideoCard
              key={item.id}
              marca={item.marca}
              modelo={item.modelo}
              fabricante={item.fabricante}
              memoria={item.vram}
              stock={item.stock}
              img={item.img}
              precio={item.precio}
            />
          ))}
    </>
    
  );
};

export default Tarjetas;