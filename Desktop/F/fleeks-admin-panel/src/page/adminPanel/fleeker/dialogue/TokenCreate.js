import * as React from "react";
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
import { SuccessToast } from "../../../../config/helper";

export default function TokenCreate({ item }) {
  const [open, setOpen] = React.useState(false);
  const [numOfCodesToGenerate, setNumOfCodesToGenerator] = React.useState(5);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createCode = async () => {
    const endpoint = `/club/${item?._id}/codes`;
    const body = {
      numOfCodesToGenerate:+numOfCodesToGenerate,
    };

    const res = await api("patch", body, endpoint);
    if (res?.data?.status) {
      SuccessToast({ msg: "Codes created successfullly!" });
      setOpen(false)
    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create Code
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Do you really create code for exclusive members?"}
        </DialogTitle>
        <DialogContent>
          <TextField
            margin="normal"
            id="name"
            label="Email"
            type="number"
            fullWidth
            value={numOfCodesToGenerate}
            onChange={(e) => setNumOfCodesToGenerator(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={createCode} autoFocus>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
