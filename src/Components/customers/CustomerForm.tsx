import { Box, Button, TextField, Grid, MenuItem, Typography } from "@mui/material";

const CustomerForm = () => {
  const mode = "create";
  const titlemode= mode === "create" ? "Add Customer" : "Update Customer";
  const btnmode = mode === "create" ? "SAVE" : "UPDATE";
  //   return (
  //     <>
  //       <Box
  //         sx={{
  //           //height: 600,
  //           // display: "flex",
  //           // flexDirection: "column",
  //           // gap: 2,
  //           // alignItems: "center",
  //           display: "grid",
  //           gridTemplateRows: "repeat(2, 1fr)",
  //           gridTemplateColumns: "repeat(2, 1fr)",
  //           gap: 4,
  //         }}
  //       >
  //         <Box>
  //           <TextField
  //             id="outlined-basic"
  //             label="NAME"
  //             variant="outlined"
  //             sx={{ width: "40vh", flex: 1 }}
  //           />
  //         </Box>
  //         <Box>
  //           <TextField
  //             id="outlined-basic"
  //             label="COMPANY NAME"
  //             variant="outlined"
  //             sx={{ width: "40vh", flex: 1 }}
  //           />
  //         </Box>
  //         <Box>
  //           <TextField
  //             id="outlined-basic"
  //             label="GST REGISTERED"
  //             variant="outlined"
  //             sx={{ width: "40vh", flex: 1 }}
  //           />
  //         </Box>
  //         <Box>
  //           <TextField
  //             id="outlined-basic"
  //             multiline
  //             label="ADDRESS"
  //             variant="outlined"
  //             sx={{ width: "40vh", flex: 1 }}
  //           />
  //         </Box>
  //         <Box>
  //           <TextField
  //             id="outlined-basic"
  //             label="MOBILE"
  //             variant="outlined"
  //             sx={{ width: "40vh", flex: 1 }}
  //           />
  //         </Box>
  //         <Box>
  //           <TextField
  //             id="outlined-basic"
  //             label="GST NO"
  //             variant="outlined"
  //             sx={{ width: "40vh", flex: 1 }}
  //           />
  //         </Box>
  //         <Box>
  //           <TextField
  //             id="outlined-basic"
  //             label="EMAIL"
  //             variant="outlined"
  //             sx={{ width: "40vh", flex: 1 }}
  //           />
  //         </Box>
  //       </Box>
  //       <Box sx={{ display: "flex", justifyContent: "end", mt: 2 ,pr:45}}>
  //         <Button variant="contained" color="primary">
  //           {btnmode}
  //         </Button>
  //       </Box>
  //     </>
  //   );
  return (
    <>
    <Typography variant="h6" sx={{ textAlign: "center", mb: 3 }}>
        {titlemode}</Typography>
      <Box sx={{ maxWidth: 900, mx: "auto" }}>
        <Grid container spacing={3}>
          <Grid size={{xs:12 ,md:6}}>
            <TextField label="NAME" variant="outlined" fullWidth />
          </Grid>
          <Grid size={{xs:12 ,md:6}}>
            <TextField label="COMPANY NAME" variant="outlined" fullWidth />
          </Grid>
          <Grid size={{xs:12 ,md:6}}>
            <TextField
              select
              label="GST REGISTERED"
              variant="outlined"
              fullWidth
              value={"yes"}
            >
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </TextField>
          </Grid>
          <Grid size={{xs:12 ,md:6}}>
            <TextField label="MOBILE" variant="outlined" fullWidth />
          </Grid>
          <Grid size={{xs:12 ,md:6}}>
            <TextField label="GST NO" variant="outlined" fullWidth />
          </Grid>
          <Grid size={{xs:12 ,md:6}}>
            <TextField label="EMAIL" variant="outlined" fullWidth />
          </Grid>
          <Grid  size={12}>
            <TextField
              label="ADDRESS"
              variant="outlined"
              fullWidth
              multiline
              maxRows={3}
            />
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "end", mt: 3 }}>
          <Button variant="contained" color="primary">
            {btnmode}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CustomerForm;
