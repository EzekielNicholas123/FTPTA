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

const ClothesPage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [currentClothIndex, setCurrentClothIndex] = useState(0);
  const [currentDataset, setCurrentDataset] = useState("Dataset_01");
  const [clothes, setClothes] = useState([
    {
      filename: "Image_001",
      relativePath: "Dataset_01/Image_001",
      width: 3,
      height: 3,
      format: "png",
      colourModel: "RGB",
      colourRelationship: "Monochromatic",
      Segments: {
        Segment_001: {
          src: "https://picsum.photos/150",
          part: "Top",
          size: 5,
          colourRelationship: "Analogous",
          ColourInSegmentations: {
            ColourInSegmentation_001: {
              positionMatrix: "[[0,1,0], [1,1,1], [0,1,0]]",
              positionCatagory: "Center",
              percentage: 0.556,
              colourDefinition: "0x0000ff",
            },
          },
        },
        Segment_002: {
          src: "https://picsum.photos/150",
          part: "Top",
          size: 5,
          colourRelationship: "Analogous",
          ColourInSegmentations: {
            ColourInSegmentation_001: {
              positionMatrix: "[[0,1,0], [1,1,1], [0,1,0]]",
              positionCatagory: "Center",
              percentage: 0.556,
              colourDefinition: "0x0000ff",
            },
          },
        },
        Segment_003: {
          src: "https://picsum.photos/150",
          part: "Top",
          size: 5,
          colourRelationship: "Analogous",
          ColourInSegmentations: {
            ColourInSegmentation_001: {
              positionMatrix: "[[0,1,0], [1,1,1], [0,1,0]]",
              positionCatagory: "Center",
              percentage: 0.556,
              colourDefinition: "0x0000ff",
            },
          },
        },
      },
    },
    {
      filename: "Image_002",
      relativePath: "Dataset_01/Image_002",
      width: 3,
      height: 3,
      format: "png",
      colourModel: "RGB",
      colourRelationship: "Monochromatic",
      Segments: {
        Segment_001: {
          src: "https://picsum.photos/150",
          part: "Top",
          size: 5,
          colourRelationship: "Analogous",
          ColourInSegmentations: {
            ColourInSegmentation_001: {
              positionMatrix: "[[0,1,0], [1,1,1], [0,1,0]]",
              positionCatagory: "Center",
              percentage: 0.556,
              colourDefinition: "0x0000ff",
            },
          },
        },
      },
    },
  ]);

  const handleUpload = (event) => {
    const files = event.target.files;
    const formData = new FormData();
    formData.append("file", files[0]);
    // TODO: Send formData to backend
    console.log(formData);
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
      <ClothDetailDialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        clothData={clothes[currentClothIndex]}
      />
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
          Clothes
          <Divider sx={{ mb: "1rem" }} />
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel id="demo-simple-select-label">Dataset</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currentDataset}
              label="Dataset"
              onChange={(event) => {
                setCurrentDataset(event.target.value);
              }}
            >
              <MenuItem value={"Dataset_01"}>Dataset_01</MenuItem>
              <MenuItem value={"Dataset_02"}>Dataset_02</MenuItem>
              <MenuItem value={"Dataset_03"}>Dataset_03</MenuItem>
            </Select>
          </FormControl>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              Upload file
              <VisuallyHiddenInput type="file" onChange={handleUpload} />
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                navigate("/outfits/generate");
              }}
            >
              Generate Outfit
            </Button>
          </Box>
        </Box>
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
        {clothes.map((cloth, index) => {
          return (
            <Box
              key={index}
              sx={{
                backgroundImage: `url(https://picsum.photos/150)`,
                height: "150px",
                backgroundSize: "cover",
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
            ></Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ClothesPage;
