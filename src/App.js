import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from './components/Navbar/Navbar';
import Appointment from "./pages/Appointment/Appointment";
import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Register/Register";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>

    </div>
  );
}

export default App;
