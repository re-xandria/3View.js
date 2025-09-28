import { Button, Container, Form, Modal } from "react-bootstrap";

export const SignUpForm = ({ setDisplaySignIn, userAuthData, setUserAuthData }) => {
  
    return(
        <>
          <Modal.Header closeButton>
            <Modal.Title>Create an Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container className="px-4 my-1">
              <Form className="mb-2">
                <Form.Group className="mb-3" controlId="userEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="example@email.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="userPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirmUserPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="" />
                </Form.Group>
              </Form>
              <Button className="mt-2 mb-3 w-100">Sign Up</Button>
              <div className="d-flex align-content-center gap-2 my-2">
                <p className="m-0">Aready have an account?</p>
                <Button size="md" variant="link" className="p-0 m-0" onClick={() => setDisplaySignIn(true)}>
                  Sign in here
                </Button>
              </div>
            </Container>
          </Modal.Body>
        </>
    )
}