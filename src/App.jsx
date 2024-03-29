import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {
  DashboardPage,
  OutfitsPage,
  ClothesPage,
  GenerateOutfitsPage,
  LoginPage,
  RegisterPage,
} from "./pages";
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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/outfits" element={<GenerateOutfitsPage />} />
          <Route path="/clothes" element={<ClothesPage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
};

export default App;
