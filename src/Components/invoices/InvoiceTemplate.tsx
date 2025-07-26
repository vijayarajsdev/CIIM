import {
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Divider,
  MenuItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InvoiceItemRow, { type InvoiceItem } from "./InvoiceItemRow";

const InvoiceTemplate = () => {
  const navigate = useNavigate();
  const handlecloseinvoice = () => navigate("/invoices");

  const [items, setItems] = useState<InvoiceItem[]>([
    { name: "", quantity: 1, rate: 0, tax: 0, amount: 0 },
  ]);

  const handleItemChange = (index: number, updatedItem: InvoiceItem) => {
    const updatedItems = [...items];
    updatedItems[index] = updatedItem;
    setItems(updatedItems);
  };

  const handleAddRow = () => {
    setItems([...items, { name: "", quantity: 1, rate: 0, tax: 0, amount: 0 }]);
  };

  const handleDeleteRow = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const subtotal = items.reduce((acc, item) => acc + item.amount, 0);

  return (
    <Box>
      <Typography variant="h6" sx={{ pl: 4 }}>
        Invoice Template
      </Typography>
      <Button
        onClick={handlecloseinvoice}
        sx={{ position: "absolute", right: 40, top: 80 }}
      >
        <CloseIcon />
      </Button>

      {/* Header Form */}
      <Box sx={{ padding: 4 }}>
        <Grid container spacing={2}>
          <Grid size={1.5}>
            <Typography>Customer Name</Typography>
          </Grid>
          <Grid size={10.5}>
            <TextField variant="outlined" fullWidth size="small" />
          </Grid>

          <Grid size={1.5}>
            <Typography>Order No</Typography>
          </Grid>
          <Grid size={2.5}>
            <TextField size="small" fullWidth />
          </Grid>

          <Grid size={1.5}>
            <Typography>Invoice No</Typography>
          </Grid>
          <Grid size={2.5}>
            <TextField size="small" fullWidth />
          </Grid>
        </Grid>

        <Grid container spacing={2} mt={2}>
          <Grid size={1.5}>
            <Typography>Invoice Date</Typography>
          </Grid>
          <Grid size={2.5}>
            <TextField type="date" size="small" fullWidth />
          </Grid>

          <Grid size={1.5}>
            <Typography>Terms</Typography>
          </Grid>
          <Grid size={2.5}>
            <TextField size="small" fullWidth />
          </Grid>

          <Grid size={1.5}>
            <Typography>Due Date</Typography>
          </Grid>
          <Grid size={2.5}>
            <TextField type="date" size="small" fullWidth />
          </Grid>
        </Grid>
      </Box>

      {/* Item Table */}
      <Divider />
      <Box sx={{ px: 4 }}>
        <Typography variant="h6" mt={2}>
          Item Table
        </Typography>
        <Grid
          container
          spacing={2}
          alignItems="center"
          mt={2}
          sx={{ fontWeight: "bold" }}
        >
          <Grid size={4}>
            <Typography>Item Details</Typography>
          </Grid>
          <Grid size={1.3}>
            <Typography>Quantity</Typography>
          </Grid>
          <Grid size={1.2}>
            <Typography>Rate</Typography>
          </Grid>
          <Grid size={2}>
            <Typography>Tax</Typography>
          </Grid>
          <Grid size={2}>
            <Typography>Amount</Typography>
          </Grid>
          <Grid size={1}></Grid>
        </Grid>
        {items.map((item, index) => (
          <InvoiceItemRow
            key={index}
            index={index}
            item={item}
            onChange={handleItemChange}
            onDelete={handleDeleteRow}
          />
        ))}
        <Button variant="outlined" onClick={handleAddRow} sx={{ mt: 2 }}>
          + Add New Row
        </Button>
      </Box>

      {/* Subtotal Section */}
      <Box sx={{ px: 4, mt: 4, bgcolor: "#f9f9f9", py: 2, borderRadius: 2 }}>
        <Grid container spacing={2}>
          <Grid size={6}><Button sx={{mt:"200px",px:"30px"}} variant="contained">Save</Button></Grid>
          <Grid size={6}>
            <Grid container spacing={2}>
              <Grid size={6}>
                <Typography>Sub Total</Typography>
              </Grid>
              <Grid size={6}>
                <Typography>₹ {subtotal.toFixed(2)}</Typography>
              </Grid>

              <Grid size={6}>
                <Typography>Discount</Typography>
              </Grid>
              <Grid size={6}>
                <TextField size="small" fullWidth placeholder="0 %" />
              </Grid>

              <Grid size={6}>
                <Typography>TDS / TCS</Typography>
              </Grid>
              <Grid size={6}>
                <TextField select size="small" fullWidth>
                  <MenuItem value="">Select</MenuItem>
                  <MenuItem value="tds">TDS</MenuItem>
                  <MenuItem value="tcs">TCS</MenuItem>
                </TextField>
              </Grid>

              <Grid size={6}>
                <Typography>Adjustment</Typography>
              </Grid>
              <Grid size={6}>
                <TextField size="small" fullWidth />
              </Grid>

              <Grid size={6}>
                <Typography fontWeight="bold">Total</Typography>
              </Grid>
              <Grid size={6}>
                <Typography fontWeight="bold">
                  ₹ {subtotal.toFixed(2)}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default InvoiceTemplate;
