import { Box, Grid, Paper, Typography } from "@mui/material";
import MonthlySalesChart from "./MonthlySalesChart";
import TopSellingProductsChart from "./TopSellingProductsChart";
import { customersData, productsData } from "../../Data";

const Dashboard = () => {
  const totalproducts = productsData?.length;
  const totalcustomers = customersData?.length;
  return (
    <Box sx={{ padding: 1 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontFamily: "poppins", fontWeight: 600, color: "#4A3AFF" }}
      >
        Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography sx={{ fontFamily: "poppins", fontWeight: 600 }}>
              Total Products
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "poppins",
                fontWeight: 600,
                color: "#4A3AFF",
              }}
            >
              {totalproducts}
            </Typography>
          </Paper>
        </Grid>
        <Grid>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography sx={{ fontFamily: "poppins", fontWeight: 600 }}>
              Total Customers
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontFamily: "poppins", fontWeight: 600, color: "#4A3AFF" }}
            >
              {totalcustomers}
            </Typography>
          </Paper>
        </Grid>
        <Grid>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography sx={{ fontFamily: "poppins", fontWeight: 600 }}>
              Inventory Value
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontFamily: "poppins", fontWeight: 600, color: "#4A3AFF" }}
            >
              $52245
            </Typography>
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
