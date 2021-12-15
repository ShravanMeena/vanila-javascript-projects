import React from "react";
import SignIn from "./page/auth/SignIn";
import OtpVerify from "./page/auth/OtpVerify";
import AdminPanel from "./page/adminPanel";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// // redux setup
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            <Route path="/dashboard" element={<AdminPanel />} />
            <Route path="/" element={<SignIn />} />
            <Route path="/otp-verify" element={<OtpVerify />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
