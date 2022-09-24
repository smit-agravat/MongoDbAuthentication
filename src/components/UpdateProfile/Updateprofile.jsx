import React, { useRef, useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Updateprofile() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const isFetching = useSelector((state) => state.auth.currentUser);
  const error = useSelector((state) => state.auth.currentUser);

  const navigate = useNavigate();

  function handleSubmit() {
    navigate("/");
  }

  console.log(currentUser);

  return (
    <>
      <Card className="shadow-lg p-3 mb-2 bg-white rounded">
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password-confirm"
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Button className="w-100 mt-4 mb-4" type="submit">
              Update
            </Button>
          </Form>
          <div className="w-100 text-center mt-1">
            <Link to="/">Cancle</Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
