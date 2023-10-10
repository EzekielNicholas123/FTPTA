import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { ClothDetailDialog } from "../components";
import { useNavigate } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import IconButton from "@mui/material/IconButton";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const OutfitsPage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [currentClothIndex, setCurrentClothIndex] = useState(0);
  const [currentDataset, setCurrentDataset] = useState("Dataset_01");
  const [outfits, setOutfits] = useState([
    { src: "/images/influencer-1.png" },
    { src: "/images/influencer-2.png" },
    { src: "/images/influencer-3.png" },
    { src: "/images/influencer-4.png" },
    { src: "/images/influencer-5.png" },
  ]);
  const handleDelete = (index) => {
    setOutfits(outfits.filter((_, i) => i !== index));
    // TODO: delete from database
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          flex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2rem",
          maxWidth: "xl",
          gap: "1rem",
        }}
      >
        <Typography variant="h5">
          Recommended Outfits
          <Divider sx={{ mb: "1rem" }} />
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: "100px",
          padding: "2rem",
          width: "100%",
          maxWidth: "xl",
        }}
      >
        {outfits.map((outfit, index) => {
          return (
            <Box
              key={index}
              sx={{
                position: "relative",
                backgroundImage: `url(${outfit.src})`,
                height: "150px",
                backgroundSize: "fit",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "4px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                cursor: "pointer",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
                  transition: "all 0.2s ease-in-out",
                },
              }}
              onClick={() => {
                setOpen(true);
                setCurrentClothIndex(index);
              }}
            >
              <IconButton
                aria-label="delete"
                size="small"
                sx={{
                  position: "absolute",
                  top: "-12px",
                  right: "-12px",
                  color: "red",
                }}
                onClick={() => {
                  handleDelete(index);
                }}
              >
                <HighlightOffIcon />
              </IconButton>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default OutfitsPage;
