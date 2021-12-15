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
import { useLocation, useNavigate } from "react-router";
import { api } from "../../config/handler";
import { ErrorToast, set, SuccessToast } from "../../config/helper";
import { useDispatch, useSelector } from "react-redux";
import { userDataAction } from "../../redux/actions/user";
import Auth from "../adminPanel/Auth";

const theme = createTheme();

export default function OtpVerify() {
  let navigate = useNavigate();
  const { state } = useLocation();

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    const body = {
      code: "+91",
      otp: data.get("otp"),
      phone: state?.phone,
    };

    if (body.otp.length !== 6) {
      ErrorToast({ msg: "Please provide Correct OTP!" });
      return;
    }

    const res = await api("post", body, "/user/login/verifyotp");
    if (res.data.status) {
      dispatch(userDataAction(res.data));
      set("token", res.data.token);
      navigate(`/dashboard`);
    } else {
      ErrorToast({ msg: "Invalid OTP" });
    }
  };

  const resendOtp = async () => {
    // eslint-disable-next-line no-console
    const body = {
      code: "+91",
      phone: state?.phone,
    };

    const res = await api("post", body, "/user/login");

    if (res.data.status) {
      SuccessToast({ msg: res.data.msg });
    }
  };

  const { data } = useSelector((state) => state.userReducer);

  if (data?.token) {
    return <Auth />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography sx={{ mb: 5 }} component="h1" variant="h5">
            OTP verification
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              mt={10}
              required
              fullWidth
              id="otp"
              label="Enter 6 digit OTP"
              name="otp"
              autoComplete="otp"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Verify
            </Button>
            <Button
            onClick={resendOtp}
            fullWidth
            variant="contained"
            color="primary"
          >
            Resend OTP
          </Button>
          </Box>
         
        </Box>
      </Container>
    </ThemeProvider>
  );
}
