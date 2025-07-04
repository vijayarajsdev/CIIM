import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import { Dashboard, Inventory, People, FileCopy } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { text: "Dashboard", icon: <Dashboard />, path: "/" },
    { text: "Products", icon: <Inventory />, path: "/inventory" },
    { text: "Customers", icon: <People />, path: "/customers" },
    { text: "Invoices", icon: <FileCopy />, path: "/invoices" },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "yellow",
        height: "calc(100vh-64px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <List sx={{ flexGrow: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} component={NavLink} to={item.path}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
