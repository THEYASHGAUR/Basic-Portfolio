import React from "react";
import './App.css';
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from "./components/About";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Skills from "./components/Skills";

const App = () => {
    return (
        <>
            <Main>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/skills" element={<Skills />} />

                    <Route path="/*" element={<Error />} />
                </Routes>
            </Main>

        </>
    );
}
export default App;
