import {
  Typography,
  Box,
  Button,
  useMediaQuery,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";
import type { Product } from "../../Types";
import {
  AllCommunityModule,
  ModuleRegistry,
  type ColDef,
  type ICellRendererParams,
  type ValueFormatterParams,
} from "ag-grid-community";
import { Link, useNavigate } from "react-router-dom";
import { fetchProducts } from "./productservice";
ModuleRegistry.registerModules([AllCommunityModule]);

const Products = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const navigate = useNavigate();
  const [productsData, setProductsdata] = useState<Product[]>([]);

  const colDefs: ColDef[] = [
    { field: "name", headerName: "Item" },
    {
      field: "price",
      headerName: "Price",
      valueFormatter: (params: ValueFormatterParams) => {
        return "₹" + params.value.toLocaleString();
      },
    },
    { field: "stock", headerName: "Stock" },
    { field: "category", headerName: "Category" },
    { field: "hsnCode", headerName: "HSN" },
    {
      field: "action",
      headerName: "Action",
      cellRenderer: (params: ICellRendererParams<Product>) => {
        if (!params.data) return null;
        return <Link to={`/editproduct/${params.data.id}`}>Edit</Link>;
      },
    },
  ];
  const defaultColDef: ColDef = {
    flex: 1,
    filter: true,
    sortable: true,
  };
  useEffect(() => {
    const FetchProducts = async () => {
      const allproductsresponse: {
        data: Product[];
        status: number;
      } = await fetchProducts();
      if (allproductsresponse.status === 500) {
        alert("Data Fetching Failed");
      } else {
        setProductsdata(allproductsresponse.data);
      }
    };
    FetchProducts();
  }, []);
  const handleProductForm = () => {
    navigate("/addproduct");
  };
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography>Inventory</Typography>
        <Button onClick={handleProductForm} color="primary" variant="outlined">
          Add Product
        </Button>
      </Box>
      {isMobile && (
        <Box display="flex" flexDirection="column" gap={2}>
          {productsData?.map((product) => (
              <Card variant="outlined" key={product.id}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontFamily: "poppins" }}>
                    {product.name}
                  </Typography>
                  <Typography>Price: ₹{product.price}</Typography>
                  <Typography>Stock: {product.stock}</Typography>
                  <Typography>Category: {product.category}</Typography>
                  <Typography>HSN: {product.hsnCode}</Typography>
                  <Box mt={1}>
                    <Link to={`/editproduct/${product.id}`}>Edit</Link>
                  </Box>
                </CardContent>
              </Card>
          ))}
        </Box>
      )}
      {!isMobile && (
        <Box sx={{ height: 550 }}>
          <AgGridReact
            rowData={productsData}
            columnDefs={colDefs}
            paginationPageSize={10}
            pagination={true}
            defaultColDef={defaultColDef}
            paginationPageSizeSelector={[10, 20, 50]}
          />
        </Box>
      )}
    </Box>
  );
};
export default Products;
