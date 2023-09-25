import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const ClothesPage = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Button
        variant="contained"
        onClick={() => {
          navigate("/outfits/generate");
        }}
      >
        Generate Outfit
      </Button>
    </Box>
  );
};

export default ClothesPage;
