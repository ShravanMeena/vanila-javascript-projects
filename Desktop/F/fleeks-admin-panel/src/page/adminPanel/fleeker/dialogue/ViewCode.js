import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { TextField } from "@mui/material";
import { api } from "../../../../config/handler";

export default function ViewCode({ item }) {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [codes, setCodes] = React.useState([]);
  const [numOfCodesToGenerate, setNumOfCodesToGenerator] = React.useState(5);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
    getCodes();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getCodes = async () => {
    const endpoint = `/clubs/${item?._id}`;
    const body = {};
    const res = await api("get", body, endpoint);
    if (res?.data?.status) {
      setCodes(res?.data?.club?.exclusiveCodes?.reverse());
      setLoading(false);
    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        View Code
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {`you have ${codes?.length} already created!`}
        </DialogTitle>
        {loading ? (
          <h1 style={{ textAlign: "center" }}>Loading...</h1>
        ) : (
          <DialogContent
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {codes?.map((item) => {
              return (
                <h1
                  onClick={() => {
                    navigator.clipboard.writeText(item);
                  }}
                  style={{
                    border: "1px solid #121212",
                    width: "24%",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                >
                  {item}
                </h1>
              );
            })}
          </DialogContent>
        )}
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
