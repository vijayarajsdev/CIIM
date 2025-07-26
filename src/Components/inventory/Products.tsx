import { Typography, Box, Button } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import { useState } from "react";
import type { Product } from "../../Types";
import {
  AllCommunityModule,
  ModuleRegistry,
  type ColDef,
} from "ag-grid-community";
import { fields, productsData } from "../../Data";
import { useNavigate } from "react-router-dom";
ModuleRegistry.registerModules([AllCommunityModule]);

const Products = () => {
  const [rowData] = useState<Product[]>(productsData);
  const [colDefs] = useState<ColDef[]>(fields);
  const navigate=useNavigate();
  const defaultColDef: ColDef = {
    flex: 1,
    filter: true,
    sortable: true,
  };
  const handleProductForm = () => {
navigate('/addproduct')
  };
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography>Inventory</Typography>
        <Button onClick={handleProductForm} color="primary" variant="outlined">Add Product</Button>
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
export default Products;
