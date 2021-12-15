import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Title from "../Title";
import { ErrorToast, SuccessToast } from "../../../config/helper";

export default function WithdarwalMoney({}) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [account_number, setAccountNumber] = useState("");
  const [confirm_account_number, setConfirmAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [bankName, setBankName] = useState("");
  const [accounHolderName, setAccounHolderName] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
    ErrorToast({ msg: "We are working on it!!" });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submit = () => {
    if (!email) {
      ErrorToast({ msg: "Email is required!" });
      return;
    }
    if (amount < 500) {
      ErrorToast({ msg: "Minimum amount request must be ₹500!" });
      return;
    }

    if (!accounHolderName) {
      ErrorToast({ msg: "Account holder name is required!" });
      return;
    }
    if (!bankName) {
      ErrorToast({ msg: "Bank name is required!" });
      return;
    }
    if (!account_number || !confirm_account_number) {
      ErrorToast({ msg: "Account number is required!" });
      return;
    }
    if (account_number !== confirm_account_number) {
      ErrorToast({ msg: "Account number mismatch!" });
      return;
    }

    if (!ifscCode) {
      ErrorToast({ msg: "IFSC code is required!" });
      return;
    }

    // SuccessToast({msg:"Payout will be done on 1st of every month to your bank account!"})
    handleClose()
  };
  return (
    <>
      <Title>Withdrawal</Title>

      <Button
        variant="contained"
        sx={{ mt: 1 }}
        size="large"
        onClick={handleClickOpen}
      >
        Withdrawal Money
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Withdrawal Money</DialogTitle>
          <DialogContent component="form" noValidate onSubmit={() => submit()}>
            <TextField
              margin="normal"
              id="name"
              label="Email"
              type="text"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              margin="normal"
              id="name"
              label="Amount"
              type="text"
              fullWidth
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <TextField
              margin="normal"
              id="name"
              label="Account Holder Name"
              type="text"
              fullWidth
              value={accounHolderName}
              onChange={(e) => setAccounHolderName(e.target.value)}
            />

            <TextField
              margin="normal"
              id="name"
              label="Bank Name"
              type="text"
              fullWidth
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
            />

            <TextField
              margin="normal"
              id="name"
              label="Account Number"
              type="text"
              fullWidth
              value={account_number}
              onChange={(e) => setAccountNumber(e.target.value)}
            />

            <TextField
              margin="normal"
              id="name"
              label="Confirm Account "
              type="password"
              fullWidth
              value={confirm_account_number}
              onChange={(e) => setConfirmAccountNumber(e.target.value)}
            />

            <TextField
              margin="normal"
              id="name"
              label="IFSC code"
              type="text"
              fullWidth
              value={ifscCode}
              onChange={(e) => setIfscCode(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" onClick={submit}>
              Submit
            </Button>
          </DialogActions>
      </Dialog>
    </>
  );
}
