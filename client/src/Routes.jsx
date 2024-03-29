import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "pages/Dashboard";
import NotFound from "pages/NotFound";
const DirectMessage = React.lazy(() => import("pages/DirectMessage"));
const SampleUploadPage = React.lazy(() => import("pages/SampleUpload"));
const Messages = React.lazy(() => import("pages/Messages"));
const Home = React.lazy(() => import("pages/Home"));
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
          <Route path="/home" element={<Home />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/directmessage" element={<DirectMessage />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/sampleupload" element={<SampleUploadPage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
