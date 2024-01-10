import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import './DataGridTable';
import { stockTableGrid } from '../../../Data/data';

const DataGridTable = () => {

  const columns = stockTableGrid[0];
  const rows = stockTableGrid[1];
  return (
    <div className="datagrid" style={{ height: 400, width: '100%' }}>
      <DataGrid
        sx={{fontSize: '1.2rem', fontWeight: '400',}}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default DataGridTable