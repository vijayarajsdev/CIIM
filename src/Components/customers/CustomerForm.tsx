import {
  Box,
  Button,
  TextField,
  Grid,
  MenuItem,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, useParams } from "react-router-dom";
import type { Customer } from "../../Types";
import {
  createCustomer,
  fetchCustomerById,
  updateCustomer,
} from "./customerservice";
import { useEffect, useState } from "react";
import { useAuth } from "../../Hooks/useAuth";
const CustomerForm = () => {
  const mode = "create";
  const { id } = useParams();
  const { user } = useAuth();
  const [customer, setCustomer] = useState<Customer>({
    name: "",
    phone: "",
    email: "",
    gstno: "",
    address: "",
    isGstRegistered: "No",
    companyname: "",
    tenantId: user?.tenantId,
  });
  const navigate = useNavigate();
  const titlemode = mode === "create" ? "Add Customer" : "Update Customer";
  const btnmode = mode === "create" ? "SAVE" : "UPDATE";
  const handleclosecustomerform = () => {
    navigate("/customers");
  };
  useEffect(() => {
    if (id) {
      const fetchexistingcustomer = async () => {
        const customerresponse = await fetchCustomerById(id);
        if (
          customerresponse.status !== 404 &&
          customerresponse.status !== 500
        ) {
          setCustomer(customerresponse.data);
        }
      };
      fetchexistingcustomer();
    }
  }, [id]);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCustomer((prev: Customer) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSaveCustomer = async () => {
    if (id) {
      const updatecustomerresponse = await updateCustomer(id, customer);
      if (updatecustomerresponse.status === 200) {
        navigate("/customers");
      } else {
        alert("Update Failed");
      }
    } else {
      const customerresponse = await createCustomer(customer);
      if (customerresponse.status === 201) {
        navigate("/customers");
      } else {
        alert("Customer Creation Failed");
      }
    }
  };
  return (
    <Box>
      <Typography
        variant="h6"
        sx={{ textAlign: "center", mb: 3, fontFamily: "Poppins" }}
      >
        {titlemode}
      </Typography>
      <Button
        onClick={handleclosecustomerform}
        sx={{
          position: "absolute",
          right: "20px",
          top: "86px",
          marginLeft: "20px",
        }}
      >
        <CloseIcon />
      </Button>
      <Box sx={{ maxWidth: 900, mx: "auto", marginTop: "20px" }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="NAME"
              variant="outlined"
              fullWidth
              name="name"
              value={customer.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="COMPANY NAME"
              variant="outlined"
              fullWidth
              name="companyname"
              value={customer.companyname}
              onChange={handleChange}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              select
              label="GST REGISTERED"
              variant="outlined"
              fullWidth
              name="isGstRegistered"
              value={customer?.isGstRegistered}
              onChange={handleChange}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="PHONE"
              variant="outlined"
              fullWidth
              name="phone"
              value={customer.phone}
              onChange={handleChange}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="GST NO"
              variant="outlined"
              fullWidth
              name="gstno"
              value={customer.gstno}
              onChange={handleChange}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              label="EMAIL"
              variant="outlined"
              fullWidth
              name="email"
              value={customer.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              label="ADDRESS"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              maxRows={3}
              onChange={handleChange}
              value={customer.address}
              name="address"
            />
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "end", mt: 3 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveCustomer}
            sx={{ fontFamily: "Poppins" }}
          >
            {btnmode}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerForm;
