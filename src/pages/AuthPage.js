import React from "react";
import { firebaseApp } from "../firebase.js";
import AuthForm from "../components/AuthForm/AuthForm.js";

const AuthPage = () => {
  return (
    <div>
      <AuthForm />
    </div>
  );
};

export default AuthPage;
