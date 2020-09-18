import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";
import { firebaseProject } from "../firebase";
import { Container, Form, Button, Section, Level, Box, Heading } from "react-bulma-components";
import "firebase/firestore";

const { Input, Field, Control, Label } = Form;

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

  const writeUserToFirestore = async(res) => {
    var db = firebaseProject.firestore();
    db.collection("Users")
      .add({
        UserID: res.user.uid
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });

  }

  const handleSignup = async () => {
    try {
      const res = await firebaseProject
        .auth() 
        .createUserWithEmailAndPassword(email, password);
      //success
      setError("");
      writeUserToFirestore(res);
      console.log(res);
    } catch (err) {
      setError(err.message);
    }
  };

  /*
        <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
  */

  return (
    <Container>
      <Box className="space">
        <Section>
        <Heading>Login/Signup</Heading>
          <Field>
            <Label>Email</Label>
            <Control>
              <Input 
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Control>
          </Field>
          <Field>
            <Label>Password</Label>
            <Control>
              <Input 
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Control>
          </Field>
            <Level renderAs="nav">
            <Level.Item>
              <Button onClick={handleLogin}>Log in</Button>
            </Level.Item>
            <Level.Item>
              <Button onClick={handleSignup}>Sign up</Button>
            </Level.Item>
            </Level>
        </Section>
        <p>{error}</p>
      </Box>
    </Container>
  );
};
