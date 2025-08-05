import { AppBar, Toolbar, Typography } from "@mui/material";
import { useAuth } from "../../Hooks/useAuth";
import "../../../index.css";

const Header = () => {
  const { user } = useAuth();
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "black", zIndex: 1000 }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontFamily: "Poppins", color: "#4A3AFF" }}
        >
          CIIM{" "}
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{ marginLeft: "auto", fontFamily: "Poppins" }}
        >
          {`Welcome ${user?.name}`}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
