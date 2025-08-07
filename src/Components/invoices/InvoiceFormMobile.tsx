import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  IconButton,
  Divider,
  MenuItem,
  useMediaQuery,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import InvoiceItemRow from "./InvoiceItemRow";

interface InvoiceItem {
  name: string;
  quantity: number;
  rate: number;
  tax: number;
  amount: number;
}

const InvoiceFormMobile = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [items, setItems] = useState<InvoiceItem[]>([
    { name: "", quantity: 1, rate: 0, tax: 0, amount: 0 },
  ]);

  const [discount, setDiscount] = useState<string>("");
  const [tdsTcs, setTdsTcs] = useState<string>("");
  const [adjustment, setAdjustment] = useState<string>("");

  const handleItemChange = (
    index: number,
    field: keyof InvoiceItem,
    value: string | number
  ) => {
    const updatedItems = [...items];
    const currentItem = updatedItems[index];

    let parsedValue: string | number = value;
    if (field === "quantity" || field === "rate" || field === "tax") {
      parsedValue = typeof value === "string" ? parseFloat(value) || 0 : value;
    }

    const newItem: InvoiceItem = {
      ...currentItem,
      [field]: parsedValue,
    };

    newItem.amount =
      (Number(newItem.quantity) || 0) * (Number(newItem.rate) || 0) +
      (Number(newItem.tax) || 0);

    updatedItems[index] = newItem;
    setItems(updatedItems);
  };

  const handleAddRow = () => {
    setItems([...items, { name: "", quantity: 1, rate: 0, tax: 0, amount: 0 }]);
  };

  const handleDeleteRow = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const subtotal = items.reduce((sum, item) => sum + item.amount, 0);

  const handleSave = () => {
    navigate("/preview");
  };
  const handlecloseinvoice = () => navigate("/invoices");

  return (
    <Box p={2}>
      {isMobile ? (
        <>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">Create Invoice</Typography>
            <IconButton onClick={() => navigate("/invoices")}>
              {" "}
              <CloseIcon />{" "}
            </IconButton>
          </Box>

          <TextField label="Customer Name" fullWidth margin="normal" />
          <TextField label="Order No" fullWidth margin="normal" />
          <TextField label="Invoice No" fullWidth margin="normal" />
          <TextField
            label="Invoice Date"
            type="date"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <TextField label="Terms" fullWidth margin="normal" />
          <TextField
            label="Due Date"
            type="date"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />

          <Typography variant="h6" mt={3}>
            Items
          </Typography>
          {items.map((item, index) => (
            <Card key={index} sx={{ mt: 2 }}>
              <CardContent>
                <TextField
                  label="Item Name"
                  fullWidth
                  margin="dense"
                  value={item.name}
                  onChange={(e) =>
                    handleItemChange(index, "name", e.target.value)
                  }
                />
                <TextField
                  label="Quantity"
                  type="number"
                  fullWidth
                  margin="dense"
                  value={item.quantity}
                  onChange={(e) =>
                    handleItemChange(index, "quantity", e.target.value)
                  }
                />
                <TextField
                  label="Rate"
                  type="number"
                  fullWidth
                  margin="dense"
                  value={item.rate}
                  onChange={(e) =>
                    handleItemChange(index, "rate", e.target.value)
                  }
                />
                <TextField
                  label="Tax"
                  type="number"
                  fullWidth
                  margin="dense"
                  value={item.tax}
                  onChange={(e) =>
                    handleItemChange(index, "tax", e.target.value)
                  }
                />
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography fontWeight="bold">
                    Amount: ₹{item.amount.toFixed(2)}
                  </Typography>
                  <IconButton onClick={() => handleDeleteRow(index)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          ))}

          <Button
            startIcon={<AddIcon />}
            variant="outlined"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleAddRow}
          >
            Add Item
          </Button>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6">Summary</Typography>
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Typography>Subtotal:</Typography>
            <Typography>₹ {subtotal.toFixed(2)}</Typography>
          </Box>

          <TextField
            label="Discount (%)"
            fullWidth
            margin="normal"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
          <TextField
            label="TDS / TCS"
            select
            fullWidth
            margin="normal"
            value={tdsTcs}
            onChange={(e) => setTdsTcs(e.target.value)}
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="tds">TDS</MenuItem>
            <MenuItem value="tcs">TCS</MenuItem>
          </TextField>
          <TextField
            label="Adjustment"
            fullWidth
            margin="normal"
            value={adjustment}
            onChange={(e) => setAdjustment(e.target.value)}
          />

          <Box display="flex" justifyContent="space-between" mt={2}>
            <Typography fontWeight="bold">Total:</Typography>
            <Typography fontWeight="bold">₹ {subtotal.toFixed(2)}</Typography>
          </Box>

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3 }}
            onClick={handleSave}
          >
            Save Invoice
          </Button>
        </>
      ) : (
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
          <Box
            sx={{ px: 4, mt: 4, bgcolor: "#f9f9f9", py: 2, borderRadius: 2 }}
          >
            <Grid container spacing={2}>
              <Grid size={6}>
                <Button
                  sx={{ mt: "200px", px: "30px" }}
                  variant="contained"
                  onClick={handleSave}
                >
                  Save
                </Button>
              </Grid>
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
      )}
    </Box>
  );
};

export default InvoiceFormMobile;
