import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Dashboard, Inventory, People, FileCopy } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const drawerWidth = 200;
interface SidebarProps {
  onClose: () => void;
  mobileOpen: boolean;
}
const Sidebar = ({ mobileOpen, onClose }: SidebarProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItems = [
    { text: "Dashboard", icon: <Dashboard />, path: "/" },
    { text: "Products", icon: <Inventory />, path: "/inventory" },
    { text: "Customers", icon: <People />, path: "/customers" },
    { text: "Invoices", icon: <FileCopy />, path: "/invoices" },
  ];

  const drawerContent = (
    <Box sx={{ mt: "0px" }}>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            component={NavLink}
            to={item.path}
            onClick={onClose} // close drawer on mobile after navigation
            sx={{ px: 2 }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // Mobile: temporary drawer
  if (isMobile) {
    return (
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        {drawerContent}
      </Drawer>
    );
  }

  // Desktop: permanent drawer
  return (
    <Drawer
      variant="permanent"
      open
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          top: "64px", // below AppBar
          height: "calc(100vh - 64px)",
          boxSizing: "border-box",
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
};

export default Sidebar;
