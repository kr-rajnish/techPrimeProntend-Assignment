import "./App.css";
import React from "react";
import ProjectListing from "./Components/projectList.js/ProjectListing";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Login from "./Components/loginPage/Login";
import Dashboard from "./Components/dashboard/Dashboard";
import CreateProject from "./Components/createProject/CreateProject";
import { Logout } from "@mui/icons-material";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Sidebar />}>
          <Route path="" element={<Dashboard />} />
          <Route path="projectlist" element={<ProjectListing />} />
          <Route path="createproject" element={<CreateProject />} />
        </Route>
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}
export default App;
