import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { DashboardPage } from "./pages";
import { MainTheme } from "./themes";
import { Navbar } from "./components";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={MainTheme}>
      <CssBaseline />
      <Navbar />
      <Box>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
};

export default App;
