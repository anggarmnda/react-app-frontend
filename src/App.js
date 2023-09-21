import "./App.css";
import React from 'react';
import SideBar from "./components/SideBar";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Login from "./components/Login";
import ShowSidebar from "./components/ShowSidebar";
import Document from "./pages/Document";
import Processor from "./pages/Processor";
import Extraction from "./pages/Extraction";
import Profile from "./pages/Profile";
import Users from "./pages/Users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <div className="app">
        <SideBar >
        <Routes>
          <Route path="/" element={<Document />}/>
          <Route path="/document" element={<Document />} />
          <Route path="/processor" element={<Processor />} />
          <Route path="/extraction" element={<Extraction />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser/>}/>
          <Route path="/users/edit/:id" element={<EditUser/>}/>
          <Route path="/login" element={<Login />} />
        </Routes>
      </SideBar>
      </div>
    </Router>
    </>
  );
}
export default App;
