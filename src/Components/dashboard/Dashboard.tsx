import { Box, Grid, Paper, Typography } from "@mui/material";
import MonthlySalesChart from "./MonthlySalesChart";
import TopSellingProductsChart from "./TopSellingProductsChart";

const Dashboard = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography>Total Products</Typography>
            <Typography variant="h5">52</Typography>
          </Paper>
        </Grid>
        <Grid>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography>Total Customers</Typography>
            <Typography variant="h5">20</Typography>
          </Paper>
        </Grid>
        <Grid>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography>Inventory Value</Typography>
            <Typography variant="h5">$52245</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid display={"flex"} justifyContent="space-between" sx={{ mt: 4 }}>
        <Box sx={{ mt: 4, width: "40%" }}>
          <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
            <MonthlySalesChart />
          </Paper>
        </Box>
        <Box sx={{ mt: 4, width: "40%" }}>
          <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
            <TopSellingProductsChart />
          </Paper>
        </Box>
      </Grid>
    </Box>
  );
};

export default Dashboard;
