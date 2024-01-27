import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const MyProfile = React.lazy(() => import("pages/MyProfile"));
const DirectMessage = React.lazy(() => import("pages/DirectMessage"));
const Messages = React.lazy(() => import("pages/Messages"));
const Home1 = React.lazy(() => import("pages/Home1"));
const Signup = React.lazy(() => import("pages/Signup"));
const Login = React.lazy(() => import("pages/Login"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/directmessage" element={<DirectMessage />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
