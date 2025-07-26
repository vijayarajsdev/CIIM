
import { Box, Button, Typography } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { invoicesData, invoicesFields } from "../../Data";
import type { ColDef } from "ag-grid-community";
const Invoices = () => {
  const [rowData] = useState(invoicesData);
  const [colDefs] = useState(invoicesFields);
  const navigate = useNavigate();
  const defaultColDef: ColDef = {
    flex: 1,
    filter: true,
    sortable: true,
  };
  const handleInvoicenavigate = () => {
    navigate("/invoice");
  };
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography>INVOICES</Typography>
        <Button
          color="primary"
          variant="outlined"
          onClick={handleInvoicenavigate}
        >
          Add Invoice
        </Button>
      </Box>
      <Box sx={{ height: 550 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          paginationPageSize={10}
          pagination={true}
          defaultColDef={defaultColDef}
          paginationPageSizeSelector={[10, 20, 50]}
        />
      </Box>
    </Box>
  );
};

export default Invoices;
