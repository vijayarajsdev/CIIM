import { AppBar, Toolbar, Typography } from "@mui/material";


const Header = () => {
  // console.log("timoutref outer", timeoutRef);
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(event.target.value);
  // };
  // const handledebouncechange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }
  //   console.log("timeref", timeoutRef);
  //   timeoutRef.current = window.setTimeout(() => {
  //     handleChange(event);
  //   }, 500);
  // };

 
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
