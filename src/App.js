import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import "./components/css/all.css";
import Home from "./pages/Home";
import Page from "./pages/Page";
import Form from "./pages/Form";
import Kategori from "./pages/Kategori";
import Informasi from "./pages/Informasi";
import FormInformasi from "./pages/form/FormInformasi";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div class="wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page" element={<Page />} />
            <Route path="/form" element={<Form />} />
            <Route path="/kategori" element={<Kategori />} />
            <Route path="/informasi" element={<Informasi />} />           
            <Route path="/informasi/tambah" element={<FormInformasi />} />           
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </div>
      </BrowserRouter>
     
    </div>
  )
}

export default App;
