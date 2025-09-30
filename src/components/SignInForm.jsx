import { Modal, Button, Container, Form } from "react-bootstrap";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../firebase/auth";
import { useState, useEffect } from "react";
import "../styles.css";

export const SignInForm = ({
  setDisplaySignIn,
  userData,
  setUserAuthData,
  handleClose,
  isUserLoggedIn,
}) => {
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(userData.email, userData.password);
    }
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithGoogle().catch((err) => {
        setIsSigningIn(false);
        console.error("Google Sign-In Error:", err);
      });
    }
  };

  useEffect(() => {
    if (isUserLoggedIn) {
      handleClose();
    }
  }, [isUserLoggedIn, handleClose]);

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
                disabled
                type="email"
                placeholder="example@email.com"
                // value={userData.email}
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
              <Form.Control
              disabled
                type="password"
                placeholder=""
                // value={userData.password}
                onChange={(e) =>
                  setUserAuthData((prevData) => ({
                    ...prevData,
                    password: e.target.value,
                  }))
                }
              />
            </Form.Group>
            <Button
              className="mt-2 mb-3 w-100"
              variant="outline-primary"
              type="submit"
            >
              Sign In
            </Button>
          </Form>
          <div className="d-flex align-content-center justify-content-center gap-2 my-2">
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
          <div className="d-flex justify-content-center align-items-center gap-2 my-2">
            <hr className="flex-grow-1 border-top border-dark"></hr>
            <span className="mx-3 text-muted fw-semibold">OR</span>
            <hr className="flex-grow-1 border-top border-dark"></hr>
          </div>
          <div className="d-flex justify-content-center my-4">
            <button
              className="gsi-material-button"
              style={{ width: "400px" }}
              onClick={doSignInWithGoogle}
            >
              <div className="gsi-material-button-state"></div>
              <div className="gsi-material-button-content-wrapper">
                <div className="gsi-material-button-icon">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    style={{ display: "block" }}
                  >
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                    ></path>
                    <path
                      fill="#4285F4"
                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                    ></path>
                    <path
                      fill="#FBBC05"
                      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                    ></path>
                    <path
                      fill="#34A853"
                      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                    ></path>
                    <path fill="none" d="M0 0h48v48H0z"></path>
                  </svg>
                </div>
                <span className="gsi-material-button-contents">
                  Sign in with Google
                </span>
                <span style={{ display: "none" }}>Sign in with Google</span>
              </div>
            </button>
          </div>
        </Container>
      </Modal.Body>
    </>
  );
};
