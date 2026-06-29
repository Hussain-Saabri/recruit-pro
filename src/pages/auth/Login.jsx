import React from "react";
import LoginComponent from "../../components/login/LoginComponent";

export default function Login({ onLoginSuccess }) {
  return <LoginComponent onLoginSuccess={onLoginSuccess} />;
}
