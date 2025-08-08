import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { invoicesData, invoicesFields } from "../../Data";
import type { ColDef } from "ag-grid-community";
const Invoices = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
        <Typography sx={{ fontFamily: "Poppins", fontWeight: "600" }}>
          INVOICES
        </Typography>
        <Button
          color="primary"
          variant="outlined"
          onClick={handleInvoicenavigate}
          sx={{ fontFamily: "Poppins"}}
        >
          Add Invoice
        </Button>
      </Box>
      {isMobile && (
        // 🔹 Mobile: Card layout
        <Box display="flex" flexDirection="column" gap={2}>
          {rowData.map((invoice, idx) => (
            <Card key={idx} variant="outlined">
              <CardContent>
                <Typography variant="subtitle1" sx={{ fontFamily: "Poppins",fontWeight:"600"}}>
                  {invoice.customerName || "Unnamed Customer"}
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Typography variant="body2" sx={{ fontFamily: "Poppins"}}>
                  Invoice No: {invoice.invoiceNumber}
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: "Poppins"}}>Date: {invoice.date}</Typography>
                <Typography variant="body2" sx={{ fontFamily: "Poppins"}}>
                  Amount: ₹{invoice.amount}
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: "Poppins"}}>
                  Status: {invoice.status}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
      {!isMobile && (
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
      )}
    </Box>
  );
};

export default Invoices;
