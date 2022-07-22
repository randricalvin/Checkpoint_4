import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectsAdmin from "./pages/ProjectsAdmin";
import ProjectsAdminDetail from "./pages/ProjectsAdminDetail";
import CreateProject from "./pages/CreateProject";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projectsadmin" element={<ProjectsAdmin />} />
          <Route path="/projectsadmin/:id" element={<ProjectsAdminDetail />} />
          <Route path="/createproject" element={<CreateProject />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
