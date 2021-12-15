import React, { useEffect } from "react";
import { get } from "../../config/helper";

export default function Redirect() {
  useEffect(() => {
    const authtoken = get("token");
    if (authtoken) {
      alert("Dash");
    } else {
      alert("login");
    }
  }, []);

  return <div>Redirecting...</div>;
}
