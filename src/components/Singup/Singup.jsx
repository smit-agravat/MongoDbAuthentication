import React, { useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../Redux/apiCalls";
import UpdateProfile from "../UpdateProfile/Updateprofile";

export default function Singup() {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const currentUser = useSelector((state) => state.auth.currentUser);
  const  isFetching  = useSelector((state) => state.auth.currentUser);
  const  error  = useSelector((state) => state.auth.currentUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (password !== passwordConfirm) {
      console.log("password do not match");
    } else {
      register(dispatch, { username, email, password });
      navigate('/');
    }
  }

  return (
    <>
      {currentUser ? (
        <UpdateProfile />
      ) : (
        <Card className="shadow-lg p-3 mb-2 bg-white rounded">
          <Card.Body>
            <h2 className="text-center mb-4">Sing Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="name">
                <Form.Label>UserName</Form.Label>
                <Form.Control
                  type="name"
                  required
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Form.Group>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password-confirm"
                  required
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
              </Form.Group>
              <Button className="w-100 mt-4 mb-4" type="submit">
                Sing Up
              </Button>
            </Form>
            <div className="w-100 text-center mt-2">
              Already have an account? <Link to="/login">Log In</Link>
            </div>
          </Card.Body>
        </Card>
      )}
    </>
  );
}
