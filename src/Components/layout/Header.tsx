import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Toolbar>
        <Typography variant="h6" component="div">
          CIIM
        </Typography>
        <Typography variant="subtitle1" sx={{ marginLeft: "auto" }}>
          Welcome to CIIM
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
