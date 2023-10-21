import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

const Register = () => {
  const { authWithGoogle, register } = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit() {
    try {
      await register(email, password);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <Grid
        container
        direction="row"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {error && <Alert>{error}</Alert>}
        <Typography
          sx={{ color: "#fff", letterSpacing: "2px", fontSize: "32px" }}
        >
          Sign in to Storage
        </Typography>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          sx={{ width: "40%", marginTop: "30px" }}
          label="Email"
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          sx={{ width: "40%", marginTop: "30px" }}
          label="Password"
        />
        <Button
          onClick={handleSubmit}
          sx={{ marginTop: "20px", width: "40%" }}
          variant="contained"
        >
          Sing in
        </Button>
        <Button
          onClick={() => authWithGoogle()}
          sx={{ marginTop: "20px", width: "40%" }}
          variant="contained"
        >
          Continue with Google
        </Button>
      </Grid>
    </>
  );
};

export default Register;
