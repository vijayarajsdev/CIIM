import { Typography, Box, Button } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";
import type { Customer } from "../../Types";
import {
  AllCommunityModule,
  ModuleRegistry,
  type ColDef,
  type ICellRendererParams,
} from "ag-grid-community";
import { Link, useNavigate } from "react-router-dom";
import { fetchCustomers } from "./customerservice";
import { useAuth } from "../../Hooks/useAuth";
ModuleRegistry.registerModules([AllCommunityModule]);

const Customers = () => {
  const [customersData, setCustomersData] = useState<Customer[]>();
  const { user } = useAuth();
  const tenantId = user?.tenantId;
  const customerfields = [
    { field: "name" },
    { field: "companyname", headerName: "organisation" },
    {
      field: "isGstRegistered",
    },
    { field: "address" },
    { field: "phone", headerName: "mobile" },
    { field: "gstno", headerName: "GST No" },
    {
      field: "action",
      headerName: "Action",
      cellRenderer: (params: ICellRendererParams<Customer>) => {
        if (!params.data) return null;
        return <Link to={`/editcustomer/${params.data.id}`}>Edit</Link>;
      },
    },
  ];
  useEffect(() => {
    const fetchcustomersdata = async () => {
      if (!tenantId) return;
      const customersdata = await fetchCustomers(tenantId);
      if (customersdata.status === 200) {
        setCustomersData(customersdata.data);
      } else {
        alert("unable to fetch customers");
      }
    };
    fetchcustomersdata();
  }, [tenantId]);
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
        <Typography>Customers</Typography>
        <Button onClick={handleCustomerForm} color="primary" variant="outlined">
          Add Customer
        </Button>
      </Box>
      <Box sx={{ height: 550 }}>
        <AgGridReact
          rowData={customersData}
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
