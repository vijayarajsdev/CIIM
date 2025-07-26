import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <Box sx={{ display: "flex", flex: 1 }}>
        <Sidebar />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3,mt:'64px',ml:"150px" }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
