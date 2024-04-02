import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const actiion = () => {
  toast.success("You have been logged out successfully!");
  localStorage.removeItem("token");
  localStorage.removeItem("expiration");
  return redirect("/login");
};
