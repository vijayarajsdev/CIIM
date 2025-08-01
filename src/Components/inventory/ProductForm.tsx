import { Box, Button, MenuItem, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
const ProductForm = () => {
  const mode = "create";
  const navigate = useNavigate();
  const btnmode = mode === "create" ? "SAVE" : "UPDATE";
  const handlecloseproductform = () => {
    navigate("/inventory");
  };
  return (
    <Box
      sx={{
        height: 500,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
      }}
    >
      <Button
        onClick={handlecloseproductform}
        sx={{
          position: "absolute",
          right: "40px",
          top: "80px",
        }}
      >
        <CloseIcon />
      </Button>
      <Box>
        <TextField
          id="outlined-basic"
          label="ITEM"
          variant="outlined"
          sx={{ width: "40vh", flex: 1 }}
        />
      </Box>
      <Box>
        <TextField
          id="outlined-basic"
          label="PRICE"
          variant="outlined"
          sx={{ width: "40vh", flex: 1 }}
        />
      </Box>
      <Box>
        <TextField
          id="outlined-basic"
          label="HSN "
          variant="outlined"
          sx={{ width: "40vh", flex: 1 }}
        />
      </Box>
      <Box>
        <TextField
          select
          id="outlined-basic"
          label="CATEGORY"
          variant="outlined"
          sx={{ width: "40vh", flex: 1 }}
        >
          <MenuItem value="hydraulichose">HYDRAULIC HOSE</MenuItem>
          <MenuItem value="fittings">FITTINGS</MenuItem>
        </TextField>
      </Box>
      <Box>
        <TextField
          id="outlined-basic"
          label="QUANTITY"
          variant="outlined"
          sx={{ width: "40vh", flex: 1 }}
        />
      </Box>
      <Box>
        <Button variant="contained" color="primary">
          {btnmode}
        </Button>
      </Box>
    </Box>
  );
};

export default ProductForm;
