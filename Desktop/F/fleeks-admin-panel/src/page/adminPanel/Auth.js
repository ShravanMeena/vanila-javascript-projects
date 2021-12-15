import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

export default function Auth() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", marginTop: 200 }}>
      You are already logged in!
      <br />
      <br />
      <Button onClick={() => navigate("/dashboard")} variant="contained">
        Dashboard
      </Button>
    </div>
  );
}
