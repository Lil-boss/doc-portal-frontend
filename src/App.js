import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from './components/Navbar/Navbar';
import Appointment from "./pages/Appointment/Appointment";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />

      </Routes>

    </div>
  );
}

export default App;
