import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import { blue } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import { Wheel } from "@uiw/react-color";
import { PieChart } from "@mui/x-charts/PieChart";
import HeatMap from "react-heatmap-grid";

function ClothesDialog(props) {
  const { onClose, open, clothData } = props;

  const formatHex = (hex) => {
    return "#" + hex.slice(2);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
  const pieParams = { height: 100, margin: { right: 5 } };

  return (
    <Dialog onClose={onClose} open={open}>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        <Box>
          <DialogTitle>Cloth Details</DialogTitle>
          <DialogContent>
            <Divider sx={{ marginBottom: "1rem" }} />
            <DialogContentText>
              <Typography component="span" sx={{ fontWeight: 700 }}>
                File Name:{" "}
              </Typography>
              {clothData.filename}
            </DialogContentText>
            <DialogContentText>
              <Typography component="span" sx={{ fontWeight: 700 }}>
                Relative Path:{" "}
              </Typography>
              {clothData.relativePath}
            </DialogContentText>
            <DialogContentText>
              <Typography component="span" sx={{ fontWeight: 700 }}>
                Width:{" "}
              </Typography>
              {clothData.width}
            </DialogContentText>
            <DialogContentText>
              <Typography component="span" sx={{ fontWeight: 700 }}>
                Height:{" "}
              </Typography>
              {clothData.height}
            </DialogContentText>
            <DialogContentText>
              <Typography component="span" sx={{ fontWeight: 700 }}>
                Format:{" "}
              </Typography>
              {clothData.format}
            </DialogContentText>
            <DialogContentText>
              <Typography component="span" sx={{ fontWeight: 700 }}>
                Colour Model:{" "}
              </Typography>
              {clothData.colourModel}
            </DialogContentText>
            <DialogContentText>
              <Typography component="span" sx={{ fontWeight: 700 }}>
                Colour Relationship:{" "}
              </Typography>
              {clothData.colourRelationship}
            </DialogContentText>
          </DialogContent>
        </Box>
        <Box>
          <DialogTitle>Segments</DialogTitle>
          <DialogContent
            sx={{
              gap: "1rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {Object.keys(clothData.Segments).map((segmentKey) => {
              const segment = clothData.Segments[segmentKey];
              return (
                <Box>
                  <Divider sx={{ marginBottom: "1rem" }} />
                  <Box
                    component="img"
                    src={segment.src}
                    sx={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                      borderRadius: "5px",
                    }}
                  />
                  <DialogContentText>
                    <Typography component="span" sx={{ fontWeight: 700 }}>
                      Segment:{" "}
                    </Typography>
                    {segmentKey}
                  </DialogContentText>
                  <DialogContentText>
                    <Typography component="span" sx={{ fontWeight: 700 }}>
                      Part:{" "}
                    </Typography>
                    {segment.part}
                  </DialogContentText>
                  <DialogContentText>
                    <Typography component="span" sx={{ fontWeight: 700 }}>
                      Size:{" "}
                    </Typography>
                    {segment.size}
                  </DialogContentText>
                  <DialogContentText>
                    <Typography component="span" sx={{ fontWeight: 700 }}>
                      Colour Relationship:{" "}
                    </Typography>
                    {segment.colourRelationship}
                  </DialogContentText>
                  <DialogContentText>
                    <Typography component="span" sx={{ fontWeight: 700 }}>
                      Colour In Segmentations:{" "}
                    </Typography>
                  </DialogContentText>
                  {Object.keys(segment.ColourInSegmentations).map(
                    (colourInSegmentationKey) => {
                      const colourInSegmentation =
                        segment.ColourInSegmentations[colourInSegmentationKey];
                      return (
                        <Box sx={{ marginLeft: "1rem" }}>
                          <DialogContentText>
                            <Typography
                              component="span"
                              sx={{ fontWeight: 700 }}
                            >
                              Position Matrix:{" "}
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <HeatMap
                                xLabels={["", "", ""]}
                                yLabels={["", "", ""]}
                                data={JSON.parse(
                                  colourInSegmentation.positionMatrix
                                )}
                                background={formatHex(
                                  colourInSegmentation.colourDefinition
                                )}
                                yLabelWidth={0}
                                squares
                              />
                            </Box>
                          </DialogContentText>
                          <DialogContentText>
                            <Typography
                              component="span"
                              sx={{ fontWeight: 700 }}
                            >
                              Position Catagory:{" "}
                            </Typography>
                            {colourInSegmentation.positionCatagory}
                          </DialogContentText>
                          <DialogContentText>
                            <Typography
                              component="span"
                              sx={{ fontWeight: 700 }}
                            >
                              Percentage:{" "}
                            </Typography>
                            <PieChart
                              series={[
                                {
                                  data: [
                                    {
                                      id: 0,
                                      value:
                                        colourInSegmentation.percentage * 100,
                                      label:
                                        colourInSegmentation.colourDefinition,
                                      color: formatHex(
                                        colourInSegmentation.colourDefinition
                                      ),
                                    },
                                    {
                                      id: 1,
                                      value:
                                        100 -
                                        100 * colourInSegmentation.percentage,
                                      color: "grey",
                                    },
                                  ],
                                },
                              ]}
                              width={300}
                              height={100}
                              slotProps={{
                                legend: { hidden: true },
                              }}
                              {...pieParams}
                            />
                          </DialogContentText>
                          <DialogContentText>
                            <Typography
                              component="span"
                              sx={{ fontWeight: 700 }}
                            >
                              Colour Definition:{" "}
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <Wheel
                                color={formatHex(
                                  colourInSegmentation.colourDefinition
                                )}
                                width={100}
                                height={100}
                              />
                            </Box>
                          </DialogContentText>
                        </Box>
                      );
                    }
                  )}
                </Box>
              );
            })}
          </DialogContent>
        </Box>
      </Box>
    </Dialog>
  );
}
export default ClothesDialog;
