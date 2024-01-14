import { Route, Routes } from "react-router-dom";
import Freelancers from "./pages/Freelancers";
import Jobs from "./pages/Jobs";
import Home from "./pages/Home";
import Register from "./pages/Register";

export default function App() {
  return (
    <Routes>
      <Route path="freelancers" element={<Freelancers />} />
      <Route path="jobs" element={<Jobs />} />
      <Route path="register" element={<Register />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
