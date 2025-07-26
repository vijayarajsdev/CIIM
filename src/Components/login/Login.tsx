// Login.tsx
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginerror, setLoginerror] = useState("");
  const [loading, setLoading] = useState(false);
  const handleLogin = async () => {
    if (!email || !password) {
      setLoginerror("Please Enter Username/Password");
    } else {
      setLoading(true);
      setLoginerror("");
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/");
      } catch {
        setLoginerror("Incorrect Username/Password");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor: "blueviolet",
        height: "100vh",
        width:"100vw"
      }}
    >
      <Box sx={{position:"absolute", right: "50px",top:"25px" ,color:"aliceblue"}}>
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
