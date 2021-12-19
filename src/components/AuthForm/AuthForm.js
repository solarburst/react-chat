import React, { useState } from "react";
import { Input, Button } from "@mui/material";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseApp } from "../../firebase.js";

const AuthForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLogin, setIsLogin] = useState(true);

  const auth = getAuth();

  const handleChange = (e) => {
    const field = e.target.getAttribute("data-name");
    setForm({ ...form, [field]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      return;
    }

    try {
      await onSubmit(form.email, form.password);
    } catch {
      console.log("handle submit error");
    }
  };

  const onSubmit = (email, password) => {
    return isLogin
      ? signInWithEmailAndPassword(auth, form.email, form.password)
      : createUserWithEmailAndPassword(auth, form.email, form.password);
  };

  return (
    <div>
      <h1>{isLogin ? "Login" : "Registration"}</h1>

      <Input
        value={form.email}
        inputProps={{ "data-name": "email" }}
        onChange={handleChange}
      />
      <Input
        value={form.password}
        inputProps={{ "data-name": "password" }}
        onChange={handleChange}
      />
      <Button onClick={onSubmit}>{isLogin ? "Login" : "Registration"}</Button>
      <Button onClick={() => setIsLogin(!isLogin)}>Sign In / Sign Up</Button>
    </div>
  );
};

export default AuthForm;
