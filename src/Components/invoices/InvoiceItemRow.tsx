import {
  Grid,
  TextField,
  MenuItem,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import type React from "react";

const taxOptions = [
  { label: "Non-Taxable", value: 0 },
  { label: "GST 3%", value: 3 },
  { label: "GST 5%", value: 5 },
  { label: "GST 12%", value: 12 },
  { label: "GST 18%", value: 18 },
];
export interface InvoiceItem {
  name: string;
  quantity: number;
  rate: number;
  tax: number;
  amount: number; // usually calculated as string (e.g., "123.00")
}
interface InvoiceItemRowProps {
  index: number;
  item: InvoiceItem;
  onChange: (
    index: number,
    field: keyof InvoiceItem,
    value: string | number
  ) => void;
  onDelete: (index: number) => void;
}
const InvoiceItemRow: React.FC<InvoiceItemRowProps> = ({
  index,
  item,
  onChange,
  onDelete,
}) => {
  const handleChange = (
    index: number,
    field: keyof InvoiceItem,
    value: string | number
  ) => {
    onChange(index, field, value);
  };

  return (
    <Grid container spacing={2} alignItems="center" mt={2}>
      <Grid size={4}>
        <TextField
          fullWidth
          placeholder="Item name"
          value={item.name}
          onChange={(e) => handleChange(index, "name", e.target.value)}
          size="small"
          multiline
          maxRows={2}
        />
      </Grid>
      <Grid size={1.3}>
        <TextField
          fullWidth
          type="number"
          value={item.quantity}
          onChange={(e) =>
            handleChange(index, "quantity", parseFloat(e.target.value))
          }
          InputProps={{ endAdornment: <Typography>pcs</Typography> }}
          size="small"
        />
      </Grid>
      <Grid size={1.2}>
        <TextField
          fullWidth
          type="number"
          value={item.rate}
          onChange={(e) =>
            handleChange(index, "rate", parseFloat(e.target.value))
          }
          size="small"
        />
      </Grid>
      <Grid size={2}>
        <TextField
          select
          fullWidth
          value={item.tax}
          onChange={(e) =>
            handleChange(index, "tax", parseFloat(e.target.value))
          }
          size="small"
        >
          {taxOptions.map((opt) => (
            <MenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid size={2}>
        <Typography sx={{ pt: 1 }}>₹ {item.amount.toFixed(2)}</Typography>
      </Grid>
      <Grid size={1}>
        <IconButton color="error" onClick={() => onDelete(index)}>
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default InvoiceItemRow;
