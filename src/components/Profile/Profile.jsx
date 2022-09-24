import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/apiCalls";
import { reset } from "../../Redux/authRedux";

export default function Profile() {
  const [error, setError] = useState("");
  const currentUser = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    setError("");
    try {
      logout(dispatch);
      dispatch(reset());
      navigate("/login");
    } catch {
      setError("Failed to Log Out");
    }
  }

  return (
    <>
      <Card className="shadow-lg p-3 mb-2 bg-white rounded">
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong>
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
          <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
