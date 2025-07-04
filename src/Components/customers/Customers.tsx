import { Typography, Box, Button } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import { useState } from "react";
import type { Customer } from "../../Types";
import {
  AllCommunityModule,
  ModuleRegistry,
  type ColDef,
} from "ag-grid-community";
import { customerfields, customersData } from "../../Data";
import { useNavigate } from "react-router-dom";
ModuleRegistry.registerModules([AllCommunityModule]);

const Customers = () => {
  const [rowData] = useState<Customer[]>(customersData);
  const [colDefs] = useState<ColDef[]>(customerfields);
  const navigate = useNavigate();
  const defaultColDef: ColDef = {
    flex: 1,
    filter: true,
    sortable: true,
  };
  const handleCustomerForm = () => {
    navigate("/addcustomer");
  };
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography>Inventory</Typography>
        <Button onClick={handleCustomerForm} color="primary" variant="outlined">
          Add Customer
        </Button>
      </Box>
      <Box sx={{ height: 500 }}>
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
export default Customers;
