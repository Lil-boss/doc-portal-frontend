import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from './components/Navbar/Navbar';
import Appointment from "./pages/Appointment/Appointment";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import RequiredAuth from "./Auth/RequireAuth";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={
          <RequiredAuth>
            <Appointment />
          </RequiredAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>

    </div>
  );
}

export default App;
