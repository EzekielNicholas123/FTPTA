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

function ClothesDialog(props) {
  const { onClose, open, clothData } = props;

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Cloth Details</DialogTitle>
      <DialogContent>
        <DialogContentText>File Name: {clothData.filename}</DialogContentText>
        <DialogContentText>
          Relative Path: {clothData.relativePath}
        </DialogContentText>
        <DialogContentText>Width: {clothData.width}</DialogContentText>
        <DialogContentText>Height: {clothData.height}</DialogContentText>
        <DialogContentText>Format: {clothData.format}</DialogContentText>
        <DialogContentText>
          Colour Model: {clothData.colourModel}
        </DialogContentText>
        <DialogContentText>
          Colour Relationship: {clothData.colourRelationship}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
export default ClothesDialog;
