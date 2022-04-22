import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./home"
import Login from "./login"
import Signup from "./signup"
import { UserAuthProvider } from "./context/userAuthenticate"
import ProtectRoute from "./protected"
import './App.css';

function App() {
  return (
    <div className="App" style={{ marginTop: "200px" }}>
      <Router>
        <UserAuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<ProtectRoute> <Home /> </ProtectRoute>} />
            {/* <Route path="/home/dashboard" element={<Home />} />
            <Route path="/home/aboutme" element={<Home />} /> */}
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </UserAuthProvider>
      </Router>

    </div>
  );
}

export default App;
