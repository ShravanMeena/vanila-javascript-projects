import React from "react";
import Typography from "@mui/material/Typography";
import Title from "../Title";
import { useSelector } from "react-redux";

export default function ReferralLink() {
  const { data } = useSelector((state) => state.userReducer);

  return (
    <React.Fragment>
      <Title>Referral Code</Title>
      <Typography component="p" variant="h5">
        {data.user.referralCode}
      </Typography>
    </React.Fragment>
  );
}
