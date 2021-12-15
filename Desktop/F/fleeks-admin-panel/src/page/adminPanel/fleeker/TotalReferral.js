import React from "react";
import Typography from "@mui/material/Typography";
import Title from "../Title";
import { useSelector } from "react-redux";

export default function TotalReferral() {
  const { data } = useSelector((state) => state.userReducer);

  return (
    <React.Fragment>
      <Title>Total Referral</Title>
      <Typography component="p" variant="h5">
        {data.profile.shared}
      </Typography>
    </React.Fragment>
  );
}