// import { useState } from "react";
// import InvoiceTable, { type invoicedataObj } from "./InvoiceTable";
// import Pagination from "./Pagination";
// import SearchBar from "./SearchBar";

// const Invoices = () => {

//   const [invoicesData, setInvoicesdata] = useState(invoicesdata);
//   const [currentPage, setCurrentPage] = useState(1);
//   const pagelength = 10;
//   const datalength = invoicesdata.length;
//   const [totalpages, setTotalPages] = useState(
//     Math.ceil(datalength / pagelength)
//   );
//   const handlepagination = (page: number) => {
//     console.log(page);
//     setCurrentPage(page);
//   };
//   const paginateddata = invoicesData.slice(
//     (currentPage - 1) * pagelength,
//     currentPage * pagelength
//   );

//   const handlefilter = (inputvalue: string) => {
//     console.log(inputvalue);
//     const filtereddata = invoicesData.filter((invoices) =>
//       invoices.customerName
//         .trim()
//         .toLocaleLowerCase()
//         .includes(inputvalue.trim().toLocaleLowerCase())
//     );
//     setInvoicesdata(filtereddata);
//     setCurrentPage(1);
//   };
//   return (
//     <>
//       <h3>Invoices</h3>
//       <SearchBar handlefilter={handlefilter} />
//       <Pagination
//         handlePagination={handlepagination}
//         totalpages={totalpages}
//         currentPage={currentPage}
//       />
//       <InvoiceTable invoicesdata={paginateddata} />
//     </>
//   );
// };

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
