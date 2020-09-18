import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";
import { firebaseProject } from "../firebase";

export const LoginPage = () => {
  const user = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    // redirect to / if user is logged in
    if (user) {
      history.push("/");
    }
    return () => {};
  }, [user, history]);

  // login form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await firebaseProject
        .auth()
        .signInWithEmailAndPassword(email, password);
      //success
      setError("");
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  const handleSignup = async () => {
    try {
      const res = await firebaseProject
        .auth()
        .createUserWithEmailAndPassword(email, password);
      //success
      setError("");
      console.log(res);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleLogin}>Log in</button>
      <button onClick={handleSignup}>Sign up</button>
      <p>{error}</p>
    </div>
  );
};