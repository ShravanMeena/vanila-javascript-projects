import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

export default function NotAuth() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", marginTop: 200 }}>
      You are logged out! Please login
      <br />
      <br />
      <Button onClick={() => navigate("/")} variant="contained">
        Login
      </Button>
    </div>
  );
}
