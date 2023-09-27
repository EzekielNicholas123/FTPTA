import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleLogin = () => {
    // TODO: handle login
    console.log(form);
    navigate("/");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 69px)",
      }}
    >
      <Card>
        <CardHeader title="Login" />
        <CardContent>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            onSubmit={(event) => {
              event.preventDefault();
              handleLogin();
            }}
          >
            <TextField
              sx={{ mb: "1rem" }}
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              value={form.email}
              onChange={(event) => {
                setForm({
                  ...form,
                  email: event.target.value,
                });
              }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              sx={{ mb: "1rem" }}
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              value={form.password}
              onChange={(event) => {
                setForm({
                  ...form,
                  password: event.target.value,
                });
              }}
              InputLabelProps={{ shrink: true }}
            />
            <Button fullWidth variant="contained" type="submit">
              Login
            </Button>
            <Link
              sx={{
                display: "block",
                textAlign: "center",
                marginTop: "1rem",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/register");
              }}
            >
              Don't have an account? Register here.
            </Link>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginPage;
