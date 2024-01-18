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
import FormProfile from "./pages/form/FormProfile";
import Pengumuman from "./pages/Pengumuman";
import FormPengumuman from "./pages/form/FormPengumuman";
import PrestasiSiswa from "./pages/PrestasiSiswa";
import PublicRoutes from "./utils/PublicRoutes";
import PrivateRoutes from "./utils/PrivateRoutes";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="wrapper">
          <Routes>
            <Route element={<PublicRoutes/>}>
              <Route path="/login" element={<Login/>}/>
            </Route>
            <Route element={<PrivateRoutes/>}>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Home />}/>
              <Route path="/page" element={<Page />} />
              <Route path="/form" element={<Form />} />
              <Route path="/kategori" element={<Kategori />} />
              <Route path="/informasi" element={<Informasi />} />           
              <Route path="/informasi/tambah" element={<FormInformasi />} />           
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/profile/tambah" element={<FormProfile/>}/>
              <Route path="/pengumuman" element={<Pengumuman/>}/>
              <Route path="/pengumuman/tambah" element={<FormPengumuman/>}/>
              <Route path="/prestasisiswa" element={<PrestasiSiswa/>}/>
            </Route>
            
            
          </Routes>
        </div>
      </BrowserRouter>
     
    </div>
  )
}

export default App;
