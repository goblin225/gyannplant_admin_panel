import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Wrappers
import ProtectedRoute from "../utils/ProtectedRoute";
import PublicRoute from "../utils/PublicRoute";
import RoleBasedRedirect from "../utils/RoleBasedRedirect";

// Layout
import Layout from "@/components/layout/Layout";

// Pages
import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import NotFound from "@/pages/NotFound";
import UserManagement from "../pages/UserManagement";
import Courses from "../pages/Courses";
import Questions from "../pages/Questions";
import Category from "../pages/Category";
import ProfileSettings from "../pages/Profile";
import Company from "../pages/Company";
import LeaderBoard from "../pages/LeaderBoard";
import Tasks from "../pages/TaskPage";
import Attendance from "../pages/Attendance";
import College from "../pages/College";
import JobPage from "../pages/JobPage";
import JobApplication from "../pages/JobApplication";

const AppRoutes = () => (
  <BrowserRouter>
    <AnimatePresence mode="wait">
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<RoleBasedRedirect />} />

          <Route path="/Admin" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="course" element={<Courses />} />
            <Route path="category" element={<Category />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="questions" element={<Questions />} />
            <Route path="settings" element={<ProfileSettings />} />
            <Route path="company" element={<Company />} />
            <Route path="leaderboard" element={<LeaderBoard />} />
            <Route path="task" element={<Tasks />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="college" element={<College />} />
            <Route path="job" element={<JobPage />} />
          </Route>

          <Route path="/Teacher" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="course" element={<Courses />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="questions" element={<Questions />} />
            <Route path="settings" element={<ProfileSettings />} />
            <Route path="leaderboard" element={<LeaderBoard />} />
            <Route path="task" element={<Tasks />} />
            <Route path="attendance" element={<Attendance />} />
          </Route>

          <Route path="/College" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="course" element={<Courses />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="leaderboard" element={<LeaderBoard />} />
          </Route>

          <Route path="/Company" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="course" element={<Courses />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="job" element={<JobPage />} />
            <Route path="jobapplication" element={<JobApplication />} />
            <Route path="task" element={<Tasks />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  </BrowserRouter>
);

export default AppRoutes;