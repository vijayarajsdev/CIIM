// Login.tsx
import { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useAuth } from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const { login, isLoading, error } = useAuth();
  const [password, setPassword] = useState("");
  const [loginerror, setLoginerror] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async () => {
    if (!email || !password) {
      setLoginerror("Please Enter Username/Password");
    } else {
      setLoading(isLoading);
      setLoginerror("");
      try {
        await login({ email, password });
        navigate("/");
      } catch {
        setLoginerror(error ? error : "Incorrect Username/Password");
      } finally {
        setLoading(isLoading);
      }
    }
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor: "blueviolet",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: "50px",
          top: "25px",
          color: "aliceblue",
        }}
      >
        <Typography variant="h4" component="div">
          CIIM
        </Typography>
      </Box>

      <Typography pt={20} sx={{ color: "aliceblue" }} variant="h2">
        Login
      </Typography>
      <Grid pt={5}>
        <TextField
          sx={{ width: "400px", backgroundColor: "aliceblue" }}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid pt={2}>
        <TextField
          sx={{ width: "400px", backgroundColor: "aliceblue" }}
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Grid>
      {loginerror ? (
        <Grid>
          {<Typography sx={{ color: "#FFB6C1" }}>{loginerror}</Typography>}
        </Grid>
      ) : (
        <></>
      )}
      <Grid pt={2}>
        <Button
          variant="outlined"
          sx={{ border: " 1px solid aliceblue", color: "aliceblue" }}
          onClick={handleLogin}
        >
          {loading ? <CircularProgress size="30px" /> : "Login"}
        </Button>
      </Grid>
    </Box>
  );
}
