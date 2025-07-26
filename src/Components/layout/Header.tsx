import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "black" ,zIndex:1000}}>
      <Toolbar>
        <Typography variant="h6" component="div">
          CIIM
        </Typography>

        <Typography variant="subtitle1" sx={{ marginLeft: "auto" }}>
          Welcome Vijayaraj S
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
