import { Button } from "@mui/material";
import React from "react";

export default function NotAuthorized() {
  return (
    <div style={{ textAlign: "center", marginTop: 200 }}>
      You Are Not Authorized
      <br />
      <br />
      <a
        href="https://play.google.com/store/apps/details?id=com.fleeks"
        target="_blank"
        rel="noreferrer"
      >
        <Button variant="contained">Become a fleeker</Button>
      </a>
    </div>
  );
}
