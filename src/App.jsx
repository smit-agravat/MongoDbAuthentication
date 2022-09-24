import Singup from "./components/Singup/Singup";
import Login from "./components/Login/Login";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Updateprofile from "./components/UpdateProfile/Updateprofile";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";
import Forgotpassword from "./components/ForgotPassword/Forgotpassword";
import { useSelector } from "react-redux";

function App() {
  const currentUser = useSelector((state) => state.auth.currentUser);

  console.log(currentUser);

  return (
    <Container
      className="d-flex align-items-center
     justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100 p-4" style={{ maxWidth: "25em" }}>
        <Router>
          <Routes>
            {/* Dashboard */}
            {currentUser ? (
              <Route path="/" element={<Profile />} />
            ) : (
              <Route path="/" element={<Dashboard />} />
            )}

            {/* Update profile */}
            {currentUser ? (
              <Route path="/update-profile" element={<Updateprofile />} />
            ) : (
              <Route path="/login" element={<Login />} />
            )}

            {/* Forgot password */}
            {currentUser ? (
              <Route path="/forgot-password" element={<Forgotpassword />} />
            ) : (
              <Route path="/login" element={<Login />} />
            )}
            <Route path="/signup" element={<Singup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </Container>
  );
}

export default App;
