import { Box, useMediaQuery, useTheme } from "@mui/material";
import Sidebar from "./Sidebar";
import Header from "./Header";
// import SmallScreenBlocker from "./SmallScreenBlocker";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <Header onMenuClick={isMobile ? handleDrawerToggle : () => {}} />
      {/* {isMobile && <SmallScreenBlocker />} */}

      <Box sx={{ display: "flex", flex: 1 }}>
        <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            flexWrap: "wrap",
            p: 3,
            mt: "64px",
            ml: isMobile ? 0 : "10px", // Only add left margin on desktop
            transition: "margin-left 0.3s ease",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
