import React, { useState } from 'react';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


const Grid = (props) => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState(null);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);    
    params.api.setRowData(props.patients);    
  };

  return (
    <div style={{ width: '100%', height: '600px' }}>
      <div
        id="myGrid"
        style={{
          height: '100%',
          width: '100%',
        }}
        className="ag-theme-alpine"
      >
        <AgGridReact
          defaultColDef={{
            flex: 1,
            minWidth: 100,
          }}
          rowSelection={'multiple'}
          rowMultiSelectWithClick={true}
          onGridReady={onGridReady}
          rowData={rowData}
        >
          <AgGridColumn field="id" />
          <AgGridColumn field="firstname" />
          <AgGridColumn field="mobile" />
          <AgGridColumn field="email" />
          <AgGridColumn field="date" />

        </AgGridReact>
      </div>
    </div>
  );
};
export default Grid
