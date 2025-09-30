import { Modal, Button, Form, Container } from "react-bootstrap";
import { useState } from "react";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";

export const UserAuthModal = ({ show, onHide, isUserLoggedIn }) => {
  const [displaySignIn, setDisplaySignIn] = useState(true);
  const [userAuthData, setUserAuthData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    isSigningIn: false,
  });

  return (
    <Modal centered size="md" show={show} onHide={onHide}>
      {displaySignIn ? (
        <SignInForm
          setDisplaySignIn={setDisplaySignIn}
          userData={userAuthData}
          setUserData={setUserAuthData}
          handleClose={onHide}
          isUserLoggedIn={isUserLoggedIn}
        />
      ) : (
        <SignUpForm
          setDisplaySignIn={setDisplaySignIn}
          userData={userAuthData}
          setUserData={setUserAuthData}
          handleClose={onHide}
        />
      )}
    </Modal>
  );
};
