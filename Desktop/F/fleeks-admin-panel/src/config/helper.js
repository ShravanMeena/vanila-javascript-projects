import { toast } from "react-toastify";

export const SuccessToast = ({ msg }) => {
  toast.success(msg, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export const ErrorToast = ({ msg }) => {
  toast.error(msg, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export const set = (key, val) => localStorage.setItem(key, val);

export const get = (key) => localStorage.getItem(key);

export const checkAuth = () => {
  const authtoken = get("token");
  if (authtoken) {
    alert("token available");
  } else {
    alert("Not Authorized");
  }
};
