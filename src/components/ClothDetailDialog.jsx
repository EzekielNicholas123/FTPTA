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

function ClothesDialog(props) {
  const { onClose, open, clothData } = props;

  const handleListItemClick = (value) => {
    onClose(value);
  };

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
                            {colourInSegmentation.positionMatrix}
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
                            {colourInSegmentation.percentage}
                          </DialogContentText>
                          <DialogContentText>
                            <Typography
                              component="span"
                              sx={{ fontWeight: 700 }}
                            >
                              Colour Definition:{" "}
                            </Typography>
                            {colourInSegmentation.colourDefinition}
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
