import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Title from "../Title";
import { api } from "../../../config/handler";
import CircleLoader from "../../../components/loading/CircleLoader";
import { Button } from "@mui/material";

export default function TotalEarn() {
  const [walletData, setWalletData] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchData() {
      const res = await api("get", {}, "/admin-panel/fleeker");

      if (res?.data?.status) {
        setWalletData(res.data.walletBallance.current_balance);
        setLoading(false);
      } else {
        setLoading(false);
      }
    }
    fetchData();



  }, []);
  if (loading) {
    return <CircleLoader />;
  }

  return (
    <React.Fragment>
      <Title>Total Earnings</Title>
      <Typography component="p" variant="h5">
        ₹ {walletData}
      </Typography>

    </React.Fragment>
  );
}
