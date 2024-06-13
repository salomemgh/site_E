import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/login";
import Details from "./components/Details";
import Signup from "./components/Signup";
import Dashbord from "./components/Dashbord";
import "./css/index.css";
import AddBlog from "./components/AddBlog";



function App() {
    return(
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashbord />}></Route>
                    <Route path="/Signup" element={<Signup />} />
                    <Route path="/Login" element={<Login />}></Route>
                    <Route path="/Details/:id" element={<Details />}></Route>
                    <Route index path="/dashbord" element={<Dashbord />}></Route> 
                    <Route path="/AddBlog" element={<AddBlog />}></Route>
                </Routes>
        </BrowserRouter>
    )
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);