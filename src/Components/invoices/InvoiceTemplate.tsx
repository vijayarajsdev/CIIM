import { Typography, Box, Grid, TextField, Input } from "@mui/material";

const InvoiceTemplate = () => {
  return (
    <Box>
      <Typography>InvoiceTemplate</Typography>
      <Box sx={{ padding: 4 }}>
        <Grid container alignItems="center">
          <Grid size={1.5}>
            <Typography>Customer Name</Typography>
          </Grid>
          <Grid size={10.5}>
            <TextField variant="outlined" fullWidth size="small"/>
          </Grid>
        </Grid>
        <Grid container alignItems="center" mt={2} spacing={2}>
          <Grid size={1.5}>
            <Typography>Order No</Typography>
          </Grid>
          <Grid size={2.5}>
            <TextField size="small"/>
          </Grid>
          <Grid size={1.5}>
            <Typography>Invoice No</Typography>
          </Grid>
          <Grid size={2.5}>
            <TextField  size="small"/>
          </Grid>
          <Grid></Grid>
        </Grid>
        <Grid container alignItems="center" mt={2} spacing={2}>
          <Grid size={1.5}>
            <Typography>Invoice Date</Typography>
          </Grid>
          <Grid size={2.5}>
            <TextField type="date" size="small"/>
          </Grid>
          <Grid size={1.5}>
            <Typography>Terms</Typography>
          </Grid>
          <Grid size={2.5}>
            <TextField size="small"/>
          </Grid>
          <Grid size={1.5}>
            <Typography>Due Date</Typography>
          </Grid>
          <Grid size={2.5}>
            <TextField type="date" size="small" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default InvoiceTemplate;
