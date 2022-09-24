import React, { useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/apiCalls";
import UpdateProfile from "../UpdateProfile/Updateprofile";

export default function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const isFetching = useSelector((state) => state.auth.currentUser);
  const  error  = useSelector((state) => state.auth.currentUser);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if(currentUser){
        navigate('/')
      }else{
        login(dispatch, { username, password });
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  }

  console.log(currentUser);
  return (
    <>
    {currentUser ? (<UpdateProfile/>):(
      <Card className="shadow-lg p-3 mb-2 bg-white rounded">
      <Card.Body>
        <h2 className="text-center mb-4">Log In</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group id="username">
            <Form.Label>UserName</Form.Label>
            <Form.Control
              type="text"
              required
              onChange={(e) => setUserName(e.target.value)}
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
          <Button
            disabled={isFetching}
            className="w-100 mt-4 mb-4"
            type="submit"
          >
            Log In
          </Button>
        </Form>
        <div className="w-100 text-center mt-2">
          <Link to="/forgot-password">Forgot Password</Link>
        </div>
        <div className="w-100 text-center mt-3">
          Need an Account? <Link to="/signup">Sing Up</Link>
        </div>
      </Card.Body>
    </Card>
    )}
      
    </>
  );
}
