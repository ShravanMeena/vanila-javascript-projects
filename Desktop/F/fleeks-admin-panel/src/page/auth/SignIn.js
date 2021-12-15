import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { api } from "../../config/handler";
import { ErrorToast, SuccessToast } from "../../config/helper";
import { useSelector } from "react-redux";
import Auth from "../adminPanel/Auth"

const theme = createTheme();

export default function SignIn() {
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    const body = {
      code: "+91",
      phone: data.get("phone_number"),
    };

    if (body.phone.length !== 10) {
      ErrorToast({ msg: "Mobile number must be 10 char long" });
      return;
    }

    const res = await api("post", body, "/user/login");
    if (res.data.status) {
      SuccessToast({ msg: res.data.msg });
      navigate(`/otp-verify`, { state: { phone: data.get("phone_number") } });
    }
  };

  const { data } = useSelector((state) => state.userReducer);

  if (data?.token) {
    return <Auth />;
  }


  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "70vh",
          }}
        >
          <Avatar sx={{ bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 5 }}
          >
            <TextField
              required
              fullWidth
              id="phone_number"
              label="Phone number"
              name="phone_number"
              autoComplete="phone_number"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Get Otp
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
