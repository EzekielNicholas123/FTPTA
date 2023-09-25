import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {
  DashboardPage,
  OutfitsPage,
  ClothesPage,
  GenerateOutfitsPage,
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
          <Route path="/outfits" element={<OutfitsPage />} />
          <Route path="/outfits/generate" element={<GenerateOutfitsPage />} />
          <Route path="/clothes" element={<ClothesPage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
};

export default App;
