import React from 'react';
import './MidSide.css';
import Main from '../Main/Main';
import Ventas from '../Ventas/Ventas';
import Productos from '../Productos/Productos';
import { motion} from 'framer-motion';

const MidSide = (props) => {
  const { selectedComponentName } = props;

  const componentMap = {
    Main: Main,
    Ventas: Ventas,
    Productos: Productos,
  };
  const SelectedComponent = componentMap[selectedComponentName];

  return (
    <motion.div
    className="midside"
    initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      key = {selectedComponentName}
    >
      {SelectedComponent ? (
        <SelectedComponent />
      ) : (
        <h3>Selecciona un elemento en el Sidebar</h3>
      )}
    </motion.div>
  );
};


export default MidSide;