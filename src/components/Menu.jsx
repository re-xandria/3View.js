import { Nav, Navbar, Container, Form, NavItem, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

export const Menu = ({ onModelUpload, currentModel, setShowSignInModal }) => {

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    onModelUpload((prevUrl) => url);
  };

  

  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand href="#home">3View.js</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100 d-flex justify-content-between">
              <NavItem id="navFileUpload" className="m-2">
                <Form.Group controlId="formFile" className="">
                  <Form.Control
                    type="file"
                    accept=".gltf,.glb"
                    size="sm"
                    onChange={handleFileUpload}
                  />
                </Form.Group>
              </NavItem>
              <NavItem className="d-flex gap-3 m-2">
                <Navbar.Text className="text-white">Sign In to Save Your Uploaded Models</Navbar.Text>
                <Button onClick={() => setShowSignInModal(true)}>Sign In</Button>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
