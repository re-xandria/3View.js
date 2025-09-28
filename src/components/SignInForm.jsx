import { Modal, Button, Container, Form } from "react-bootstrap";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../firebase/auth";
import { useAuth } from "../contexts/authContext";
import { useState, useEffect } from "react";

export const SignInForm = ({
  setDisplaySignIn,
  userData,
  setUserAuthData,
  handleClose
}) => {
  const { userLoggedIn } = useAuth();
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(
        userData.email,
        userData.password
      );
    }
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithGoogle().catch(err => {
        setIsSigningIn(false);
        console.error("Google Sign-In Error:", err);
      });
    }
  }

  useEffect(() => {
    if (userLoggedIn) {
      handleClose();
    }
  }
  , [userLoggedIn, handleClose]);

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Sign In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="px-4 my-1">
          <Form className="mb-2" onSubmit={handleSignInSubmit}>
            <Form.Group className="mb-3" controlId="userEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@email.com"
                value={userData.email}
                onChange={(e) =>
                  setUserAuthData((prevData) => ({
                    ...prevData,
                    email: e.target.value,
                  }))
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="userPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="" 
                value={userData.password}
                onChange={(e) =>
                  setUserAuthData((prevData) => ({
                    ...prevData,
                    password: e.target.value,
                  }))
                }
              />
            </Form.Group>
            <Button className="mt-2 mb-3 w-100" type="submit">
              Sign In
            </Button>
          </Form>
          <div className="d-flex align-content-center gap-2 my-2">
            <p className="m-0">Don't have an account?</p>
            <Button
              size="md"
              variant="link"
              className="p-0 m-0"
              onClick={() => setDisplaySignIn(false)}
            >
              Sign up here
            </Button>
          </div>
        </Container>
      </Modal.Body>
    </>
  );
};
