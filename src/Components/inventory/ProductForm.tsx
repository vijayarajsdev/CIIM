import { Box, Button, MenuItem, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, useParams } from "react-router-dom";
import type { Product } from "../../Types";
import { useEffect, useState } from "react";
import {
  createProduct,
  fetchProductById,
  updateProduct,
} from "./productservice";
import { useAuth } from "../../Hooks/useAuth";
const ProductForm = () => {
  const mode = "create";
  const navigate = useNavigate();
  const { user } = useAuth();
  const { id } = useParams();
  const [product, setProduct] = useState<Product>({
    name: "",
    description: "",
    price: "",
    hsnCode: "",
    gst: "",
    unit: "",
    category: "",
    stock: 1,
    tenantId: user ? user?.tenantId : "",
  });
  useEffect(() => {
    if (id) {
      const fetchexistingproduct = async () => {
        const productresponse = await fetchProductById(id);
        if (productresponse.status !== 404 && productresponse.status !== 500) {
          setProduct(productresponse.data);
        }
      };
      fetchexistingproduct();
    }
  }, [id]);
  const btnmode = mode === "create" ? "SAVE" : "UPDATE";
  const handlechange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setProduct((prev) => {
      let newValue: string | number = value;

      // Convert specific fields to number
      if (["price", "gst", "stock"].includes(name)) {
        newValue = value === "" ? "" : Number(value);
      }

      return { ...prev, [name]: newValue };
    });
  };
  const handleSaveproduct = async () => {
    if (id) {
      const updateproductresponse = await updateProduct(id, product);
      if (updateproductresponse.status === 200) {
        navigate("/inventory");
      } else {
        alert("Update Failed");
      }
    } else {
      const productresponse = await createProduct(product);
      if (productresponse.status === 201) {
        navigate("/inventory");
      } else {
        alert("Product Creation Failed");
      }
    }
  };

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
          right: "5px",
          top: "80px",
        }}
      >
        <CloseIcon />
      </Button>
      <Box sx={{ marginTop: "30px" }}>
        <TextField
          id="outlined-basic"
          label="ITEM"
          variant="outlined"
          sx={{ width: "40vh", flex: 1 }}
          name="name"
          onChange={handlechange}
          value={product.name}
        />
      </Box>
      <Box>
        <TextField
          id="outlined-basic"
          label="PRICE"
          variant="outlined"
          sx={{ width: "40vh", flex: 1 }}
          name="price"
          value={product?.price}
          onChange={handlechange}
        />
      </Box>
      <Box>
        <TextField
          id="outlined-basic"
          label="HSN "
          variant="outlined"
          value={product.hsnCode}
          sx={{ width: "40vh", flex: 1 }}
          name="hsnCode"
          onChange={handlechange}
        />
      </Box>
      <Box>
        <TextField
          onChange={handlechange}
          value={product.category}
          select
          id="outlined-basic"
          label="CATEGORY"
          variant="outlined"
          sx={{ width: "40vh", flex: 1 }}
          name="category"
        >
          <MenuItem value="hydraulichose">HYDRAULIC HOSE</MenuItem>
          <MenuItem value="fittings">FITTINGS</MenuItem>
        </TextField>
      </Box>
      <Box>
        <TextField
          id="outlined-basic"
          label="GST RATE "
          variant="outlined"
          value={product.gst}
          sx={{ width: "40vh", flex: 1 }}
          name="gst"
          onChange={handlechange}
        />
      </Box>
      <Box>
        <TextField
          id="outlined-basic"
          label="QUANTITY"
          variant="outlined"
          name="stock"
          value={product.stock}
          onChange={handlechange}
          sx={{ width: "40vh", flex: 1 }}
        />
      </Box>
      <Box>
        <TextField
          id="outlined-basic"
          label="UNIT "
          variant="outlined"
          value={product.unit}
          sx={{ width: "40vh", flex: 1 }}
          name="unit"
          onChange={handlechange}
        />
      </Box>
      <Box>
        <Button variant="contained" color="primary" onClick={handleSaveproduct}>
          {btnmode}
        </Button>
      </Box>
    </Box>
  );
};

export default ProductForm;
