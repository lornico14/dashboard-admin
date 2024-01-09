import React from 'react'
import './RightSide.css'
import Updates from '../Updates/Updates'
import Comentarios from '../Comentarios/Comentarios'

const RightSide = () => {
  return (
    <div className="RightSide">
        <div>
            <h3>Ultimas actualizaciones</h3>
            <Updates />
        </div>
        <div>
            <h3>Opiniones</h3>
            <Comentarios />
        </div>
    </div>
  )
}

export default RightSide