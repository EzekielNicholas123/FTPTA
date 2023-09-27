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
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    gender: "",
    dob: "",
  });
  const handleRegister = () => {
    // TODO: handle register
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
        minHeight: "calc(100vh - 69px - 4rem)",
        margin: "2rem 0",
      }}
    >
      <Card>
        <CardHeader title="Register" />
        <CardContent>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            onSubmit={(event) => {
              event.preventDefault();
              handleRegister();
            }}
          >
            <TextField
              sx={{ mb: "1rem" }}
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              value={form.username}
              onChange={(event) => {
                setForm({
                  ...form,
                  username: event.target.value,
                });
              }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              sx={{ mb: "1rem" }}
              fullWidth
              label="Username"
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
            <FormControl fullWidth style={{ marginBottom: "1rem" }}>
              <InputLabel id="demo-simple-select-label" shrink>
                Gender
              </InputLabel>
              <Select
                notched
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={form.gender}
                label="Gender"
                onChange={(event) => {
                  setForm({
                    ...form,
                    gender: event.target.value,
                  });
                }}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
                <MenuItem value={"Non-binary"}>Non-binary</MenuItem>
                <MenuItem value={"Prefer not to say"}>
                  Prefer not to say
                </MenuItem>
              </Select>
            </FormControl>
            <TextField
              sx={{ mb: "1rem" }}
              fullWidth
              label="Date of Birth"
              variant="outlined"
              type="date"
              value={form.dob}
              InputLabelProps={{ shrink: true }}
              onChange={(event) => {
                setForm({
                  ...form,
                  dob: event.target.value,
                });
              }}
            />

            <Button fullWidth variant="contained" type="submit">
              Register
            </Button>
            <Link
              sx={{
                display: "block",
                textAlign: "center",
                marginTop: "1rem",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/login");
              }}
            >
              Already have an account? Login here.
            </Link>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RegisterPage;
