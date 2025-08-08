import {
  Box,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MonthlySalesChart from "./MonthlySalesChart";
import TopSellingProductsChart from "./TopSellingProductsChart";
import { customersData, productsData } from "../../Data";

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
      <Grid container gap={2}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper elevation={3} sx={{ p: 3, width: "200px", height: "50px" }}>
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
        <Grid size={{ xs: 12, sm: 3, md: 3 }}>
          <Paper elevation={3} sx={{ p: 3, width: "200px", height: "50px" }}>
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
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Paper elevation={3} sx={{ p: 3, width: "200px", height: "50px" }}>
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
      <Grid
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "flex-start",
          alignContent: "center",
        }}
        size={{ xs: 12, sm: 12, md: 6 }}
      >
        <Grid sx={{ mt: 4, mr: 10, maxWidth: "80vw", textAlign: "center" }}>
          <Paper elevation={3} sx={{ p: 0, mb: 2 }}>
            <MonthlySalesChart />
          </Paper>
        </Grid>
        <Grid sx={{ mt: 4, maxWidth: "80vw" }}>
          <Paper elevation={3} sx={{ p: 0, mb: 2 }}>
            <TopSellingProductsChart />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
