import {
  Box,
  Button,
  TextField,
  Grid,
  MenuItem,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
const CustomerForm = () => {
  const mode = "create";
  const navigate = useNavigate();
  const titlemode = mode === "create" ? "Add Customer" : "Update Customer";
  const btnmode = mode === "create" ? "SAVE" : "UPDATE";
  const handleclosecustomerform = () => {
    navigate("/customers");
  };
  return (
    <Box>
      <Typography variant="h6" sx={{ textAlign: "center", mb: 3 }}>
        {titlemode}
      </Typography>
      <Button
        onClick={handleclosecustomerform}
        sx={{
          position: "absolute",
          right: "40px",
          top: "80px",
        }}
      >
        <CloseIcon />
      </Button>
      <Box sx={{ maxWidth: 900, mx: "auto" }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField label="NAME" variant="outlined" fullWidth />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField label="COMPANY NAME" variant="outlined" fullWidth />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              label="GST REGISTERED"
              variant="outlined"
              fullWidth
              value={"yes"}
            >
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField label="MOBILE" variant="outlined" fullWidth />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField label="GST NO" variant="outlined" fullWidth />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField label="EMAIL" variant="outlined" fullWidth />
          </Grid>
          <Grid size={12}>
            <TextField
              label="ADDRESS"
              variant="outlined"
              fullWidth
              multiline
              maxRows={3}
            />
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "end", mt: 3 }}>
          <Button variant="contained" color="primary">
            {btnmode}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerForm;
