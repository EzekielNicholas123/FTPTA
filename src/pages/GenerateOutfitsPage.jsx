import { Wheel } from "@uiw/react-color";
import { useState, useEffect, React } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Switch from "@mui/material/Switch";
import Checkbox from "@mui/material/Checkbox";
import { CardHeader, FormControlLabel, TextField } from "@mui/material";
const GenerateOutfitsPage = () => {
  const [recommendedColors, setRecommendedColors] = useState([
    {
      hex: "#CAD7C6",
      name: "Willow Green",
      info: "2018 SS Dries Van Noten",
      description: "Top 1 colour in 2020 & 2021 SS; Lighter colour",
      graph: {
        description: "2022: 10.460%\n2023: 11.285%",
        src: "/images/graph-sample.png",
      },
    },
    {
      hex: "#C2CDE5",
      name: "Periwinkle",
      info: "2018 SS Dries Van Noten",
      description: "Top 1 colour in 2020 & 2021 SS; Lighter colour",
      graph: {
        description: "2022: 10.460%\n2023: 11.285%",
        src: "/images/graph-sample.png",
      },
    },
    {
      hex: "#434B4D",
      name: "Iron Grey",
      info: "2018 SS Dries Van Noten",
      description: "Top 1 colour in 2020 & 2021 SS; Lighter colour",
      graph: {
        description: "2022: 10.460%\n2023: 11.285%",
        src: "/images/graph-sample.png",
      },
    },
    {
      hex: "#AFB8BD",
      name: "Dove Grey",
      info: "2018 SS Dries Van Noten",
      description: "Top 1 colour in 2020 & 2021 SS; Lighter colour",
      graph: {
        description: "2022: 10.460%\n2023: 11.285%",
        src: "/images/graph-sample.png",
      },
    },
    {
      hex: "#002046",
      name: "Oxford Blue",
      info: "2018 SS Dries Van Noten",
      description: "Top 1 colour in 2020 & 2021 SS; Lighter colour",
      graph: {
        description: "2022: 10.460%\n2023: 11.285%",
        src: "/images/graph-sample.png",
      },
    },
  ]);
  const [nOutfits, setNOutfits] = useState(5);
  const topNOutfits = recommendedColors.slice(0, nOutfits);
  const [colorsToDisplay, setColorsToDisplay] = useState(topNOutfits);

  useEffect(() => {
    setColorsToDisplay(topNOutfits);
  }, [nOutfits]);

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
          display: "flex",
          backgroundColor: "secondary.main",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            flexGrow: 1,
            width: "100%",
            backgroundColor: "secondary.main",
            alignItems: "center",
            maxWidth: "xl",
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              padding: "2em",
              flexGrow: 1,
            }}
          >
            <TextField
              id="outlined-number"
              label="Number of Outfits"
              type="number"
              variant="filled"
              InputLabelProps={{
                shrink: true,
              }}
              value={nOutfits}
              onChange={(event) => {
                if (event.target.value < 1 || !event.target.value) {
                  setNOutfits(1);
                  return;
                }
                setNOutfits(parseInt(event.target.value));
              }}
              sx={{
                backgroundColor: "white",
                borderRadius: "4px",
                marginBottom: "1rem",
              }}
              InputProps={{ inputProps: { min: 1 } }}
            />
            <Divider sx={{ mb: "1rem" }} />
            <Typography
              variant="h6"
              sx={{ color: "white", marginBottom: "1rem" }}
            >
              Displayed Colours
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(60px, 1fr))",
                gap: "1rem",
                marginBottom: "1rem",
              }}
            >
              {topNOutfits.map((color, index) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "white",
                    padding: "0.5rem",
                    borderRadius: "4px",
                    borderBottom: "10px solid" + color?.hex,
                  }}
                  key={index}
                >
                  <Typography
                    sx={{ textAlign: "center", fontWeight: "bold" }}
                    variant="body2"
                  >
                    {index + 1}
                    {". "}
                  </Typography>
                  <Checkbox
                    checked={colorsToDisplay.includes(color)}
                    onChange={(event) => {
                      if (event.target.checked) {
                        setColorsToDisplay([...colorsToDisplay, color]);
                      } else {
                        setColorsToDisplay(
                          colorsToDisplay.filter((c) => c !== color)
                        );
                      }
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flexGrow: 1,
              height: "300px",
            }}
          >
            {colorsToDisplay.map((color) => (
              <Wheel
                color={color?.hex}
                style={{ position: "absolute" }}
                key={color?.hex}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2em",
          gap: "1rem",
          overflow: "auto",
          maxWidth: "xl",
        }}
      >
        {topNOutfits.map((color, index) => (
          <Card sx={{ maxWidth: 345, minWidth: 150 }} key={index}>
            <CardHeader
              avatar={
                <Box
                  sx={{
                    backgroundColor: color?.hex,
                    width: "1rem",
                    height: "1rem",
                    borderRadius: "4px",
                  }}
                />
              }
              title={`${index + 1}. ${color.name}`}
            />
            <CardMedia
              sx={{ height: 140, objectFit: "contain" }}
              image={`/images/influencer-${index + 1}.png`}
              component="img"
            />
            <CardContent>
              <Divider sx={{ mb: "1rem" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginBottom: "1rem",
                  backgroundColor: color?.hex,
                  padding: "1rem",
                  borderRadius: "4px",
                }}
              >
                <Wheel color={color?.hex} width={100} height={100} />
              </Box>
              <Divider sx={{ mb: "1rem" }} />
              <Typography sx={{ mb: "1rem" }} variant="body2">
                {color?.info}
              </Typography>
              <Divider sx={{ mb: "1rem" }} />
              <Typography variant="body2" sx={{ mb: "1rem" }}>
                {color?.description}
              </Typography>
              <Divider sx={{ mb: "1rem" }} />
              <Typography variant="body2" fontWeight="bold" sx={{ mb: "1rem" }}>
                {color?.graph?.description}
              </Typography>
              <Divider sx={{ mb: "1rem" }} />
              <CardMedia
                sx={{ height: 140, borderRadius: "4px" }}
                image={color?.graph?.src}
                component="img"
              />
            </CardContent>
            <CardActions>
              <Button size="small">Save</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
export default GenerateOutfitsPage;
