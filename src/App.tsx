import { Navigate, Route, Routes } from "react-router-dom";
import Freelancers from "./pages/Freelancers";
import Jobs from "./pages/Jobs";
import Home from "./pages/Home";
import Register from "./pages/Register";
import FreelancerProfile from "./pages/FreelancerProfile";
import JobDetails from "./pages/JobDetails";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="freelancers" element={<Freelancers />} />
      <Route path="freelancers/:id" element={<FreelancerProfile />} />
      <Route path="jobs" element={<Jobs />} />
      <Route path="jobs/:id" element={<JobDetails />} />
      <Route path="register" element={<Register />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
